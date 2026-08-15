module.exports = {
  env: {
    node: true,
    browser: true,
    es2024: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
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
  overrides: [
    {
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        quotes: "off",
      },
    },
  ],
}
