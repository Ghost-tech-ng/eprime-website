# eprime-website

The group website for **E-Prime Industries Limited** (RC 8473729), Benin City, Nigeria. It goes live at [eprimeindustries.site](https://eprimeindustries.site).

The home page covers the whole group: four divisions on equal footing, how each one opens, the CAC certificate, and the first shipped product, **EduSmart360**. Each division has its own page:

| Division | Page | Status |
|----------|------|--------|
| E-Prime Tech: software, products, custom builds | `/divisions/tech` | Active |
| E-Prime Agro: greenhouse, poultry, aquaculture | `/divisions/agro` | Forming |
| E-Prime Build: civil, mechanical, electrical works | `/divisions/build` | Forming |
| E-Prime Capital: investment in the group's work | `/divisions/capital` | Forming |

Pages for forming divisions have a roadmap, the go-live rule, and a register-interest form that sends by email or WhatsApp.

## Moving a division to its subdomain

When a division gets its own site, set `site` on that division in `src/content/site.ts`:

```ts
site: "https://tech.eprimeindustries.site",
```

Every link to the division (header, footer, home cards, company page) then points to the subdomain. Links go through `divisionHref()` and `SmartLink`. The `/divisions/<key>` page still builds, so old links keep working. You can redirect it at the host if you want.

## Photos

Photo slots read from `src/assets/photos/`. Any slot without a file shows an isometric drawing placeholder. The filenames, sizes and prompts are in [`src/assets/photos/README.md`](src/assets/photos/README.md).

## Stack

- React 19, TypeScript (strict), Vite 6
- Tailwind CSS v4, with brand tokens in `src/styles/tokens.css` (verdigris `#167A6E`, bronze `#B9822A`, ink `#0A1A1F`). The light theme is the default; visitors can switch to dark.
- `motion` for animation, loaded lazily (`LazyMotion` + `m.*`) so it stays out of the first paint, and respecting `prefers-reduced-motion`
- React Router 7
- Static prerendering: every route is rendered to real HTML at build time, with per-page title, description, canonical, Open Graph, Twitter and JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`, `BreadcrumbList`). The build also writes `sitemap.xml`.

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc -b
npm run build      # typecheck, client build, SSR build, prerender + sitemap → dist/
npm run preview    # serve dist/
```

`dist/` is fully static. Upload it to any host (Hostinger, Netlify, Cloudflare Pages, S3). Configure the host to serve `404.html` for unknown paths. Routes are written as `/<route>/index.html`, so clean URLs work without rewrites.

## Structure

```
src/
  content/      site.ts, products.ts, services.ts. Every word and number on the site lives here.
  seo.ts        route list, meta and JSON-LD per page
  pages/        Home, Division (one template for all four), EduSmart360, Company, Contact, NotFound
  components/   art/       isometric placeholder drawings per division
                brand/     mascot, division logos and colours
                home/      group home sections
                tech/      product shelf, services, how we work (Tech page)
                shared/    contact band, roadmap, go-live card
                layout/, product/, ui/
  assets/photos/  drop-in photos (see its README)
  entry-client.tsx / entry-server.tsx
scripts/prerender.mjs
public/         brand SVGs, icons, CAC certificate, OG image
```

Copy follows the brand voice: sentence case, British spelling, naira first, no exclamation marks, and no claims we cannot prove.

## Plan

**Phase 1: foundation and launch pages (done)**
- Brand tokens, type, light/dark theme, and the grid and derivative-curve motif
- Home: hero, product shelf, services, how we work, divisions, certificate, contact
- EduSmart360 product page: modules, roles, local fit, onboarding, pricing calculator, worked examples
- Company: story, values, leadership, divisions, CAC certificate, legal details, press kit
- Contact: brief form (opens email or WhatsApp with the brief filled in)
- Prerendered HTML, meta, JSON-LD, sitemap, robots, a 404 page, and reduced-motion support

**Phase 2: group site, visuals and the mascot**
- Home rebuilt as the group site, with a page per division and subdomain-ready links (done)
- Light theme by default (done)
- Prime, the bronze robot mascot, in the hero and 404 page (done)
- Photos for the 13 slots in `src/assets/photos/` (pending: drawings show until they arrive)
- Real EduSmart360 screenshots in place of the illustrative dashboard mock
- Product-specific OG images per page

**Phase 3: content depth**
- Work and case studies (`/work`), each with the number it moved
- Service detail pages (`/services/<slug>`)
- EduSmart360 docs, changelog and status pages (currently marked "coming")

**Phase 4: operations**
- Contact form backed by an API (FastAPI or a serverless function), with spam protection and a CRM or email hand-off
- Privacy-friendly analytics, and Core Web Vitals monitoring
- Route-level code splitting, if the bundle grows past budget

**Phase 5: deploy**
- Hostinger (or a CDN host) on `eprimeindustries.site`, with HTTPS, a `www` redirect, and caching headers for `/assets/*`
- CI that runs `npm run build` on every push and deploys `main`
- Submit the sitemap to Google Search Console and Bing Webmaster Tools

## Before going live

- Swap the Gmail address in `src/content/site.ts` for a domain address (for example `hello@eprimeindustries.site`).
- "Greenfield College" in the EduSmart360 mock is illustrative. Replace it with real screenshots, with permission from the school.
