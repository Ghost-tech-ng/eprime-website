import { Link } from "react-router";
import { PrimeSymbol } from "../brand/PrimeSymbol";
import { Wordmark } from "../brand/Wordmark";
import { company, divisions } from "../../content/site";
import { edusmart } from "../../content/products";

const columns = [
  {
    title: "Products",
    links: [
      { label: `${edusmart.name}`, to: `/products/${edusmart.slug}` },
      { label: "Pricing", to: `/products/${edusmart.slug}#pricing` },
      { label: "Custom builds", to: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/company" },
      { label: "Certificate", to: "/company#certificate" },
      { label: "Press kit", to: "/company#press" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Divisions",
    links: divisions.map((d) => ({ label: `${d.name}${d.status === "Forming" ? " (forming)" : ""}`, to: "/#divisions" })),
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ep-ink relative overflow-hidden border-t border-line">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 text-surface opacity-60">
        <PrimeSymbol className="h-[420px] w-auto" primeColor="var(--ep-surface-2)" />
      </div>
      <div className="ep-container relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Wordmark className="h-8 w-auto" title={company.name} />
            <p className="mt-6 font-display text-3xl font-bold tracking-tight [font-stretch:110%]">Where it starts.</p>
            <p className="mt-4 max-w-sm text-[15px] text-muted">{company.boilerplateShort}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="ep-eyebrow">{col.title}</h2>
                <ul className="mt-4 space-y-3 text-[15px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-fg/80 transition-colors hover:text-fg">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="ep-eyebrow">Talk to us</h2>
              <ul className="mt-4 space-y-3 text-[15px]">
                <li>
                  <a href={`mailto:${company.email}`} className="break-all text-fg/80 hover:text-fg">
                    Email
                  </a>
                </li>
                <li>
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="text-fg/80 hover:text-fg">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${company.phoneE164}`} className="font-mono text-sm text-fg/80 hover:text-fg">
                    {company.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalLine}
          </p>
          <p>
            Built in {company.city} · {company.coordinates}
          </p>
        </div>
      </div>
    </footer>
  );
}
