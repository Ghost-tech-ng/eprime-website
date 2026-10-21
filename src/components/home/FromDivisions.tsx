import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";
import { Eyebrow } from "../ui/Eyebrow";
import { edusmart, formatNaira } from "../../content/products";

export function FromDivisions() {
  const from = Math.min(...edusmart.tiers.map((t) => t.perStudent));
  return (
    <section aria-labelledby="shipped-title" className="border-y border-line bg-surface-2/50 py-16 md:py-20">
      <div className="ep-container">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>From our divisions · Tech</Eyebrow>
            <h2 id="shipped-title" className="mt-5 font-display text-3xl font-bold tracking-tight [font-stretch:108%] md:text-4xl">
              Already shipped.
            </h2>
            <p className="mt-3 max-w-md text-muted">
              The first product off the line runs in schools today. It is how the rest of the group gets paid for.
            </p>
          </div>
          <Link
            to={`/products/${edusmart.slug}`}
            className="ep-cut-hover group grid gap-6 rounded-card border border-line bg-surface p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center md:p-7"
          >
            <span className="grid h-16 w-16 place-items-center rounded-card bg-primary-soft font-display text-xl font-bold text-primary-strong">
              360
            </span>
            <span>
              <span className="flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-bold tracking-tight">{edusmart.name}</span>
                <Badge status={edusmart.status} />
              </span>
              <span className="mt-1 block text-[15px] text-muted">{edusmart.job}</span>
              <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted">
                <span>From {formatNaira(from)} per student</span>
                <span>{edusmart.moduleCount} modules</span>
                <span>Live in {edusmart.goLiveWeeks} weeks</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              See the product
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
