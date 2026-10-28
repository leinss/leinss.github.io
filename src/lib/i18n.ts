export const LANGS = ["en", "de"] as const;
export type Lang = (typeof LANGS)[number];

// English pages live at the root with no prefix; every other language lives
// under /<lang>/, and its content entries under a <lang>/ folder.
export const DEFAULT_LANG: Lang = "en";

const ui = {
  en: {
    dateLocale: "en-US",
    readingTime: "min read",
    switchLabel: "Deutsch",
  },
  de: {
    dateLocale: "de-DE",
    readingTime: "Min. Lesezeit",
    switchLabel: "English",
  },
} satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)["en"];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

// Ids of the imprint and privacy policy in the `staticPages` collection, which
// the footer links on every page and scripts/check-legal-links.mjs enforces.
export const LEGAL_PAGES: Record<Lang, { privacy: string; imprint: string }> = {
  en: { privacy: "privacy", imprint: "imprint" },
  de: { privacy: "de/datenschutz", imprint: "de/impressum" },
};

const PREFIX_RE = new RegExp(
  `^(${LANGS.filter((lang) => lang !== DEFAULT_LANG).join("|")})\\/`
);

/** The language of a content entry, from its id: `de/foo` is German, `foo` English. */
export function entryLang(id: string): Lang {
  return (id.match(PREFIX_RE)?.[1] as Lang | undefined) ?? DEFAULT_LANG;
}

/** An entry id without its language folder: `de/foo` becomes `foo`. */
export function stripLang(id: string): string {
  return id.replace(PREFIX_RE, "");
}
