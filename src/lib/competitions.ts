import data from '../data/competitions.json';

export interface Competition {
  /** Stable id / slug (matches the martial.events URL slug). */
  id: string;
  name: string;
  country: 'LU' | 'BE' | 'FR' | 'DE';
  /** City/venue. Optional — some sources (e.g. the LTF calendar) don't list it. */
  city?: string;
  /** Start date, ISO `YYYY-MM-DD`. */
  start: string;
  /** End date for multi-day events, ISO `YYYY-MM-DD`. Omitted for single-day. */
  end?: string;
  /** Link back to the martial.events registration page. */
  url: string;
  /** Whether a club manager has approved this event for display. */
  approved: boolean;
}

/** Parse `YYYY-MM-DD` as a local date (avoids UTC off-by-one when formatting). */
export function parseLocalDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Approved, not-yet-finished competitions, soonest first.
 * `now` is injectable for testing; defaults to the build time.
 */
export function getUpcomingCompetitions(now = new Date()): Competition[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return (data as Competition[])
    .filter((c) => c.approved)
    .filter((c) => parseLocalDate(c.end ?? c.start) >= today)
    .sort((a, b) => a.start.localeCompare(b.start));
}
