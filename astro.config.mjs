import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  integrations: [astroI18next(), react()],
});
