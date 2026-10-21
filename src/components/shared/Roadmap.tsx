import { m } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { goLiveRule } from "../../content/site";
import type { Milestone } from "../../content/site";

interface RoadmapProps {
  items: Milestone[];
}

export function Roadmap({ items }: RoadmapProps) {
  return (
    <ol className="relative grid gap-px overflow-hidden rounded-card border border-line bg-line">
      {items.map((s, i) => (
        <m.li
          key={s.title}
          data-reveal
          className="grid gap-3 bg-surface p-6 md:grid-cols-[170px_1fr] md:gap-8 md:p-7"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.05 }}
        >
          <p className="pt-1 font-mono text-xs text-muted">
            <span className="text-primary">0{i + 1}</span> · {s.when}
          </p>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">{s.title}</h3>
            <p className="mt-1 text-[15px] text-muted">{s.body}</p>
            <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fg/80">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Gate: {s.gate}
            </p>
          </div>
        </m.li>
      ))}
    </ol>
  );
}

export function GoLiveCard({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div className="ep-ink relative h-full overflow-hidden rounded-card p-7 md:p-8">
        <div aria-hidden="true" className="ep-grid-bg absolute inset-0 opacity-50" />
        <div className="relative">
          <p className="font-mono text-xs text-accent">The go-live rule</p>
          <p className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight">Nothing opens until it has all three.</p>
          <ul className="mt-6 space-y-3">
            {goLiveRule.map((r) => (
              <li key={r} className="flex items-center gap-3 text-[15px]">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-on-primary">
                  <Check size={14} strokeWidth={2.25} aria-hidden="true" />
                </span>
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">The same test applies to every division and every product. We say when each one opens, not before.</p>
        </div>
      </div>
    </Reveal>
  );
}
