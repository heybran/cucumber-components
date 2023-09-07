import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import astroLayouts from "astro-layouts";
import codeTitle from "remark-code-title";
import fs from "node:fs";
import type { Plugin } from "vite";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import babel from "@rollup/plugin-babel";

const layoutOptions = {
  "pages/blog/**/*": "@layouts/BlogLayout.astro"
};

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), image(), mdx(), svelte()],
  site: "https://breeze-components.netlify.app",
  markdown: {
    remarkPlugins: [[astroLayouts, layoutOptions], codeTitle],
    syntaxHighlight: 'prism',
  },
  vite: {
    plugins: [
    ],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
});
