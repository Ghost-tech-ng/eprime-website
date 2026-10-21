import { Cloud, Code, Compass, Globe, Shield, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { m } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { services } from "../../content/services";
import type { ServiceIcon } from "../../content/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  code: Code,
  cloud: Cloud,
  shield: Shield,
  compass: Compass,
};

const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
      <div className="ep-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="What we build for you."
            lede="Six things, done properly. Every project starts with the number it has to move, and every quote is in naira."
          />
          <p className="max-w-xs font-mono text-xs leading-relaxed text-muted">
            We build in TypeScript, Python, PHP and React Native. We host on AWS and GCP, and we take payments through Paystack.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const wide = i === 0 || i === services.length - 1;
            return (
              <m.li
                key={s.title}
                data-reveal
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1], delay: (i % 3) * 0.06 }}
                className={`${spans[i] ?? ""} ${wide ? "sm:col-span-2" : ""}`}
              >
                <article className="ep-cut-hover group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-control bg-primary-soft text-primary-strong transition-transform duration-200 group-hover:-rotate-6">
                      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className={`mt-2 text-[15px] text-muted ${wide ? "max-w-xl" : ""}`}>{s.body}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {s.deliverables.map((d) => (
                      <li key={d} className="rounded-full border border-line px-3 py-1 text-xs text-fg/80">
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </m.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
