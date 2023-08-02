/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'blue-primary': 'var(--blue-primary)',
      'pink-primary': 'var(--pink-primary)',
      'light-gray': 'var(--light-gray)',
      'dark-gray': 'var(--dark-gray)',
      'black-primary': 'var(--black-primary)',
      'white-primary': 'var(--v)',

    },
    extend: {
      fontFamily: {
        sans: [ "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

