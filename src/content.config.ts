import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Curated "annual calendar" events (camps, gradings, club competitions, etc.).
//
// Each event lives in its own folder under src/content/events/<slug>/ :
//   meta.json   — language-neutral facts (date, status, type, image, links)
//   en.md       — English title + summary + promotional text
//   fr.md       — French version
//   de.md       — German version
//
// Splitting "facts" (meta.json) from "words" (the .md files) means the date or
// type is edited in ONE place, while the promo text is written naturally in
// each language. See HANDOVER.md for a copy-paste template.

const eventMeta = defineCollection({
  loader: glob({ pattern: '*/meta.json', base: './src/content/events' }),
  schema: z.object({
    type: z.enum(['camp', 'competition', 'grading', 'social', 'other']),
    // ISO date used ONLY for ordering — never shown. Use the real date if known,
    // otherwise an approximate one (e.g. 2027-07-01 for "early July 2027").
    sortDate: z.string(),
    // Set to true when the date is not yet fixed — the card then shows a
    // "Tentative date" badge. Leave false/omit once the date is confirmed.
    tentative: z.boolean().default(false),
    // Where the event takes place, e.g. "Op Fréinen" — shown on the calendar
    // card and the detail page. Optional.
    location: z.string().optional(),
    country: z.enum(['LU', 'BE', 'FR', 'DE', 'OTHER']).optional(),
    // Path to an image in /public, e.g. "/images/events/summer-camp.jpg".
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    // Action links shown on the detail page (application form, info, Spond, ...).
    links: z
      .array(z.object({ label: z.string(), url: z.string().min(1) }))
      .default([]),
  }),
});

const eventText = defineCollection({
  loader: glob({
    pattern: ['*/en.md', '*/fr.md', '*/de.md'],
    base: './src/content/events',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Human-friendly date text, translated per language, e.g.
    // "Early July 2027 (dates to be confirmed)".
    dateDisplay: z.string(),
  }),
});

export const collections = { eventMeta, eventText };
