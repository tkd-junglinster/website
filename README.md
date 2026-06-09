# TKD Junglinster — Website

Website for the TKD Junglinster taekwondo club, built with [Astro](https://astro.build)
and deployed on [Netlify](https://www.netlify.com).

**Looking after the site without being a developer?** Read [HANDOVER.md](./HANDOVER.md)
— it explains everything in plain language.

## Tech stack

- **Astro** — static site generator (fast, no server to maintain)
- **Tailwind CSS** — styling
- **i18n** — three languages: French (default), English, German, served at
  `/fr/`, `/en/`, `/de/`
- **Netlify** — hosting and automatic deploys
- **GitHub** — source code, owned by the `tkd-junglinster` organisation

## Local development

You need [Node.js](https://nodejs.org) 20 or newer installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the local preview at http://localhost:4321
npm run build    # produce the production site into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
public/              Static files served as-is (images, favicon)
src/
  components/        Reusable pieces (Nav, Footer, language switcher, ...)
  layouts/           Page shell (BaseLayout)
  i18n/              Translations (ui.ts) and helpers (utils.ts)
  pages/
    fr/ en/ de/      One folder per language; files become pages
  styles/            Global CSS and theme colours
astro.config.mjs     Astro + i18n configuration
netlify.toml         Netlify build configuration
```
