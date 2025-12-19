import baseConfig from "./.eslintrc.cjs"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: new URL("./", import.meta.url).pathname,
  recommendedConfig: true,
})

export default [
  ...compat.config(baseConfig),
  {
    ignores: [".vscode/", "dist/", "node_modules/", "public/"],
  },
]
