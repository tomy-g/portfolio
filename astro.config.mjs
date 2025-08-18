import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },
  integrations: [react()]
});