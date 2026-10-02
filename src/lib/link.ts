// Internal links go through here so the site works at a domain root (production)
// and under a sub-path (GitHub Pages staging: /r5-site/). Set by `base` in astro.config.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const link = (path: string) => `${base}${path}`;
