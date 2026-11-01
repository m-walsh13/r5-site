# R5 Global — website

Astro static site built from the kit in `r5-kit/` (brand, sitemap, content,
tokens, logos). Pages follow `r5-kit/docs/sitemap.md` section-for-section.

## Run it

Node is installed locally in `.tools/node` (not system-wide):

```bash
export PATH="$PWD/.tools/node/bin:$PATH"
npm run dev      # http://localhost:4321 (Astro 7 runs the dev server in the background)
npm run build    # static output in dist/
```

Stop the background dev server with `npx astro dev stop`.

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Approved facts, nav, accreditations, sectors |
| `src/data/services.ts` | The 11 services — copy, approach, features, image |
| `src/data/pages.ts` | Page copy, SEO titles/descriptions, case studies, FAQs |
| `src/data/images.ts` | Placeholder Unsplash photography, matched to content |
| `src/styles/tokens.css` | Signed-off tokens (from the kit; fonts now self-hosted) |
| `src/styles/global.css` | Component system — build additions flagged at the top |
| `src/components/` | Header, footer, ring, service blocks, forms, etc. |
| `src/pages/` | Home, About, Consulting, Security Operations, Contact, 404 |

Copy is separated from layout so a CMS can later take over `src/data/` while
the structure stays locked.

## Placeholders to replace before launch

- **Copy** — client-approved copy (28 Oct 2026) is in. Anything still ours is marked `NOT CLIENT COPY` in `src/data/pages.ts` (FAQs, form headings, About facts/what-we-do/accreditations, SEO meta, 24/7 section).
- **Case studies** — client copy in (`src/data/caseStudies.ts`), listing at `/case-studies/` + one page each. Named clients need permission confirmed; images are Unsplash placeholders.
- **Our people** — names, roles and bios in; headshots, surnames (Alannah, Gabriel) and LinkedIn links still to come.
- **Reviews** — skeleton cards awaiting the Trustpilot / Google integration.
- **Booking** — panel reserved for the chosen tool (Calendly / Cal.com / etc.).
- **Enquiry form** — validates and segments, but has no backend yet (`contact.astro`).
- **Accreditation marks** — ring monograms stand in for official SIA / ACS / ICO logos.
- **Photography** — Unsplash placeholders in muted colour, matched to content.
- **Hero dial images** — Shad Thames placeholder. Add four same-framing versions (dawn, day, dusk, night) to `public/images/hero/` and point `src/data/heroDial.ts` at them; the dial then crossfades real photos instead of simulating the light.
- **Privacy policy** — the form's consent line needs one to link to.
