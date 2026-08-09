import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is the canonical domain used for sitemap, canonical links,
// Open Graph URLs and structured data. Change it here (single source of
// truth) if the public address ever changes.
export default defineConfig({
  site: 'https://davidkraehenbuehl.ch',
  output: 'static',
  integrations: [sitemap()]
});
