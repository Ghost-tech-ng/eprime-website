export type ServiceIcon = "globe" | "smartphone" | "code" | "cloud" | "shield" | "compass";

export interface Service {
  icon: ServiceIcon;
  title: string;
  body: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    icon: "globe",
    title: "Websites",
    body: "Fast, findable sites that load on a mid-range phone over 4G and rank for what you sell.",
    deliverables: ["Design and build", "SEO and analytics", "Hosting and domain"],
  },
  {
    icon: "smartphone",
    title: "Mobile apps",
    body: "iOS and Android apps from one codebase, shipped to both stores and kept running.",
    deliverables: ["React Native", "Store listing", "Push and payments"],
  },
  {
    icon: "code",
    title: "Custom software",
    body: "Back-office systems, portals and APIs shaped around how your business already works.",
    deliverables: ["Web apps and APIs", "Integrations", "Paystack and bank feeds"],
  },
  {
    icon: "cloud",
    title: "Cloud and hosting",
    body: "Servers, databases and deployments set up properly, monitored, and backed up.",
    deliverables: ["AWS and GCP", "Docker", "Backups and monitoring"],
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    body: "Find the holes before someone else does, then close them and show you what changed.",
    deliverables: ["Security review", "Access control", "Hardening"],
  },
  {
    icon: "compass",
    title: "IT consulting",
    body: "A plain answer to what to build, buy or skip, with costs in naira and a timeline.",
    deliverables: ["Digital transformation", "Systems audit", "Tech support"],
  },
];

export const process = [
  {
    n: "01",
    title: "Measure",
    body: "We start from first principles: what the business does, what it costs, and the one number the software must move.",
  },
  {
    n: "02",
    title: "Ship the first version",
    body: "A working product in front of real users within weeks, not a slide deck. This is the prime: the moment something starts.",
  },
  {
    n: "03",
    title: "Compound",
    body: "We run it, measure it and improve it. Each release builds on the last, so the product grows instead of ageing.",
  },
] as const;
