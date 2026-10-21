import { SITE_URL, company } from "./content/site";
import { edusmart } from "./content/products";

type JsonLd = Record<string, unknown>;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
  jsonLd?: JsonLd[];
  noindex?: boolean;
}

const organization: JsonLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  alternateName: company.short,
  url: SITE_URL,
  logo: `${SITE_URL}/icons/app-icon-512.png`,
  image: `${SITE_URL}/images/og-image.png`,
  description: company.boilerplateShort,
  slogan: company.tagline,
  foundingDate: company.incorporated,
  founder: { "@type": "Person", name: company.founder },
  taxID: company.tin,
  identifier: { "@type": "PropertyValue", propertyID: "CAC RC", value: company.rc },
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressRegion: company.region,
    addressCountry: company.countryCode,
  },
  areaServed: { "@type": "Country", name: company.country },
  email: company.email,
  telephone: company.phoneE164,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: company.phoneE164,
    email: company.email,
    areaServed: company.countryCode,
    availableLanguage: ["en"],
  },
  knowsAbout: ["Software development", "Web development", "Mobile apps", "School management software", "Cloud hosting", "IT consulting"],
};

const website: JsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

function breadcrumbs(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

const prices = edusmart.tiers.map((t) => t.perStudent);

const edusmartApp: JsonLd = {
  "@type": "SoftwareApplication",
  name: edusmart.name,
  url: `${SITE_URL}/products/${edusmart.slug}`,
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "School management software",
  operatingSystem: "Web browser",
  description: edusmart.summary,
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "NGN",
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
    offerCount: edusmart.tiers.length,
    description: "Per student, per term. Added to the fee invoice so the school pays nothing from its own budget.",
  },
  featureList: [...edusmart.pillars.map((p) => p.title), ...edusmart.everythingElse].join(", "),
};

export const routes: RouteMeta[] = [
  {
    path: "/",
    title: "E-Prime Industries · Prime movers. Software built in Benin City",
    description:
      "E-Prime Industries builds websites, mobile apps and custom software from Benin City, and ships EduSmart360, school management for Nigerian schools. RC 8473729.",
    priority: 1,
    changefreq: "weekly",
    jsonLd: [organization, website],
  },
  {
    path: `/products/${edusmart.slug}`,
    title: "EduSmart360 by E-Prime · School management software for Nigerian schools",
    description:
      "Accounting, HR and payroll, NFC student cards and a parent portal in one system. From ₦2,500 per student per term, added to fees so the school pays ₦0. Live in about three weeks.",
    priority: 0.9,
    changefreq: "monthly",
    jsonLd: [
      edusmartApp,
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Products", path: "/#products" },
        { name: edusmart.name, path: `/products/${edusmart.slug}` },
      ]),
    ],
  },
  {
    path: "/company",
    title: "Company · E-Prime Industries Limited, RC 8473729",
    description:
      "E-Prime Industries Limited was incorporated in Nigeria on 12 May 2025, RC 8473729. See our certificate of incorporation, our four divisions and how we work.",
    priority: 0.7,
    changefreq: "monthly",
    jsonLd: [
      { ...organization, "@type": "Organization" },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Company", path: "/company" },
      ]),
    ],
  },
  {
    path: "/contact",
    title: "Contact · Start a project with E-Prime Industries",
    description:
      "Tell us what you need built: a website, a mobile app, custom software or EduSmart360 for your school. WhatsApp 0810 638 2861.",
    priority: 0.6,
    changefreq: "yearly",
    jsonLd: [
      {
        "@type": "ContactPage",
        url: `${SITE_URL}/contact`,
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  },
];

export const notFoundMeta: RouteMeta = {
  path: "/404",
  title: "Not found · E-Prime Industries",
  description: "This page has not shipped.",
  priority: 0,
  changefreq: "yearly",
  noindex: true,
};

export function metaFor(pathname: string): RouteMeta {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routes.find((r) => r.path === clean) ?? notFoundMeta;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function renderHead(meta: RouteMeta): string {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const image = `${SITE_URL}${meta.ogImage ?? "/images/og-image.png"}`;
  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${company.name}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="E-Prime Industries. Prime movers." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];
  if (meta.jsonLd && meta.jsonLd.length > 0) {
    const graph = JSON.stringify({ "@context": "https://schema.org", "@graph": meta.jsonLd }).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json">${graph}</script>`);
  }
  return tags.join("\n    ");
}
