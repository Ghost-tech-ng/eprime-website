export const SITE_URL: string = (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://eprimeindustries.site";

export const company = {
  name: "E-Prime Industries",
  legalName: "E-Prime Industries Limited",
  short: "E-Prime",
  tagline: "Prime movers.",
  rc: "8473729",
  tin: "33170137-0001",
  incorporated: "2025-05-12",
  incorporatedLabel: "12 May 2025",
  companyType: "Private company limited by shares",
  act: "Companies and Allied Matters Act 2020",
  registrar: "Corporate Affairs Commission",
  city: "Benin City",
  region: "Edo State",
  country: "Nigeria",
  countryCode: "NG",
  coordinates: "6.3350° N, 5.6037° E",
  founder: "Osemwegie Eghosa Ephraim",
  domain: "eprimeindustries.site",
  email: "osemwegieeghosa@gmail.com",
  phoneDisplay: "0810 638 2861",
  phoneE164: "+2348106382861",
  whatsapp: "https://wa.me/2348106382861",
  cacSearch: "https://search.cac.gov.ng/home",
  legalLine: "E-Prime Industries Limited · RC 8473729 · Benin City, Edo State, Nigeria",
  boilerplateShort:
    "E-Prime Industries is a Benin City company that builds software, farms, structures and capital from first principles. Registered in Nigeria, RC 8473729.",
  boilerplateLong:
    "E-Prime Industries Limited is a Nigerian company founded in Benin City in 2025. Its first division, E-Prime Tech, designs, ships and runs software products: mobile and web apps, developer tools and design systems, sold directly from eprimeindustries.site. Three further divisions, Agro, Build and Capital, are being formed on the same engineering foundation. The company is privately held and registered with the Corporate Affairs Commission under RC 8473729.",
} as const;

export interface NavItem {
  label: string;
  to: string;
}

export const nav: NavItem[] = [
  { label: "Products", to: "/#products" },
  { label: "Services", to: "/#services" },
  { label: "Divisions", to: "/#divisions" },
  { label: "Company", to: "/company" },
];

export type DivisionKey = "tech" | "agro" | "build" | "capital";
export type DivisionStatus = "Active" | "Forming";

export interface Division {
  key: DivisionKey;
  name: string;
  status: DivisionStatus;
  headline: string;
  scope: string;
  detail: string;
}

export const divisions: Division[] = [
  {
    key: "tech",
    name: "E-Prime Tech",
    status: "Active",
    headline: "Software that ships.",
    scope: "Apps, software, design assets, custom builds, cloud and IT consulting.",
    detail: "The first division and the foundation for the rest. Ships EduSmart360 and builds software to order.",
  },
  {
    key: "agro",
    name: "E-Prime Agro",
    status: "Forming",
    headline: "Farms that report in.",
    scope: "Greenhouse, poultry, aquaculture and crops.",
    detail: "Farms instrumented like software: every bed, pen and pond measured and logged.",
  },
  {
    key: "build",
    name: "E-Prime Build",
    status: "Forming",
    headline: "Structures with a schedule.",
    scope: "Civil, mechanical and electrical works.",
    detail: "Building, road and infrastructure work run to the drawing and to the date.",
  },
  {
    key: "capital",
    name: "E-Prime Capital",
    status: "Forming",
    headline: "Patient money for prime movers.",
    scope: "Asset management, fintech and venture funding.",
    detail: "Last to launch: it needs licences and a track record, and we will earn both first.",
  },
];

export const values = [
  { title: "First principles", body: "Start from what is true, not from what everyone else ships. Measure before we build." },
  { title: "Finished", body: "A product is done when a customer can pay for it, use it and get help with it. Not before." },
  { title: "Compounding", body: "Every product, farm and structure is built on the last one. Growth is the derivative." },
  { title: "Made in Benin", body: "Designed, engineered and supported from Benin City, in a city with three thousand years of making." },
] as const;
