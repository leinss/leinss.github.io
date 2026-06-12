import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";
import { postLang } from "@lib/blog";

type Context = {
  site: string
}

export async function GET(context: Context) {
  // The default feed carries English content only; the German posts are
  // translations and would otherwise show up as duplicate topics.
  const blog = (await getCollection("blog"))
    .filter(post => !post.data.draft)
    .filter(post => postLang(post) === "en");

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
    customData: `<language>en</language>`,
  });
}
