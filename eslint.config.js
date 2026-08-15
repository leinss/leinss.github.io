import baseConfig from "./.eslintrc.cjs"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: new URL("./", import.meta.url).pathname,
  recommendedConfig: true,
})

export default [
  ...compat.config(baseConfig),
  {
    // `.astro/` holds type declarations the CLI generates from the content
    // collections. They are rebuilt on every `astro sync` and are not ours
    // to fix, so linting them only produces noise.
    ignores: [
      ".astro/",
      ".vscode/",
      "dist/",
      "node_modules/",
      "public/",
    ],
  },
]
