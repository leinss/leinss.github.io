import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { HOME } from "@consts"
import { postLang } from "@lib/blog"
import { inLang, type Lang, localePath, stripLang } from "@lib/i18n"

/**
 * One feed per language: /rss.xml carries the English posts and projects,
 * /de/rss.xml the German ones. Mixing them would list every topic twice.
 */
export async function feed(lang: Lang, site: string) {
  const blog = (await getCollection("blog"))
    .filter((post) => !post.data.draft && postLang(post) === lang)
    .map((post) => ({ data: post.data, link: `/blog/${post.id}/` }))

  const projects = inLang(await getCollection("projects"), lang)
    .filter((project) => !project.data.draft)
    .map((project) => ({
      data: project.data,
      link: localePath(lang, `/projects/${stripLang(project.id)}/`),
    }))

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())

  return rss({
    title: HOME[lang].TITLE,
    description: HOME[lang].DESCRIPTION,
    site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: item.link,
    })),
    customData: `<language>${lang}</language>`,
  })
}
