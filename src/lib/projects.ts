import { type CollectionEntry, getCollection } from "astro:content"
import { inLang, type Lang, LANGS, langId, stripLang } from "@lib/i18n"

/**
 * getStaticPaths for the project pages of one language. The slug drops the
 * language folder, so `de/TobiBoard` is served at /de/projects/TobiBoard.
 */
export async function projectPaths(lang: Lang) {
  const all = (await getCollection("projects")).filter((project) => !project.data.draft)
  return inLang(all, lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((project) => ({
      params: { slug: stripLang(project.id) },
      props: {
        project,
        translations: LANGS.filter((other) =>
          all.some((entry) => entry.id === langId(other, stripLang(project.id))),
        ),
      },
    }))
}

export type ProjectPageProps = {
  project: CollectionEntry<"projects">
  translations: Lang[]
}
