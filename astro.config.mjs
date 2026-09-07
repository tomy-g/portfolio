// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://tomyg.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // No adapter and no framework integration on purpose: the site is a single
  // prerendered document with no client-side JavaScript.
  vite: {
    plugins: [tailwindcss()],
  },
})
