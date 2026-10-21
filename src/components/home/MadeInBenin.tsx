import { m } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { benin, values } from "../../content/site";

export function MadeInBenin() {
  return (
    <section aria-labelledby="values-title" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
      <div className="ep-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeading
            id="values-title"
            eyebrow="Made in Benin"
            title="A city with three thousand years of making."
            lede="Benin City cast bronze when much of the world was still learning to smelt it. We build in the same place, with the same respect for the finished thing."
          />
          <Reveal delay={0.05} className="mt-10">
            <Photo spec={benin} motif="benin" figure="05" aspect="aspect-[4/3]" />
          </Reveal>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:mt-[72px]">
          {values.map((v, i) => (
            <m.li
              key={v.title}
              data-reveal
              className="bg-surface p-6 md:p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{v.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{v.body}</p>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
