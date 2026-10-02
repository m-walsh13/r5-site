// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Staging (GitHub Pages) builds set BASE_PATH=/r5-site and STAGING=true.
export default defineConfig({
  site: 'https://www.r5global.co.uk',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
