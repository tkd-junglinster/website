// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Public URL of the live site. Update if the domain changes.
  site: 'https://tkd-junglinster.lu',

  // Multilingual routing. French is the default language; English and German
  // are also available. Every language is served under its own URL prefix:
  //   /fr/  /en/  /de/
  i18n: {
    locales: ['fr', 'en', 'de'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  // Visiting the bare root sends the visitor to the French homepage.
  redirects: {
    '/': '/fr/',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
