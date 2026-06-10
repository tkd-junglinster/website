# Managing the TKD Junglinster website

This guide explains how the website works and how to look after it — written for
club members, **no programming knowledge required**. Keep it up to date as the
site grows.

---

## 1. The big picture

- The website is built with a tool called **Astro** and lives on **GitHub**
  (owned by the `tkd-junglinster` organisation).
- Hosting is handled by **Netlify**. Every time a change is saved to GitHub,
  Netlify automatically rebuilds and publishes the site within a minute or two.
- There is **no separate admin login** like the old WordPress site. Content is
  edited in text files in GitHub, then published automatically.
- The site is available in **three languages**: French (default), English and
  German, at `tkd-junglinster.lu/fr/`, `/en/` and `/de/`.

You never have to touch a server. The flow is always:

> **Edit a file on GitHub → save → wait ~2 minutes → it's live.**

---

## 2. Who owns what (accounts)

Everything is owned by the **club organisation**, not any individual:

| Service | Account / location | What it's for |
| --- | --- | --- |
| GitHub | [github.com/tkd-junglinster/website](https://github.com/tkd-junglinster/website) | Stores all the website files |
| Netlify | `richard@tkd-junglinster.lu` | Publishes the site, manages the domain |
| Domain | `tkd-junglinster.lu` registrar | The web address |

**Current live preview:** the site is published at
**https://tkd-junglinster.netlify.app** while it is being built. The real domain
`tkd-junglinster.lu` still points at the old WordPress site and will only be
switched over once the new site is finished and approved.

**Important:** keep the logins for these in the club's shared password manager so
they survive committee changes. Never store passwords or keys inside the website
files themselves.

---

## 3. Editing text on the site

All the wording lives in **one file**:

```
src/i18n/ui.ts
```

Inside it you'll find the same list of phrases three times — once for French
(`fr`), once for English (`en`), once for German (`de`). For example:

```
'home.hero.title': 'Bienvenue au TKD Junglinster',
```

To change wording: find the line, edit the text **between the quotes**, and leave
the part before the colon (the "key") unchanged. Do this for all three languages
so the site stays consistent. Save, and it publishes automatically.

> Tip: GitHub lets you edit files directly in the browser — open the file, click
> the pencil icon, make your change, and click **Commit changes**.

---

## 4. Editing a page's layout

Pages live in `src/pages/`, with one folder per language (`fr`, `en`, `de`).
Most page content is shared and pulled from the translations file above, so for
day-to-day text changes you only need section 3.

---

## 5. Images

Images live in the `public/` folder (for example `public/images/`). To replace
the homepage banner, upload a new image with the **same name** (`hero.png`),
or add a new one and update where it's used.

---

## 6. Languages

The three languages are French, English and German. French is the default, so
the bare address `tkd-junglinster.lu` sends visitors to the French site. The
language switcher in the top navigation lets visitors change language on any
page.

---

## 7. Sections still to be built

The following parts of the site are planned and will be documented here as they
are added:

- **Home** ✅ (built)
- **Join us** ✅ (built) — fees, free trials, Spond sign-up, medical info, min age
- **Training** ✅ (built) — groups, weekly timetable, venues with maps
- **Calendar** ✅ (built) — the club's own annual calendar (camps, gradings,
  local festivals); renamed from "Events", lives at `/calendar/`
- **Competitions** ✅ (built) — automatically updated calendar (see below)
- **About** ✅ (built) — what taekwondo is, the five virtues, dojang etiquette
  (still to add: coach names/grades)
- **News & gallery** — simple posts with a photo and text (hidden from the nav
  for now; the `/news` pages exist but aren't linked)

### Competitions calendar (display built; automation planned)

The **Competitions** page already shows upcoming competitions, each linking to
its registration page on martial.events. For now the list is kept in the file
`src/data/competitions.json`. The planned automation will run a job once a week
to look up new competitions in Luxembourg, Belgium, France and Germany, put them
in a Google Sheet for a manager to approve, and refresh that file automatically.
Full instructions will be added here once that automation is built.

### Calendar — how to add or edit an event

The **Calendar** page (at `/calendar/`) is the club's own promotional calendar.
Each event is a folder under `src/content/events/`. To add an event, copy an
existing folder (for example `summer-camp-denmark-2026`) and edit the files
inside:

- **`meta.json`** — the facts (edited once, shared by all languages):
  - `type`: `camp`, `competition`, `grading`, `social` or `other`
    (shown as a small grey label on the card)
  - `sortDate`: a date `YYYY-MM-DD` used only to put events in order; use an
    approximate date if the real one isn't known yet
  - `tentative`: `true` if the date isn't fixed yet (shows an amber
    "Tentative date" badge); `false` or omit once the date is confirmed
  - `location`: where it happens, e.g. `"Op Fréinen"` (optional)
  - `heroImage`: a photo placed in `public/images/events/` (optional)
  - `featured`: `true` to highlight it with a "Don't miss" flag
  - `links`: buttons shown on the event page, e.g.
    `[{ "label": "Application form", "url": "https://..." }]`
- **`en.md`, `fr.md`, `de.md`** — the words, one file per language. The part at
  the top (`title`, `summary`, `dateDisplay`) shows on the card; the text below
  it is the full description shown on the event's own page. `dateDisplay` is
  free text, so "Early July 2027 (dates to be confirmed)" is fine.

To remove an event, delete its folder. There is a worked example you can safely
delete: `src/content/events/club-belt-grading-2026/`.

---

## 8. If something looks broken

1. Check the **Netlify dashboard** — the latest deploy will show "Published"
   (good) or "Failed" (a recent edit has a mistake).
2. If a deploy failed, the most common cause is a typo in `src/i18n/ui.ts`
   (e.g. a missing quote or comma). Undo the last change on GitHub and it will
   republish.
3. For anything you're unsure about, ask whoever set the site up before making
   changes to the configuration files (`astro.config.mjs`, `netlify.toml`,
   `package.json`).

---

## 9. Security

- No passwords, API keys or personal logins are stored in the website files.
- Anything secret (such as keys for the competitions automation) is stored as
  encrypted **secrets** in GitHub / Netlify settings, never in the code.
