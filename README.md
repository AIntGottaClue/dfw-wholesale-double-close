# DFW Wholesale Double Close (Astro)

Astro site for wholesale double close transactional funding across the Dallas-Fort Worth metro. 54 pages: home (metro), 46 city service-area pages, 3 guides, privacy policy, terms of service, plus sitemap routes.

## Coverage

City pages cover every place with 30,000+ population in the Dallas-Fort Worth-Arlington, TX MSA (OMB Bulletin 23-01, July 2023), grouped by county in the nav:

- Dallas County: Dallas, Garland, Irving, Grand Prairie, Mesquite, Carrollton, Richardson, Rowlett, DeSoto, Cedar Hill, Coppell, Lancaster, Duncanville, Farmers Branch, Sachse
- Tarrant County: Fort Worth, Arlington, Mansfield, North Richland Hills, Euless, Grapevine, Bedford, Keller, Haltom City, Hurst, Southlake
- Collin County: Plano, Frisco, McKinney, Allen, Wylie, Prosper, Celina
- Denton County: Denton, Lewisville, Flower Mound, Little Elm, The Colony
- Ellis County: Waxahachie, Midlothian
- Johnson County: Cleburne, Burleson
- Rockwall County: Rockwall
- Kaufman County: Forney
- Parker County: Weatherford
- Hunt County: Greenville

Multi-county cities are grouped under the county holding most of the city. Wise County has no 30,000+ place and is covered by the metro home page, which names it as part of the service area. Populations: ACS 2024 5-year estimates (Census Reporter).

## Build

    npm install
    npm run build      # SSR build for Cloudflare (dist/ + dist/_worker.js)
    npm run preview    # local preview of the build

## Deploy on Cloudflare (Workers)

Astro SSR deploys as a Cloudflare Worker. `wrangler.jsonc` must keep `main = ./dist/_worker.js/index.js`, the `ASSETS` binding on `./dist`, and `compatibility_flags = ["nodejs_compat"]`; `public/.assetsignore` must contain `_worker.js`. Connect the repo in the Cloudflare dashboard (Workers & Pages, framework preset Astro, build command `npm run build`, output `dist`) and attach the custom domain.

## Fill before launch

1. `dfw.wholesaledoubleclose.click` in `astro.config.mjs` and `src/data/cities.ts` (used for canonical URLs, Open Graph, sitemap, and JSON-LD).
2. `G-XXXXXXXXXX` in `src/layouts/Base.astro` (GA4 measurement ID, two spots in the same snippet). GA4 is intentionally left pending until Javier confirms this site.
3. The AirChatty tracking ID in `src/layouts/Base.astro` matches the Atlanta and DMV sites.

After launch, send a live test submission to confirm leads land in GHL.

## Fees

Every fee figure renders server-side from the shared "WDC Fee Terms" Google Sheet (gviz JSON), with a baked-in fallback if the sheet is unreachable. See `src/data/feeTerms.ts` for the sheet link and editing rules.

## Structure

- `src/data/cities.ts` - all city content, brand name, trust bar, and nearby-service-area links. To add a city, add one entry here; the page, nav menu, footer links, and JSON-LD are generated automatically. Each city carries `state` / `stateName` / `county` fields that drive the menu grouping, the local-note marker, and structured data.
- `src/data/metro.ts` - home page content.
- `src/pages/[slug].astro` - city page generator.
- `src/components/CityContent.astro` - shared page body (hero, form, sections, sticky mobile CTA).
- `src/components/DealForm.astro` - the deal form and success card.

## Form pattern (matches GHL mapping)

- Form id/name: `DFW-Wholesale-Double-Close-Form` on every page (same single-form pattern as the other WDC sites).
- Fields: `full_name`, `phone`, `email`, textarea `page_details`.
- CSS-hidden attribution inputs (not `type="hidden"`, which AirChatty skips): `page_site` = "DFW Wholesale Double Close", `page_location` = "Homepage" or "City, TX", `page_code` = "WDC".
- Hidden honeypot field `website`: ignore any GHL lead where it has a value.
- Phone is normalized client-side to +1XXXXXXXXXX before the tracker captures the submit.
- Submissions are captured by the AirChatty script; there is no form backend. After a confirmed tracker 200/ok, the form swaps to a Deal Received card with a Submit another deal option.

## Design

Same design system as the Atlanta and DMV sites: Inter and DM Serif Display, navy/white surfaces, green CTAs, diagonal hero lines, hero form card, trust bar, county-grouped Service Areas mega menu, native FAQ accordion, floating Submit Deal button, and a mobile sticky CTA that hides while the hero form is visible. Copy follows the standing rules: no eyebrow or kicker labels, no hero subheadline, no em dashes, no invented stats, and no named firms.
