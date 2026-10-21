import { Link } from "react-router";
import { ArrowRight, Plus } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";
import { EduSmartScreen } from "../product/EduSmartScreen";
import { edusmart, formatNaira } from "../../content/products";

export function ProductShelf() {
  const from = Math.min(...edusmart.tiers.map((t) => t.perStudent));
  return (
    <section id="products" aria-labelledby="products-title" className="py-24 md:py-32">
      <div className="ep-container">
        <SectionHeading
          id="products-title"
          eyebrow="Products"
          title="Software we ship, sell and run ourselves."
          lede="We build for clients, and we build our own products. Running our own software in real schools is how we know what holds up in production."
        />

        <Reveal className="mt-14 overflow-hidden rounded-card border border-line bg-surface">
          <div className="grid lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-3xl font-bold tracking-tight [font-stretch:108%]">{edusmart.name}</h3>
                <span className="text-sm text-muted">{edusmart.endorsement}</span>
                <Badge status={edusmart.status} />
              </div>
              <p className="mt-4 font-display text-xl font-semibold leading-snug">{edusmart.job}</p>
              <p className="mt-3 text-[15px] text-muted">{edusmart.summary}</p>

              <ul className="mt-8 grid gap-px overflow-hidden rounded-control border border-line bg-line sm:grid-cols-2">
                {edusmart.pillars.map((p, i) => (
                  <li key={p.title} className="bg-surface p-4">
                    <span className="font-mono text-[11px] text-primary">0{i + 1}</span>
                    <p className="mt-1 font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-muted">{p.body}</p>
                  </li>
                ))}
              </ul>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                <div>
                  <dt className="text-xs text-muted">From</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold tabular-nums">{formatNaira(from)}</dd>
                  <dd className="text-[11px] text-muted">per student, per term</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">School pays</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold tabular-nums">{formatNaira(0)}</dd>
                  <dd className="text-[11px] text-muted">added to fees</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Live in</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold tabular-nums">{edusmart.goLiveWeeks} weeks</dd>
                  <dd className="text-[11px] text-muted">setup to first login</dd>
                </div>
              </dl>

              <div className="mt-8">
                <Link to={`/products/${edusmart.slug}`} className="ep-btn ep-btn-solid">
                  Explore {edusmart.name}
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative border-t border-line bg-surface-2/50 p-5 md:p-10 lg:border-l lg:border-t-0">
              <div aria-hidden="true" className="ep-grid-bg absolute inset-0 opacity-60" />
              <EduSmartScreen className="relative" />
              <p className="relative mt-4 text-center font-mono text-[11px] text-muted">
                Tap a module. Figures are illustrative, taken from the brochure examples.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-4">
          <Link
            to="/contact"
            className="group flex flex-col items-start justify-between gap-4 rounded-card border border-dashed border-line p-6 transition-colors hover:border-primary sm:flex-row sm:items-center"
          >
            <span className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-control border border-line text-muted transition-colors group-hover:border-primary group-hover:text-primary">
                <Plus size={18} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold">The next product on this shelf could be yours.</span>
                <span className="block text-sm text-muted">We build software to order and can run it for you after launch.</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Start a project
              <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
