// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://v2.sheriffjolaoso.com", // Will update after Vercel deployment
  output: "static",
  integrations: [vue(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
