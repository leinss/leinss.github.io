import js from "@eslint/js"
import astro from "eslint-plugin-astro"
import globals from "globals"
import tseslint from "typescript-eslint"

// Flat config, written out rather than translated from `.eslintrc.cjs` through
// FlatCompat. eslint-plugin-astro 2 dropped its CommonJS entry points, and
// FlatCompat resolves plugins with `require`, so the old setup failed to load
// the plugin at all. The rules below are the ones the eslintrc file carried,
// with the same reasons.
export default [
  {
    // `.astro/` holds type declarations the CLI generates from the content
    // collections. They are rebuilt on every `astro sync` and are not ours
    // to fix, so linting them only produces noise.
    ignores: [".astro/", ".vscode/", "dist/", "node_modules/", "public/"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Brings the Astro parser with it, so `.astro` files no longer need a parser
  // override of their own.
  ...astro.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      // Off, not "never": the tree is an even split between the theme's
      // semicolon-free style and semicolons added since, so the rule reported
      // 221 warnings and enforced nothing. Semicolon placement is a formatter's
      // job; pick one with prettier and run it over the tree if it matters.
      semi: "off",
      quotes: "off",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },

  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      quotes: "off",
    },
  },
]
