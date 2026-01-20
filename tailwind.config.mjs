import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.5" }],     // 14px
        sm: ["1rem", { lineHeight: "1.5" }],         // 16px
        base: ["1.125rem", { lineHeight: "1.8", letterSpacing: "0.015em" }],   // 18px - body text
        lg: ["1.25rem", { lineHeight: "1.6" }],      // 20px - card titles
        xl: ["1.5rem", { lineHeight: "1.5" }],       // 24px - section headings
        "2xl": ["1.875rem", { lineHeight: "1.4" }],  // 30px - page headings
        "3xl": ["2.25rem", { lineHeight: "1.35" }],  // 36px
        "4xl": ["2.75rem", { lineHeight: "1.25" }],  // 44px
      },
    },
  },
  plugins: [typography],
};
