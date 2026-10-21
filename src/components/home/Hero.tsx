import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DerivativeField } from "./DerivativeField";
import { Badge } from "../ui/Badge";
import { company, divisions } from "../../content/site";
import { edusmart, formatNaira } from "../../content/products";

const facts = [
  `RC ${company.rc}`,
  `Incorporated ${company.incorporatedLabel}`,
  `${divisions.length} divisions`,
  "1 product live",
  `Schools go live in ${edusmart.goLiveWeeks} weeks`,
  `${edusmart.moduleCount} modules in ${edusmart.name}`,
  "Priced in naira",
  `${company.city} · ${company.coordinates}`,
];

function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <ul className="sr-only">
        {facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="ep-marquee flex w-max gap-10 font-mono text-[13px] text-muted">
        {[...facts, ...facts].map((f, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {f}
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const words = ["Prime", "movers"];
  return (
    <section className="ep-ink relative overflow-hidden" aria-labelledby="hero-title">
      <div aria-hidden="true" className="ep-grid-bg ep-grid-fade absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--ep-primary-soft), transparent 70%)" }}
      />

      <div className="ep-container relative pb-10 pt-14 md:pt-20 lg:pb-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div>
            <p className="ep-eyebrow ep-rise flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              Software company · {company.city}, {company.country}
            </p>

            <h1 id="hero-title" className="ep-hero mt-6 text-[clamp(56px,10.5vw,128px)]">
              {words.map((w, i) => (
                <span key={w} className="ep-word mr-[0.22em] last:mr-0" style={{ animationDelay: `${120 + i * 110}ms` }}>
                  {w}
                  {i === words.length - 1 ? <span className="text-accent">.</span> : null}
                </span>
              ))}
            </h1>

            <p className="ep-rise mt-6 max-w-xl text-lg leading-relaxed text-fg/80 md:text-xl" style={{ animationDelay: "420ms" }}>
              We design, build and run software for Nigerian businesses, from a first website to the system that runs a whole school.
              Measured from first principles, shipped in weeks, and kept running after launch.
            </p>

            <div className="ep-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "520ms" }}>
              <Link to={`/products/${edusmart.slug}`} className="ep-btn ep-btn-solid">
                See {edusmart.name}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
              <Link to="/#services" className="ep-btn ep-btn-ghost">
                What we build
              </Link>
            </div>
          </div>

          <div className="ep-rise relative" style={{ animationDelay: "200ms" }}>
            <DerivativeField />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16">
          <Link
            to={`/products/${edusmart.slug}`}
            className="ep-cut-hover ep-rise group relative flex flex-col gap-5 rounded-card border border-line bg-surface p-6 sm:flex-row sm:items-center"
            style={{ animationDelay: "650ms" }}
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-card bg-primary-soft font-display text-lg font-bold text-primary-strong">
              360
            </span>
            <span className="flex-1">
              <span className="flex items-center gap-3">
                <span className="font-display text-xl font-bold">{edusmart.name}</span>
                <Badge status="Live" />
              </span>
              <span className="mt-1 block text-[15px] text-muted">
                School management for Nigerian schools. From {formatNaira(2500)} per student per term.
              </span>
            </span>
            <ArrowUpRight
              size={20}
              strokeWidth={1.75}
              className="hidden shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg sm:block"
              aria-hidden="true"
            />
          </Link>
          <Link
            to="/contact"
            className="ep-cut-hover ep-rise group relative flex flex-col gap-5 rounded-card border border-line bg-surface p-6 sm:flex-row sm:items-center"
            style={{ animationDelay: "730ms" }}
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-card border border-dashed border-primary/60 font-mono text-lg text-primary">
              {"{ }"}
            </span>
            <span className="flex-1">
              <span className="flex items-center gap-3">
                <span className="font-display text-xl font-bold">Custom builds</span>
                <span className="font-mono text-xs text-muted">Taking projects</span>
              </span>
              <span className="mt-1 block text-[15px] text-muted">Websites, apps and back-office systems, built to your brief and priced in naira.</span>
            </span>
            <ArrowUpRight
              size={20}
              strokeWidth={1.75}
              className="hidden shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg sm:block"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
