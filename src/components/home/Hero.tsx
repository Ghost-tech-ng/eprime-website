import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Mascot } from "../brand/Mascot";
import { SmartLink } from "../ui/SmartLink";
import { divisionBg } from "../brand/divisionColors";
import { company, divisions, divisionHref } from "../../content/site";
import { edusmart } from "../../content/products";

const facts = [
  `RC ${company.rc}`,
  `Incorporated ${company.incorporatedLabel}`,
  `${divisions.length} divisions`,
  `${divisions.filter((d) => d.status === "Active").length} open, ${divisions.filter((d) => d.status === "Forming").length} forming`,
  `${edusmart.name} live in schools`,
  "Software · Farms · Structures · Capital",
  "Priced in naira",
  `${company.city} · ${company.coordinates}`,
];

function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/60 py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <ul className="sr-only">
        {facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="ep-marquee flex w-max gap-10 font-mono text-[13px] text-muted">
        {[...facts, ...facts].map((f, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {f}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const words = ["Prime", "movers"];
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div aria-hidden="true" className="ep-grid-bg ep-grid-fade absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--ep-primary-soft), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--ep-accent-soft), transparent 70%)" }}
      />

      <div className="ep-container relative pb-12 pt-14 md:pt-20 lg:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div>
            <p className="ep-eyebrow ep-rise flex flex-wrap items-center gap-x-3 gap-y-1">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              {company.name} · {company.city} · RC {company.rc}
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
              {company.positioning}
            </p>

            <div className="ep-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "520ms" }}>
              <a href="#divisions" className="ep-btn ep-btn-solid">
                See the divisions
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
              <Link to="/contact" className="ep-btn ep-btn-ghost">
                Talk to us
              </Link>
            </div>
          </div>

          <div className="ep-rise relative" style={{ animationDelay: "200ms" }}>
            <div className="relative mx-auto max-w-[520px] rounded-card border border-line bg-surface/80 p-5 shadow-[0_30px_80px_-40px_rgba(10,26,31,0.35)] backdrop-blur md:p-7">
              <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                <span>f′(x) &gt; 0</span>
                <span>Unit 01 · Prime</span>
              </div>
              <div className="relative mt-2 grid place-items-center">
                <div aria-hidden="true" className="ep-grid-bg absolute inset-0 rounded-card opacity-60 [background-size:24px_24px] [mask-image:radial-gradient(circle,#000_40%,transparent_72%)]" />
                <Mascot className="relative h-[220px] w-auto md:h-[260px]" title="Prime, the E-Prime robot, waving" />
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {divisions.map((d, i) => (
                  <li key={d.key} className="ep-rise" style={{ animationDelay: `${640 + i * 80}ms` }}>
                    <SmartLink
                      to={divisionHref(d)}
                      className="group flex items-center gap-3 rounded-control border border-line bg-bg px-3 py-2.5 transition-colors hover:border-fg/40"
                    >
                      <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${divisionBg[d.key]}`} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[15px] font-bold leading-tight">{d.short}</span>
                        <span className="block truncate font-mono text-[10.5px] text-muted">{d.status === "Active" ? "Open" : "Forming"}</span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                      />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
