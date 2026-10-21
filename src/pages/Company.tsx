import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { SmartLink } from "../components/ui/SmartLink";
import { DivisionLogo } from "../components/brand/DivisionLogo";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PrimeSymbol } from "../components/brand/PrimeSymbol";
import { CertificateSection } from "../components/shared/CertificateSection";
import { ContactBand } from "../components/shared/ContactBand";
import { company, divisionHref, divisions, values } from "../content/site";

const legal: Array<[string, string]> = [
  ["Registered name", company.legalName],
  ["RC number", company.rc],
  ["Tax ID", company.tin],
  ["Incorporated", company.incorporatedLabel],
  ["Company type", company.companyType],
  ["Registered under", company.act],
  ["Based in", `${company.city}, ${company.region}, ${company.country}`],
  ["Website", company.domain],
];

interface PressAsset {
  file: string;
  label: string;
  dark?: boolean;
}

const pressAssets: PressAsset[] = [
  { file: "eprime-wordmark.svg", label: "Wordmark" },
  { file: "eprime-wordmark-on-dark.svg", label: "Wordmark, on dark", dark: true },
  { file: "eprime-stacked.svg", label: "Stacked lockup" },
  { file: "eprime-stacked-on-dark.svg", label: "Stacked lockup, on dark", dark: true },
  { file: "eprime-symbol.svg", label: "Symbol" },
  { file: "eprime-symbol-on-dark.svg", label: "Symbol, on dark", dark: true },
  { file: "eprime-wordmark-mono.svg", label: "Wordmark, one colour" },
  { file: "eprime-symbol-mono-white.svg", label: "Symbol, white", dark: true },
];

const boilerplates = [
  { label: "Short boilerplate", text: company.boilerplateShort },
  { label: "Long boilerplate", text: company.boilerplateLong },
];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="ep-btn ep-btn-ghost !px-3 !py-1.5 text-xs"
      onClick={() => {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          })
          .catch(() => setCopied(false));
      }}
      aria-label={`Copy the ${label.toLowerCase()}`}
    >
      {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export function Company() {
  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="company-title">
        <div aria-hidden="true" className="ep-grid-bg ep-grid-fade absolute inset-0" />
        <div aria-hidden="true" className="absolute -right-24 bottom-[-12%] hidden text-surface lg:block">
          <PrimeSymbol className="h-[520px] w-auto" primeColor="var(--ep-surface-2)" animate delay={200} />
        </div>
        <div className="ep-container relative pb-24 pt-16 md:pb-32 md:pt-24">
          <p className="ep-rise ep-eyebrow">Company · RC {company.rc}</p>
          <h1 id="company-title" className="ep-hero ep-rise mt-6 max-w-4xl text-[clamp(44px,7vw,96px)]" style={{ animationDelay: "80ms" }}>
            We start things, and we finish them<span className="text-accent">.</span>
          </h1>
          <p className="ep-rise ep-lede mt-8 max-w-2xl" style={{ animationDelay: "160ms" }}>
            {company.boilerplateLong}
          </p>
          <dl className="ep-rise mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4" style={{ animationDelay: "240ms" }}>
            {[
              ["2025", "incorporated"],
              [company.city, "headquarters"],
              ["1 of 4", "divisions active"],
              ["1", "product live"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="sr-only">{k}</dt>
                <dd className="font-display text-2xl font-bold tracking-tight">{v}</dd>
                <dd className="mt-1 text-xs text-muted">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="name-title" className="py-24 md:py-32">
        <div className="ep-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="name-title"
              eyebrow="The name"
              title={
                <>
                  E is the start. The prime is the change<span className="text-accent">.</span>
                </>
              }
            />
            <Reveal className="mt-6 max-w-xl space-y-4 text-muted">
              <p>
                In mathematics, the prime mark turns a function into its derivative: f becomes f′, the rate at which something is changing. We
                put it on the E because that is the business we are in. Not the size of a thing, but how fast it moves once it starts.
              </p>
              <p>
                The stroke in our symbol leans forward at the same angle every time it appears. It is the one part of the mark that is always
                bronze.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="ep-ink relative overflow-hidden rounded-card p-10 md:p-14">
              <div aria-hidden="true" className="ep-grid-bg absolute inset-0 opacity-70" />
              <div className="relative flex items-center justify-between gap-8">
                <div className="text-fg">
                  <PrimeSymbol className="h-28 w-auto md:h-36" title="The E-Prime symbol" />
                </div>
                <div className="text-right font-mono">
                  <p className="text-sm text-muted">f(x)</p>
                  <p className="mt-1 text-3xl md:text-4xl">
                    f<span className="text-accent">′</span>(x)
                  </p>
                  <p className="mt-3 text-xs text-muted">rate of change</p>
                </div>
              </div>
              <p className="relative mt-10 border-t border-line pt-6 font-display text-xl font-bold tracking-tight md:text-2xl">
                Prime movers<span className="text-accent">.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading id="values-title" eyebrow="How we work" title="Four rules we hold ourselves to." />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 0.06} className="ep-card ep-cut h-full">
                  <p className="font-mono text-xs text-primary">0{i + 1}</p>
                  <p className="mt-4 font-display text-xl font-bold">{v.title}</p>
                  <p className="mt-2 text-sm text-muted">{v.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="founder-title" className="py-24 md:py-32">
        <div className="ep-container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
            <h2 id="founder-title" className="ep-h2 mt-5">
              Founder-led, engineer-run.
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-muted">
            <p className="font-display text-2xl font-semibold text-fg">{company.founder}</p>
            <p>
              E-Prime was founded by a backend and AI engineer with more than five years of building financial, healthcare and education
              software. The person who designs your system is the same person who answers when something needs fixing.
            </p>
            <p>
              We are small on purpose. Every product we sell is one we run ourselves, so we keep the team close to the code and the customer.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="company-divisions-title" className="border-t border-line py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="company-divisions-title"
            eyebrow="Structure"
            title="One company, four divisions."
            lede="Tech is active and earning. Agro, Build and Capital are being formed, in that order, and will launch when they are ready to be judged on results."
          />
          <ul className="mt-14 divide-y divide-line border-y border-line">
            {divisions.map((d, i) => (
              <li key={d.key}>
                <Reveal delay={i * 0.04}>
                  <SmartLink
                    to={divisionHref(d)}
                    className="group grid items-center gap-4 py-7 md:grid-cols-[220px_1fr_auto_auto] md:gap-10"
                  >
                    <span>
                      <DivisionLogo division={d} className="h-8 w-auto" />
                    </span>
                    <span>
                      <span className="block font-semibold">{d.headline}</span>
                      <span className="mt-1 block text-sm text-muted">{d.scope}</span>
                    </span>
                    <Badge status={d.status} />
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className="hidden text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg md:block"
                    />
                  </SmartLink>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CertificateSection />

      <section aria-labelledby="legal-title" className="border-t border-line bg-surface-2/40 py-24 md:py-28">
        <div className="ep-container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Legal</Eyebrow>
            <h2 id="legal-title" className="ep-h2 mt-5">
              Registration details.
            </h2>
            <p className="ep-lede mt-5">For invoices, contracts and vendor forms.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <dl className="divide-y divide-line rounded-card border border-line bg-surface">
              {legal.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="press" aria-labelledby="press-title" className="py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="press-title"
            eyebrow="Press kit"
            title="Logos and words, ready to use."
            lede="Use the files as they are. Please do not recolour, stretch or redraw the mark, and keep the prime stroke bronze."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pressAssets.map((a, i) => (
              <li key={a.file}>
                <Reveal delay={(i % 4) * 0.04} className="group overflow-hidden rounded-card border border-line">
                  <div className={`grid h-36 place-items-center p-6 ${a.dark ? "bg-ink-950" : "bg-white"}`}>
                    <img src={`/brand/${a.file}`} alt="" className="max-h-16 w-auto max-w-[80%]" loading="lazy" />
                  </div>
                  <a
                    href={`/brand/${a.file}`}
                    download
                    className="flex items-center justify-between gap-2 border-t border-line bg-surface px-4 py-3 text-sm transition-colors hover:bg-surface-2"
                  >
                    <span>
                      {a.label}
                      <span className="ml-2 font-mono text-xs text-muted">SVG</span>
                    </span>
                    <Download size={16} strokeWidth={1.75} className="text-muted transition-colors group-hover:text-primary" aria-hidden="true" />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {boilerplates.map((b) => (
              <Reveal key={b.label} className="ep-card">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold">{b.label}</p>
                  <CopyButton text={b.text} label={b.label} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Verdigris", "#167A6E"],
              ["Bronze", "#B9822A"],
              ["Ink", "#0A1A1F"],
              ["Mist", "#F3F6F5"],
            ].map(([name, hex]) => (
              <div key={name} className="flex items-center gap-4 rounded-card border border-line p-4">
                <span aria-hidden="true" className="h-10 w-10 rounded-control ring-1 ring-line" style={{ background: hex }} />
                <div>
                  <dt className="text-sm font-semibold">{name}</dt>
                  <dd className="font-mono text-xs text-muted">{hex}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand title="Writing about us, or working with us?" body={`Press and partnership questions go to ${company.email}. We reply to every one.`} />
    </>
  );
}
