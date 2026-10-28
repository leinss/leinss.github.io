import { feed } from "@lib/rss"

export const GET = (context: { site: string }) => feed("de", context.site)
