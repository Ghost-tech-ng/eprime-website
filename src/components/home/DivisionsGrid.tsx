import { m } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Photo } from "../ui/Photo";
import { SmartLink } from "../ui/SmartLink";
import { DivisionLogo } from "../brand/DivisionLogo";
import { divisionBg } from "../brand/divisionColors";
import { divisions, divisionHref } from "../../content/site";

export function DivisionsGrid() {
  return (
    <section id="divisions" aria-labelledby="divisions-title" className="py-24 md:py-32">
      <div className="ep-container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <SectionHeading
            id="divisions-title"
            eyebrow="Four divisions"
            title={
              <>
                Software, farms, structures
                <br className="hidden md:block" /> and capital.
              </>
            }
          />
          <p className="ep-lede lg:pb-2">
            One company, built from the same first principles in four places. Tech is open and earning. Agro, Build and Capital are being
            formed, and each opens only when it passes the same go-live test.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {divisions.map((d, i) => (
            <m.li
              key={d.key}
              data-reveal
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1], delay: (i % 2) * 0.08 }}
            >
              <SmartLink
                to={divisionHref(d)}
                className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-fg/30 hover:shadow-[0_24px_60px_-36px_rgba(10,26,31,0.45)]"
                aria-label={`${d.name}: ${d.headline}`}
              >
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-10 h-1 ${divisionBg[d.key]}`} />
                <Photo spec={d.photos.hero} motif={d.key} figure={`0${i + 1}`} className="rounded-none border-0 border-b" aspect="aspect-[16/9]" />
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <DivisionLogo division={d} className="h-7 w-auto" />
                    <Badge status={d.status} />
                  </div>
                  <h3 className="mt-7 font-display text-[28px] font-bold leading-tight tracking-tight [font-stretch:108%]">{d.headline}</h3>
                  <p className="mt-2 text-[15px] font-medium text-fg/80">{d.scope}</p>
                  <p className="mt-3 text-[15px] text-muted">{d.detail}</p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                    <span className="font-mono text-[11px] text-muted">
                      {d.status === "Active" ? "Open now" : `Starts as: ${d.roadmap[0]?.title ?? "software"}`}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                      {d.status === "Active" ? `Visit ${d.short}` : `Follow ${d.short}`}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </SmartLink>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
