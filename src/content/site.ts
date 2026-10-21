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
  positioning:
    "A prime mover is the first force in a system, the thing that starts everything else moving. We build them in four places: software, farms, structures and capital. Each one is measured before it is allowed to grow.",
} as const;

export type DivisionKey = "tech" | "agro" | "build" | "capital";
export type DivisionStatus = "Active" | "Forming";

export interface NavItem {
  label: string;
  to: string;
  dot?: DivisionKey;
}

export interface Offering {
  title: string;
  body: string;
}

export interface Milestone {
  when: string;
  title: string;
  body: string;
  gate: string;
}

export interface PhotoSpec {
  file: string;
  alt: string;
  caption: string;
}

export interface Division {
  key: DivisionKey;
  name: string;
  short: string;
  status: DivisionStatus;
  headline: string;
  tagline: string;
  scope: string;
  detail: string;
  intro: string;
  startsAs: string;
  path: string;
  subdomain: string;
  /** Set once the subdomain is live: every link on this site then points there instead of `path`. */
  site?: string;
  offerings: Offering[];
  roadmap: Milestone[];
  vocabulary: [string, string, string];
  audiences: string[];
  photos: { hero: PhotoSpec; gallery: [PhotoSpec, PhotoSpec] };
}

export const divisions: Division[] = [
  {
    key: "tech",
    name: "E-Prime Tech",
    short: "Tech",
    status: "Active",
    headline: "Software that ships.",
    tagline: "Built here, runs anywhere.",
    scope: "Apps, software, design assets, custom builds, cloud and IT consulting.",
    detail: "The first division and the foundation for the rest. Ships EduSmart360 and builds software to order.",
    intro:
      "E-Prime Tech designs, builds and runs software for Nigerian businesses, from a first website to the system that runs a whole school. It is open, it has a product in schools, and its revenue funds everything else in the group.",
    startsAs: "Open now. Client work and our own products, with EduSmart360 first on the shelf.",
    path: "/divisions/tech",
    subdomain: "tech.eprimeindustries.site",
    offerings: [
      { title: "Products", body: "Software we own, sell and run ourselves, starting with EduSmart360 for schools." },
      { title: "Custom builds", body: "Websites, mobile apps and back-office systems built to a brief and priced in naira." },
      { title: "Cloud and IT", body: "Hosting, security reviews and plain answers on what to build, buy or skip." },
    ],
    roadmap: [
      {
        when: "Nov – Dec 2026",
        title: "Foundation",
        body: "Site, identity and the first products live, with payments and a launch checklist for each.",
        gate: "First paying customer",
      },
      {
        when: "Jan – Mar 2027",
        title: "First traction",
        body: "Weekly releases, fixed-scope client projects, and a build log every fortnight.",
        gate: "₦1m+ monthly revenue",
      },
      {
        when: "Apr – Sep 2027",
        title: "The shelf fills",
        body: "One E-Prime account across products, more items on the shelf, and the first hire.",
        gate: "8+ products listed",
      },
    ],
    vocabulary: ["Prime time", "Prime build", "Prime mover"],
    audiences: ["A school", "A business", "A start-up", "Something else"],
    photos: {
      hero: { file: "tech-hero", alt: "A laptop and a phone on a desk, both running E-Prime software", caption: "Workbench, Benin City" },
      gallery: [
        { file: "tech-rack", alt: "A network patch panel and server rack with labelled cables", caption: "Rack, patched and labelled" },
        { file: "tech-devices", alt: "Tablets on a charging rack showing a school dashboard", caption: "Devices, ready for a school" },
      ],
    },
  },
  {
    key: "agro",
    name: "E-Prime Agro",
    short: "Agro",
    status: "Forming",
    headline: "Farms that report in.",
    tagline: "Prime produce, measured.",
    scope: "Greenhouse, poultry, aquaculture and crops.",
    detail: "Farms instrumented like software: every bed, pen and pond measured and logged.",
    intro:
      "E-Prime Agro is being formed to bring the way we build software to farming: measure first, record everything, and grow what the numbers support. It starts as farm-management software for small operations in Edo State, then a farm of our own.",
    startsAs: "Farm-management software: records, inputs, yield and sales for small greenhouse and poultry operations.",
    path: "/divisions/agro",
    subdomain: "agro.eprimeindustries.site",
    offerings: [
      { title: "Greenhouse", body: "Protected beds with drip irrigation, logged by bed, input and harvest." },
      { title: "Poultry", body: "Layers and broilers with feed, mortality and egg counts recorded every day." },
      { title: "Aquaculture", body: "Catfish and tilapia ponds with water quality, stocking and feed tracked." },
      { title: "Crops", body: "Open-field crops planned against soil, season and market price." },
    ],
    roadmap: [
      {
        when: "Oct 2027 – Mar 2028",
        title: "Software first",
        body: "Farm records, inputs, yield and sales for small greenhouse and poultry operations in Edo State.",
        gate: "3 pilot farms",
      },
      {
        when: "During the pilot",
        title: "The case study",
        body: "The pilot data becomes the case study. What the three farms measure decides what we build next.",
        gate: "Pilot results published",
      },
      {
        when: "2028 onward",
        title: "Our own farm",
        body: "A greenhouse or poultry operation of our own, run on E-Prime Agro software.",
        gate: "Own operation running",
      },
    ],
    vocabulary: ["Prime produce", "Prime land", "Prime stock"],
    audiences: ["A farm owner", "A buyer or off-taker", "A supplier", "A partner or investor"],
    photos: {
      hero: { file: "agro-hero", alt: "Greenhouse beds with drip lines in morning light", caption: "Greenhouse bed, drip line" },
      gallery: [
        { file: "agro-poultry", alt: "Inside a clean, well-lit poultry house with layer hens", caption: "Layer house, pen 2" },
        { file: "agro-aquaculture", alt: "Concrete fish ponds with aerators at dawn", caption: "Ponds 1 to 4, Edo State" },
      ],
    },
  },
  {
    key: "build",
    name: "E-Prime Build",
    short: "Build",
    status: "Forming",
    headline: "Structures with a schedule.",
    tagline: "Built to the drawing.",
    scope: "Civil, mechanical and electrical works.",
    detail: "Building, road and infrastructure work run to the drawing and to the date.",
    intro:
      "E-Prime Build is being formed for civil, mechanical and electrical works that finish on the date they promised. It starts as project tooling for contractors, so we learn how sites really run before we take on contracts of our own.",
    startsAs: "Project tooling for contractors: a site diary and progress reports a client can actually read.",
    path: "/divisions/build",
    subdomain: "build.eprimeindustries.site",
    offerings: [
      { title: "Civil works", body: "Buildings, roads and drainage, delivered to the drawing and the programme." },
      { title: "Mechanical works", body: "Plant, pumps and building services, installed and commissioned." },
      { title: "Electrical works", body: "Power distribution, solar and wiring, tested and documented." },
      { title: "Site tooling", body: "Daily site diaries and progress reports, so the client sees the job as it moves." },
    ],
    roadmap: [
      {
        when: "Oct 2027 – Mar 2028",
        title: "Tools for contractors",
        body: "A site-diary and progress-reporting tool, built with and for working contractors.",
        gate: "1 contractor using the tool",
      },
      {
        when: "2028 onward",
        title: "First contract",
        body: "The first construction contract delivered under E-Prime Build, reported the same way.",
        gate: "First contract delivered",
      },
      {
        when: "After that",
        title: "A public record",
        body: "Each delivered job is published: the drawing, the schedule, and the date it actually finished.",
        gate: "Jobs published with dates",
      },
    ],
    vocabulary: ["Prime coat", "Prime contractor", "Prime mover"],
    audiences: ["A contractor", "A client with a project", "A supplier", "An engineer"],
    photos: {
      hero: { file: "build-hero", alt: "A rebar cage and formwork on a building site at dawn", caption: "Column C4, rebar before the pour" },
      gallery: [
        { file: "build-drawings", alt: "Engineering drawings with a scale rule and a tablet on plywood", caption: "Sheet S-102, revision C" },
        { file: "build-structure", alt: "A reinforced concrete frame with the first slab poured", caption: "Frame complete, level 1" },
      ],
    },
  },
  {
    key: "capital",
    name: "E-Prime Capital",
    short: "Capital",
    status: "Forming",
    headline: "Patient money for prime movers.",
    tagline: "Funding the first force.",
    scope: "Asset management, fintech and venture funding.",
    detail: "Last to launch: it needs licences and a track record, and we will earn both first.",
    intro:
      "E-Prime Capital will be the last division to open, because money needs a record and the right licences before it deserves anyone's trust. It starts by investing the group's own profits into its own divisions. Outside capital comes later, and only under licence.",
    startsAs: "Group money first: E-Prime profits reinvested into Tech, Agro and Build, with the results in the open.",
    path: "/divisions/capital",
    subdomain: "capital.eprimeindustries.site",
    offerings: [
      { title: "Venture funding", body: "Early money for businesses that make something, with the patience to match." },
      { title: "Asset management", body: "Capital managed against long horizons, once we are licensed to do it." },
      { title: "Fintech", body: "Payment and finance software built by E-Prime Tech for the businesses we back." },
    ],
    roadmap: [
      {
        when: "Now",
        title: "Earn the record",
        body: "The other divisions build the track record that Capital will be judged on.",
        gate: "2 divisions operating",
      },
      {
        when: "2028 onward",
        title: "Group money first",
        body: "Explored with the required licences, starting with group profits invested into the divisions.",
        gate: "Licences in place",
      },
      {
        when: "After that",
        title: "Outside capital",
        body: "Outside investors only once the licences, the record and the reporting are all in place.",
        gate: "Audited results published",
      },
    ],
    vocabulary: ["Prime rate", "Prime assets", "Prime brokerage"],
    audiences: ["A founder", "An investor", "An adviser", "A partner"],
    photos: {
      hero: { file: "capital-hero", alt: "Bound ledgers, a printing calculator and a fountain pen on a dark wooden desk", caption: "Ledger, year one" },
      gallery: [
        { file: "capital-portfolio", alt: "Aerial view of farmland next to a building site", caption: "What the money goes into" },
        { file: "capital-records", alt: "Labelled archive boxes of audited accounts on a shelf", caption: "Accounts, filed on time" },
      ],
    },
  },
];

export function divisionHref(d: Division): string {
  return d.site ?? d.path;
}

export function divisionByKey(key: DivisionKey): Division {
  const d = divisions.find((x) => x.key === key);
  if (!d) throw new Error(`Unknown division: ${key}`);
  return d;
}

export const nav: NavItem[] = [
  ...divisions.map((d) => ({ label: d.short, to: divisionHref(d), dot: d.key })),
  { label: "Company", to: "/company" },
];

export const goLiveRule = ["A registered bank line", "One paying customer", "One named lead"] as const;

export const groupRoadmap: Milestone[] = [
  {
    when: "Nov – Dec 2026",
    title: "Foundation",
    body: "Tech opens: identity, site and the first products live, each with payments and a launch checklist.",
    gate: "First paying customer",
  },
  {
    when: "Jan – Mar 2027",
    title: "First traction",
    body: "Weekly releases and fixed-scope client projects, with a build log published every fortnight.",
    gate: "₦1m+ monthly revenue",
  },
  {
    when: "Apr – Sep 2027",
    title: "The shelf fills",
    body: "More products on the shelf, one E-Prime account across them, and the first hire.",
    gate: "8+ products listed",
  },
  {
    when: "Oct 2027 – Mar 2028",
    title: "Agro and Build, as software",
    body: "Farm software with three pilot farms and a site-diary tool with one contractor. The group is formalised.",
    gate: "3 farms, 1 contractor",
  },
  {
    when: "2028 onward",
    title: "Operations",
    body: "Our own farm, the first construction contract, and Capital explored under licence with group profits first.",
    gate: "2 divisions operating",
  },
];

export const benin: PhotoSpec = {
  file: "home-benin",
  alt: "Bronze-casting tools and a finished bronze piece on a workbench in Benin City",
  caption: "Igun Street, Benin City",
};

export const values = [
  { title: "First principles", body: "Start from what is true, not from what everyone else ships. Measure before we build." },
  { title: "Finished", body: "A product is done when a customer can pay for it, use it and get help with it. Not before." },
  { title: "Compounding", body: "Every product, farm and structure is built on the last one. Growth is the derivative." },
  { title: "Made in Benin", body: "Designed, engineered and supported from Benin City, in a city with three thousand years of making." },
] as const;
