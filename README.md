# eprime-website

The website for **E-Prime Industries Limited** (RC 8473729), a software company in Benin City, Nigeria. It goes live at [eprimeindustries.site](https://eprimeindustries.site).

It covers the company, its services, the four divisions, the CAC certificate, and the first product, **EduSmart360** (school management for Nigerian schools).

## Stack

- React 19, TypeScript (strict), Vite 6
- Tailwind CSS v4, with brand tokens in `src/styles/tokens.css` (verdigris `#167A6E`, bronze `#B9822A`, ink `#0A1A1F`)
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
  pages/        Home, EduSmart360, Company, Contact, NotFound
  components/   layout/, home/, product/, shared/, ui/
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

**Phase 2: visuals and the mascot**
- Bronze-and-verdigris mascot (non-human, carrying the prime stroke) for the hero, 404 page and empty states
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
