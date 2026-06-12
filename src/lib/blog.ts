import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const LANGS = ["en", "de"] as const;
export type Lang = (typeof LANGS)[number];

// Regex built from LANGS so adding a new language only requires updating LANGS.
const LANG_PREFIX_RE = new RegExp(`^(${LANGS.join("|")})\\/`);

/**
 * The translation-pairing key for a post: its id with any leading
 * `en/` or `de/` language directory stripped. Posts that are translations
 * of each other share the same key (e.g. `en/foo` and `de/foo` → `foo`).
 */
export function pairKey(post: BlogPost): string {
  return post.id.replace(LANG_PREFIX_RE, "");
}

/** A post's language, derived from the id prefix (en/ or de/). */
export function postLang(post: BlogPost): Lang {
  const prefixMatch = post.id.match(LANG_PREFIX_RE);
  const prefixLang = prefixMatch ? (prefixMatch[1] as Lang) : null;
  const frontmatterLang = post.data.lang;

  if (prefixLang !== null && prefixLang !== frontmatterLang) {
    throw new Error(
      `[blog] Lang mismatch for "${post.id}": directory prefix is "${prefixLang}" but frontmatter lang is "${frontmatterLang}". Fix one to match the other.`
    );
  }

  return frontmatterLang;
}

/** Posts in a single language, newest first. */
export function postsForLang(posts: BlogPost[], lang: Lang): BlogPost[] {
  return posts
    .filter((post) => postLang(post) === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Map of pairKey → { en?, de? } so a post can find its translation in the
 * other language for hreflang alternates.
 * Throws at build time if two posts share the same (pairKey, lang) slot.
 */
export function buildTranslationIndex(
  posts: BlogPost[]
): Map<string, Partial<Record<Lang, BlogPost>>> {
  const index = new Map<string, Partial<Record<Lang, BlogPost>>>();
  for (const post of posts) {
    const key = pairKey(post);
    const lang = postLang(post);
    const group = index.get(key) ?? {};
    if (group[lang] !== undefined) {
      throw new Error(
        `[blog] Duplicate (pairKey, lang) slot: key="${key}" lang="${lang}" is claimed by both "${group[lang]!.id}" and "${post.id}". Rename one post to resolve the collision.`
      );
    }
    group[lang] = post;
    index.set(key, group);
  }
  return index;
}
