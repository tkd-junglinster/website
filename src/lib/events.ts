import { getCollection, getEntry, render } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type EventStatus =
  | 'save-the-date'
  | 'provisional'
  | 'confirmed'
  | 'registration-open';
export type EventType = 'camp' | 'competition' | 'grading' | 'social' | 'other';

export interface EventCard {
  slug: string;
  type: EventType;
  status: EventStatus;
  sortDate: string;
  country?: 'LU' | 'BE' | 'FR' | 'DE' | 'OTHER';
  heroImage?: string;
  featured: boolean;
  links: { label: string; url: string }[];
  title: string;
  summary: string;
  dateDisplay: string;
}

/** Slug for a folder, derived from a collection entry id like "my-event/meta". */
const slugOf = (id: string) => id.split('/')[0];

/** Find an event's text in the wanted language, falling back to en then fr. */
async function getText(slug: string, lang: Lang) {
  return (
    (await getEntry('eventText', `${slug}/${lang}`)) ??
    (await getEntry('eventText', `${slug}/en`)) ??
    (await getEntry('eventText', `${slug}/fr`))
  );
}

/** All event folder slugs (language-neutral) — used for static path generation. */
export async function getAllEventSlugs(): Promise<string[]> {
  const metas = await getCollection('eventMeta');
  return metas.map((m) => slugOf(m.id));
}

/** Cards for the calendar listing, in the given language, soonest first. */
export async function getEventCards(lang: Lang): Promise<EventCard[]> {
  const metas = await getCollection('eventMeta');
  const cards: EventCard[] = [];
  for (const meta of metas) {
    const slug = slugOf(meta.id);
    const text = await getText(slug, lang);
    if (!text) continue;
    cards.push({ slug, ...meta.data, ...text.data });
  }
  return cards.sort((a, b) => a.sortDate.localeCompare(b.sortDate));
}

/** Full detail (incl. rendered Markdown body) for one event in one language. */
export async function getEventDetail(slug: string, lang: Lang) {
  const meta = await getEntry('eventMeta', `${slug}/meta`);
  const text = await getText(slug, lang);
  if (!meta || !text) return null;
  const { Content } = await render(text);
  return { slug, ...meta.data, ...text.data, Content };
}
