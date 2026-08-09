/**
 * Single source of truth for site-wide SEO data: meta tags, Open Graph
 * and JSON-LD structured data all read from here.
 */

export const site = {
  name: 'David Krähenbühl',
  // Bilingual on purpose: German search terms (Schlagzeuger, Musiker) matter
  // as much as English ones for a Zurich-based musician.
  tagline: 'Drummer & Session Musician — Zurich, Switzerland',
  taglineDe: 'Schlagzeuger & Session-Musiker — Zürich, Schweiz',

  /** Browser tab / bookmark title — deliberately just the name. */
  title: 'David Krähenbühl — Drummer',

  /** Longer, descriptive title for link previews and structured data. */
  socialTitle: 'David Krähenbühl — Drummer & Session Musician, Zurich',

  description:
    'David Krähenbühl is a drummer and session musician based in Zurich, Switzerland. ' +
    'Sideman for pop and indie projects, co-leader of the instrumental trio loophole, ' +
    'and drum teacher (Schlagzeuger / Musiker in Zürich). Available for live shows, ' +
    'studio sessions, backing tracks and lessons.',

  descriptionDe:
    'David Krähenbühl ist Schlagzeuger und Session-Musiker aus Zürich. Sideman für Pop- und ' +
    'Indie-Projekte, Co-Leader des Instrumental-Trios loophole sowie Schlagzeuglehrer. ' +
    'Buchbar für Live-Konzerte, Studio-Sessions, Backing Tracks und Unterricht.',

  locality: 'Zurich',
  localityDe: 'Zürich',
  region: 'Canton of Zurich',
  country: 'CH',
  countryName: 'Switzerland',
  // Zurich city centre — used for geo meta tags / local search signals.
  geo: { lat: '47.3769', lon: '8.5417' },

  email: 'hello@davidkraehenbuehl.ch',
  instagram: 'https://www.instagram.com/davidkrae/',
  instrumentor: 'https://www.instrumentor.ch/de/david-kraehenbuehl',

  /** Image used for link previews (Open Graph / social / chat unfurls). */
  ogImage: '/images/dscf0568.jpg',
  ogImageAlt: 'David Krähenbühl, drummer from Zurich',

  /** Job titles in both languages — fed into Person structured data. */
  jobTitles: [
    'Drummer',
    'Schlagzeuger',
    'Session Musician',
    'Session-Musiker',
    'Drum Teacher',
    'Schlagzeuglehrer',
  ],

  /** Topics the person is an authority on; helps AI/entity search. */
  knowsAbout: [
    'Drums',
    'Schlagzeug',
    'Drumming',
    'Session drumming',
    'Studio recording',
    'Backing tracks',
    'Groove and phrasing',
    'Music production',
    'Logic Pro',
    'Ableton Live',
    'Drum lessons',
    'Schlagzeugunterricht',
  ],

  /** Bands and artists he performs with — becomes `memberOf` / `sameAs`. */
  acts: [
    { name: 'loophole', url: 'https://www.loophole.ch' },
    { name: 'James Gruntz', url: 'https://www.jamesgruntz.com' },
    { name: 'Marlin', url: 'https://marlinmusic.ch' },
  ],
} as const;

/** Absolute URL helper — structured data and OG tags require full URLs. */
export function abs(path: string, origin: string | URL): string {
  return new URL(path, origin).toString();
}
