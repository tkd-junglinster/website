// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public URL of the live site. Update if the domain changes.
  site: 'https://tkd-junglinster.lu',

  // Multilingual routing. English is the default language; French and German
  // are also available. Every language is served under its own URL prefix:
  //   /en/  /fr/  /de/
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      // The bare root (/) is redirected to /en/ via the `redirects` map below,
      // so we don't also let Astro auto-redirect it (avoids a route conflict).
      redirectToDefaultLocale: false,
    },
  },

  // Visiting the bare root sends the visitor to the English homepage.
  redirects: {
    '/': '/en/',
  },
});
