import { m } from "motion/react";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";
import { divisions } from "../../content/site";
import type { DivisionKey } from "../../content/site";

const bar: Record<DivisionKey, string> = {
  tech: "bg-tech",
  agro: "bg-agro",
  build: "bg-build",
  capital: "bg-capital",
};

export function DivisionsStrip() {
  return (
    <section id="divisions" aria-labelledby="divisions-title" className="ep-ink relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="ep-grid-bg absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="ep-container relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <Eyebrow>Divisions</Eyebrow>
            <h2 id="divisions-title" className="ep-h2 mt-5">
              One company. Four divisions.
              <br />
              <span className="text-muted">Software goes first.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="ep-lede">
              E-Prime Tech is open and shipping. Agro, Build and Capital are being formed on the same foundation of measuring first and
              building to last. We will say when each one opens, not before.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((d, i) => {
            const active = d.status === "Active";
            return (
              <m.li
                key={d.key}
                data-reveal
                className="group relative flex flex-col bg-bg p-6 md:p-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 origin-left ${bar[d.key]} ${active ? "" : "scale-x-[0.18] transition-transform duration-300 group-hover:scale-x-100"}`} />
                <div className="flex items-center justify-between gap-3">
                  <img
                    src={`/brand/divisions/eprime-${d.key}-on-dark.svg`}
                    alt={d.name}
                    width={5292}
                    height={1386}
                    loading="lazy"
                    className={`h-7 w-auto ${active ? "" : "opacity-70"}`}
                  />
                  <Badge status={d.status} />
                </div>
                <h3 className="mt-10 font-display text-2xl font-bold tracking-tight">{d.headline}</h3>
                <p className="mt-2 text-sm font-medium text-fg/80">{d.scope}</p>
                <p className="mt-3 text-sm text-muted">{d.detail}</p>
                <p className="mt-auto pt-8 font-mono text-[11px] text-muted">0{i + 1} / 0{divisions.length}</p>
              </m.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
