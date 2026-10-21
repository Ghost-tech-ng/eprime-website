import { useRef } from "react";
import { m, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { process } from "../../content/services";

function Node({ prime }: { prime: boolean }) {
  if (prime) {
    return (
      <svg viewBox="0 0 292 325" className="h-9 w-auto" aria-hidden="true">
        <path d="M0 325L160 325L291.3 0L131.3 0Z" fill="var(--ep-accent)" />
      </svg>
    );
  }
  return <span aria-hidden="true" className="block h-4 w-4 rounded-full border-2 border-primary bg-bg" />;
}

export function HowWeWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section aria-labelledby="process-title" className="py-24 md:py-32">
      <div className="ep-container">
        <SectionHeading
          id="process-title"
          eyebrow="How we work"
          title={
            <>
              The prime is the moment
              <br className="hidden md:block" /> something starts moving.
            </>
          }
          lede="In calculus, f′ is the rate of change. In our name it is the first push: the version that ships and starts compounding."
        />

        <div ref={ref} className="relative mt-16">
          <div aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-line lg:left-0 lg:right-0 lg:top-[17px] lg:bottom-auto lg:h-px lg:w-auto" />
          <m.div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-primary lg:hidden"
            style={{ scaleY: progress }}
          />
          <m.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[17px] hidden h-px origin-left bg-primary lg:block"
            style={{ scaleX: progress }}
          />

          <ol className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            {process.map((step, i) => {
              const prime = i === 1;
              return (
                <m.li
                  key={step.n}
                  data-reveal
                  className="relative pl-10 lg:pl-0"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.3, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="absolute left-0 top-0 flex h-9 items-center lg:static">
                    <Node prime={prime} />
                  </div>
                  <p className="mt-0 font-mono text-xs text-muted lg:mt-8">Step {step.n}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight [font-stretch:108%]">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-muted">{step.body}</p>
                </m.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
