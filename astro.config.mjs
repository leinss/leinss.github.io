import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

import sentry from "@sentry/astro"
import spotlightjs from "@spotlightjs/astro"

export default defineConfig({
  site: "https://leinss.xyz",
  // base: "/astro-sphere",
  // trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    // sentry(), spotlightjs()
  ],
})
