import { Link } from "react-router";
import { ArrowRight, BookOpen, Check, ChevronRight, History, Activity } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { EduSmartScreen } from "../components/product/EduSmartScreen";
import { PriceCalculator } from "../components/product/PriceCalculator";
import { ContactBand } from "../components/shared/ContactBand";
import { edusmart, formatNaira, formatNumber, tierFor } from "../content/products";

const approach = [
  { verb: "Connect", body: "what your school already uses, including your results system." },
  { verb: "Digitise", body: "what is still on paper: receipts, registers, leave forms, files." },
  { verb: "Automate", body: "the routine work that eats your staff's day." },
  { verb: "Show", body: "management what needs attention before it becomes a problem." },
];

const localFit = [
  { title: "Three terms, not semesters", body: "First, Second and Third Term, each with its own fees, calendar and results." },
  { title: "Naira everywhere", body: "Bank transfer and card payments, receipts and ledgers in naira." },
  { title: "CA and exam scores", body: "Report cards built the way your teachers already grade." },
  { title: "Nursery to SS3", body: "Every class and arm, from nursery through primary, JSS and SSS." },
];

const practical = [
  { title: "No new computers", body: "Works on the laptops and phones you already have." },
  { title: "Help on every page", body: "A guided tour on every screen for new staff." },
  { title: "Access by role", body: "The bursar sees accounts, teachers see their classes." },
];

const examples = [200, 450, 800, 1500];

const resources = [
  { icon: BookOpen, title: "Documentation", body: "Guides for every role, from first login to month-end." },
  { icon: History, title: "Changelog", body: "Every release, dated, with what changed for schools." },
  { icon: Activity, title: "Status", body: "Live uptime and incident history." },
];

export function EduSmart360() {
  const lowest = Math.min(...edusmart.tiers.map((t) => t.perStudent));
  const leakage = 40_000_000 * 0.05;
  const for500 = 500 * tierFor(500).perStudent;

  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="product-title">
        <div aria-hidden="true" className="ep-grid-bg ep-grid-fade absolute inset-0" />
        <div className="ep-container relative pb-20 pt-10 md:pb-24 md:pt-14">
          <nav aria-label="Breadcrumb" className="ep-rise">
            <ol className="flex items-center gap-1.5 font-mono text-xs text-muted">
              <li>
                <Link to="/" className="hover:text-fg">
                  Home
                </Link>
              </li>
              <ChevronRight size={12} aria-hidden="true" />
              <li>
                <Link to="/divisions/tech" className="hover:text-fg">
                  Tech
                </Link>
              </li>
              <ChevronRight size={12} aria-hidden="true" />
              <li aria-current="page" className="text-fg">
                {edusmart.name}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="ep-rise flex flex-wrap items-center gap-3" style={{ animationDelay: "60ms" }}>
                <span className="font-display text-2xl font-bold tracking-tight">{edusmart.name}</span>
                <span className="text-sm text-muted">{edusmart.endorsement}</span>
                <Badge status={edusmart.status} />
              </div>
              <h1 id="product-title" className="ep-hero ep-rise mt-6 text-[clamp(40px,6vw,72px)]" style={{ animationDelay: "140ms" }}>
                Your whole school on one login<span className="text-accent">.</span>
              </h1>
              <p className="ep-rise mt-6 max-w-xl text-lg leading-relaxed text-fg/80" style={{ animationDelay: "240ms" }}>
                {edusmart.summary}
              </p>
              <div className="ep-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
                <Link to="/contact?interest=edusmart360" className="ep-btn ep-btn-solid">
                  Book a demo
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </Link>
                <a href="#pricing" className="ep-btn ep-btn-ghost">
                  See pricing
                </a>
              </div>
              <dl className="ep-rise mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4" style={{ animationDelay: "400ms" }}>
                {[
                  [String(edusmart.moduleCount), "modules"],
                  [`${edusmart.goLiveWeeks} wks`, "to go live"],
                  [formatNaira(lowest), "from, per student"],
                  [formatNaira(0), "from school budget"],
                ].map(([v, k]) => (
                  <div key={k}>
                    <dt className="sr-only">{k}</dt>
                    <dd className="font-mono text-2xl font-semibold tabular-nums">{v}</dd>
                    <dd className="mt-1 text-xs text-muted">{k}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="ep-rise" style={{ animationDelay: "200ms" }}>
              <EduSmartScreen />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="border-b border-line">
        <h2 id="approach-title" className="sr-only">
          What EduSmart360 does
        </h2>
        <ol className="ep-container grid divide-line sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {approach.map((a, i) => (
            <li key={a.verb} className="py-8 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <Reveal delay={i * 0.06}>
                <p className="font-display text-2xl font-bold tracking-tight">
                  {a.verb}
                  <span className="text-primary">.</span>
                </p>
                <p className="mt-2 text-sm text-muted">{a.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="before-title" className="py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="before-title"
            eyebrow="Before and after"
            title="What changes on the first day."
            lede="Most schools already have the information. It is spread across receipt books, phones, WhatsApp groups and one laptop."
          />
          <div className="mt-14 overflow-hidden rounded-card border border-line">
            <div className="hidden grid-cols-2 border-b border-line bg-surface-2/60 text-xs font-semibold uppercase tracking-wider text-muted md:grid">
              <p className="px-6 py-3">Today</p>
              <p className="border-l border-line px-6 py-3">With {edusmart.name}</p>
            </div>
            <ul className="divide-y divide-line">
              {edusmart.beforeAfter.map((row, i) => (
                <li key={i} className="grid md:grid-cols-2">
                  <Reveal className="px-6 py-5 text-muted">
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider md:hidden">Today</span>
                    {row.before}
                  </Reveal>
                  <Reveal delay={0.08} className="flex gap-3 bg-surface px-6 py-5 md:border-l md:border-line">
                    <Check size={18} strokeWidth={2} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                    <span>{row.after}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="modules-title" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading id="modules-title" eyebrow="Core modules" title="Four modules do the heavy lifting." />
          <div className="mt-16 space-y-20 md:space-y-28">
            {edusmart.coreModules.map((m) => (
              <article key={m.n} className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
                <Reveal className="lg:sticky lg:top-28 lg:self-start">
                  <p className="font-mono text-6xl font-semibold text-primary/30 tabular-nums">{m.n}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">{m.title}</h3>
                </Reveal>
                <div>
                  <Reveal>
                    <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">{m.headline}</p>
                    <p className="mt-4 max-w-2xl text-muted">{m.body}</p>
                  </Reveal>
                  <ul className="mt-8 grid gap-4 md:grid-cols-3">
                    {m.features.map((f, i) => (
                      <li key={f.title}>
                        <Reveal delay={i * 0.06} className="ep-card h-full">
                          <p className="font-semibold">{f.title}</p>
                          <p className="mt-2 text-sm text-muted">{f.body}</p>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="roles-title" className="py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading id="roles-title" eyebrow="Who uses it" title="One system, six kinds of user." lede="Each person signs in and sees what their job needs." />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {edusmart.roles.map((r, i) => (
              <li key={r.title} className="bg-surface p-6 md:p-7">
                <Reveal delay={(i % 3) * 0.05}>
                  <p className="font-mono text-xs text-muted">0{i + 1}</p>
                  <p className="mt-3 font-display text-xl font-bold">{r.title}</p>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="more-title" className="ep-ink py-24 md:py-32">
        <div className="ep-container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>Everything else</Eyebrow>
            <h2 id="more-title" className="ep-h2 mt-5">
              Plus {edusmart.everythingElse.length} more modules, in the same price.
            </h2>
            <p className="ep-lede mt-5">No add-ons and no upgrade tiers. Every school gets every module.</p>
          </Reveal>
          <ul className="flex flex-wrap content-start gap-2">
            {edusmart.everythingElse.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 0.02} y={4}>
                  <span
                    className={`inline-block rounded-full border px-4 py-2 text-sm ${
                      item === "Free school website" ? "border-primary bg-primary-soft text-primary-strong" : "border-line text-fg/85"
                    }`}
                  >
                    {item}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="fit-title" className="py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="fit-title"
            eyebrow="Made here"
            title="Built for how Nigerian schools actually run."
            lede={`Already using a results portal? Keep it. ${edusmart.name} works around it.`}
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localFit.map((f, i) => (
              <li key={f.title}>
                <Reveal delay={i * 0.05} className="ep-card h-full">
                  <p className="font-semibold">{f.title}</p>
                  <p className="mt-2 text-sm text-muted">{f.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid gap-6 border-t border-line pt-10 md:grid-cols-3">
            {practical.map((p) => (
              <li key={p.title} className="flex gap-3">
                <Check size={18} strokeWidth={2} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{p.title}</span>
                  <span className="block text-sm text-muted">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="onboarding-title" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="onboarding-title"
            eyebrow="Getting started"
            title={`Live in ${edusmart.goLiveWeeks} weeks, and we do the setup.`}
            lede="Nobody retypes a register. You send us what you have, and we bring it in."
          />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-px bg-line md:block" />
            {edusmart.onboarding.map((s, i) => (
              <li key={s.title} className="relative">
                <Reveal delay={i * 0.08}>
                  <span
                    className={`relative grid h-11 w-11 place-items-center rounded-full border font-mono text-sm font-semibold ${
                      i === edusmart.onboarding.length - 1 ? "border-primary bg-primary text-on-primary" : "border-line bg-bg"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-5 font-mono text-xs text-primary">{s.when}</p>
                  <p className="mt-1 font-display text-xl font-bold">{s.title}</p>
                  <p className="mt-2 text-sm text-muted">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" aria-labelledby="pricing-title" className="py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="pricing-title"
            eyebrow="Pricing"
            title="Priced per student, paid through fees."
            lede="The subscription is added to each student's fee invoice, so the school pays nothing from its own budget. Every school gets every module."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <table className="w-full overflow-hidden rounded-card border border-line text-left text-sm">
                <caption className="sr-only">Price per student, per term, by school size</caption>
                <thead className="bg-surface-2/60 text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      School size
                    </th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold">
                      Per student, per term
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-surface">
                  {edusmart.tiers.map((t) => (
                    <tr key={t.label}>
                      <th scope="row" className="px-5 py-4 font-medium">
                        {t.label}
                      </th>
                      <td className="px-5 py-4 text-right font-mono text-base font-semibold tabular-nums">{formatNaira(t.perStudent)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="mt-6 space-y-2 text-sm">
                {edusmart.included.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check size={16} strokeWidth={2} className="text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <PriceCalculator />
            </Reveal>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Reveal className="ep-card">
              <p className="text-sm font-semibold">Worked examples, per term</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead className="text-xs text-muted">
                    <tr>
                      <th scope="col" className="py-2 font-medium">
                        School size
                      </th>
                      <th scope="col" className="py-2 text-right font-medium">
                        Rate
                      </th>
                      <th scope="col" className="py-2 text-right font-medium">
                        Collected through fees
                      </th>
                      <th scope="col" className="py-2 text-right font-medium">
                        Paid by school
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line font-mono tabular-nums">
                    {examples.map((n) => {
                      const t = tierFor(n);
                      return (
                        <tr key={n}>
                          <th scope="row" className="py-3 font-body font-medium">
                            {formatNumber(n)} students
                          </th>
                          <td className="py-3 text-right">{formatNaira(t.perStudent)}</td>
                          <td className="py-3 text-right">{formatNaira(n * t.perStudent)}</td>
                          <td className="py-3 text-right text-primary">{formatNaira(0)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="ep-ink rounded-card p-6 md:p-7">
              <p className="ep-eyebrow">What that means in naira</p>
              <p className="mt-4 text-sm text-fg/80">
                Take a school that collects {formatNaira(40_000_000)} a term. If just 5% slips through unrecorded payments, forgotten waivers
                and unexplained charges, the school is short every term.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-xs text-muted">Lost to 5% leakage</span>
                    <span className="text-lg font-semibold tabular-nums text-bad">{formatNaira(leakage)}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-bad/70" />
                </div>
                <div>
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-xs text-muted">{edusmart.name}, 500 students</span>
                    <span className="text-lg font-semibold tabular-nums text-primary">{formatNaira(for500)}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-primary" style={{ width: `${(for500 / leakage) * 100}%` }} />
                </div>
              </div>
              <p className="mt-6 text-xs text-muted">The accounting controls alone can save more than the subscription costs.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="resources-title" className="border-t border-line py-24 md:py-28">
        <div className="ep-container">
          <SectionHeading id="resources-title" eyebrow="Support" title="Docs, changelog and status." lede="These are being written now. Until they are up, every question goes straight to the team that built the system." />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {resources.map(({ icon: Icon, title, body }) => (
              <li key={title} className="ep-card flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Icon size={20} strokeWidth={1.75} className="text-muted" aria-hidden="true" />
                  <Badge status="Coming" />
                </div>
                <p className="font-semibold">{title}</p>
                <p className="-mt-2 text-sm text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand
        title="See it running in your school."
        body="Book a demo and we will walk your proprietor and bursar through it with your own fee structure. Setup, data import and training are included."
        whatsappText="Hello E-Prime, I would like a demo of EduSmart360 for my school."
      />
    </>
  );
}
