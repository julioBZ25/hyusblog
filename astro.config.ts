import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";

import node from "@astrojs/node";
import { spectreDark } from "./src/ec-theme";

// https://astro.build/config
export default defineConfig({
  site: "https://spectre.louisescher.dev",
  output: "static",
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: "Hyus",
      openGraph: {
        home: {
          title: "Hyus",
          description: "Página principal | Hyus",
        },
        blog: {
          title: "Blog",
          description: "Artículos de tech, videojuegos, entre otros | Hyus",
        },
      },
      //PENDIENTE
      giscus: {
        repository: "louisescher/spectre",
        repositoryId: "R_kgDONjm3ig",
        category: "General",
        categoryId: "DIC_kwDONjm3is4ClmBF",
        mapping: "pathname",
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: "en",
      },
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
