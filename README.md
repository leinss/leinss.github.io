# leinss.xyz

Source for [leinss.xyz](https://leinss.xyz) — the personal site and portfolio of
Tobias Leinss, builder of privacy-first, on-device apps with optional
bring-your-own-key AI.

## Stack

- [Astro](https://astro.build) 6 with MDX
- [Tailwind CSS](https://tailwindcss.com) 4 (via the Vite plugin)
- TypeScript, ESLint, pnpm
- Content collections (blog, projects, work, education, static pages) with Zod
  schemas
- Sitemap, RSS feed, JSON-LD structured data
- Self-hosted [umami](https://umami.is) analytics and Listmonk newsletter

Built on the [astro-nano](https://github.com/markhorn-dev/astro-nano) theme.

## Development

```bash
pnpm install          # install dependencies
pnpm dev              # start the dev server at localhost:4321
pnpm dev:network      # dev server reachable on the local network (--host)
pnpm build            # type-check (astro check) + production build to dist/
pnpm preview          # preview the production build
pnpm lint             # run ESLint
pnpm lint:fix         # fix lint issues
```

## Content

Content lives in `src/content/`:

| Collection    | Location                  |
| ------------- | ------------------------- |
| `blog`        | `content/blog/{en,de}/`   |
| `projects`    | `content/projects/`       |
| `work`        | `content/work/`           |
| `education`   | `content/education/`      |
| `staticPages` | `content/staticPages/`    |

Most blog posts are bilingual: `en/<name>` and `de/<name>` directories that
share a name are treated as translations of each other (language toggle on
`/blog`, `hreflang` alternates on the post pages). Posts at the root of
`content/blog/` are legacy entries without a language subdirectory and default
to English.

## Deployment

Pushing to the `release` branch triggers `.github/workflows/deploy.yaml`, which
runs `pnpm build` and publishes `dist/` to GitHub Pages. The site is served from
the custom domain in `public/CNAME`.
