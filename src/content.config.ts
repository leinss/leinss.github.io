import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

// Strip trailing /index so directory-style entries (my-post/index.md) keep
// the same URL-friendly id they had in legacy content collections.
function stripIndex({ entry }: { entry: string }) {
  return entry.replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, "")
}

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog", generateId: stripIndex }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional().default([]),
    lang: z.enum(["en", "de"]).optional().default("en"),
    image: z.string().optional(),
  }),
})

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work", generateId: stripIndex }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects", generateId: stripIndex }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
})

const education = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/education", generateId: stripIndex }),
  schema: z.object({
    place: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const staticPages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/staticPages", generateId: stripIndex }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
})

export const collections = { blog, work, projects, education, staticPages }
