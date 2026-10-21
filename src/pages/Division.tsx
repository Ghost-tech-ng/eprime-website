import { useId, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { m } from "motion/react";
import { Badge } from "../components/ui/Badge";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Photo } from "../components/ui/Photo";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { DivisionLogo } from "../components/brand/DivisionLogo";
import { divisionBg, divisionText } from "../components/brand/divisionColors";
import { GoLiveCard, Roadmap } from "../components/shared/Roadmap";
import { ContactBand } from "../components/shared/ContactBand";
import { ProductShelf } from "../components/tech/ProductShelf";
import { Services } from "../components/tech/Services";
import { HowWeWork } from "../components/tech/HowWeWork";
import { company, divisionByKey } from "../content/site";
import type { Division as DivisionData, DivisionKey } from "../content/site";

interface DivisionProps {
  divisionKey: DivisionKey;
}

export function Division({ divisionKey }: DivisionProps) {
  const d = divisionByKey(divisionKey);
  const active = d.status === "Active";

  return (
    <>
      <DivisionHero d={d} />

      <section aria-labelledby="offerings-title" className="py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading id="offerings-title" eyebrow="What it covers" title={d.scope} />
          <ol className={`mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 ${d.offerings.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {d.offerings.map((o, i) => (
              <m.li
                key={o.title}
                data-reveal
                className="bg-surface p-6 md:p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className={`font-mono text-xs ${divisionText[d.key]}`}>0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{o.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{o.body}</p>
              </m.li>
            ))}
          </ol>
        </div>
      </section>

      {d.key === "tech" ? (
        <>
          <ProductShelf />
          <Services />
          <HowWeWork />
        </>
      ) : null}

      <section aria-labelledby="opens-title" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
        <div className="ep-container">
          <SectionHeading
            id="opens-title"
            eyebrow={active ? "Where it goes next" : "How it opens"}
            title={active ? "Open now. Measured every quarter." : "It starts as software."}
            lede={d.startsAs}
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
            <Roadmap items={d.roadmap} />
            <GoLiveCard />
          </div>
        </div>
      </section>

      <section aria-label={`${d.name} in pictures`} className="py-24 md:py-32">
        <div className="ep-container grid gap-5 md:grid-cols-2">
          {d.photos.gallery.map((p, i) => (
            <Reveal key={p.file} delay={i * 0.06}>
              <Photo spec={p} motif={d.key} figure={`0${i + 2}`} aspect="aspect-[4/3]" detail={i === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="vocabulary-title" className="overflow-hidden border-y border-line py-16 md:py-20">
        <div className="ep-container">
          <p id="vocabulary-title" className="font-mono text-xs text-muted">
            {d.short} vocabulary
          </p>
          <ul className="mt-6 grid gap-2 md:grid-cols-3 md:gap-6">
            {d.vocabulary.map((word, i) => (
              <m.li
                key={word}
                data-reveal
                className="font-display text-[clamp(30px,3.6vw,52px)] font-bold leading-none tracking-tight [font-stretch:108%]"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                {word.split(" ")[0]} <span className={divisionText[d.key]}>{word.split(" ").slice(1).join(" ")}</span>
              </m.li>
            ))}
          </ul>
        </div>
      </section>

      {active ? null : <Interest d={d} />}

      <div className="pt-24 md:pt-32">
        <ContactBand
          title={active ? "Got something to build?" : `Want in on ${d.short} early?`}
          body={
            active
              ? undefined
              : `${d.name} opens when it passes the go-live test. Tell us who you are and what you need, and you hear from us first when it does.`
          }
          whatsappText={active ? undefined : `Hello E-Prime, I am interested in ${d.name}.`}
        />
      </div>
    </>
  );
}

function DivisionHero({ d }: { d: DivisionData }) {
  const active = d.status === "Active";
  return (
    <section className="relative overflow-hidden" aria-labelledby="division-title">
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${divisionBg[d.key]}`} />
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
              <Link to="/#divisions" className="hover:text-fg">
                Divisions
              </Link>
            </li>
            <ChevronRight size={12} aria-hidden="true" />
            <li aria-current="page" className="text-fg">
              {d.name}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="ep-rise flex flex-wrap items-center gap-4" style={{ animationDelay: "60ms" }}>
              <DivisionLogo division={d} className="h-8 w-auto" eager />
              <Badge status={d.status} />
            </div>
            <h1 id="division-title" className="ep-hero ep-rise mt-8 text-[clamp(44px,6.5vw,88px)]" style={{ animationDelay: "120ms" }}>
              {d.headline}
            </h1>
            <p className={`ep-rise mt-4 font-mono text-sm ${divisionText[d.key]}`} style={{ animationDelay: "160ms" }}>
              {d.tagline}
            </p>
            <p className="ep-rise ep-lede mt-6" style={{ animationDelay: "200ms" }}>
              {d.intro}
            </p>
            <div className="ep-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "260ms" }}>
              {active ? (
                <>
                  <Link to="/contact" className="ep-btn ep-btn-solid">
                    Start a project
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                  <a href="#products" className="ep-btn ep-btn-ghost">
                    See the products
                  </a>
                </>
              ) : (
                <>
                  <a href="#interest" className="ep-btn ep-btn-solid">
                    Register interest
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  <Link to={`/contact?interest=${d.key}`} className="ep-btn ep-btn-ghost">
                    Talk to us
                  </Link>
                </>
              )}
            </div>
            <p className="ep-rise mt-8 font-mono text-[11px] text-muted" style={{ animationDelay: "320ms" }}>
              {d.site ? d.subdomain : `Soon at ${d.subdomain}`}
            </p>
          </div>
          <div className="ep-rise" style={{ animationDelay: "180ms" }}>
            <Photo spec={d.photos.hero} motif={d.key} figure="01" eager />
          </div>
        </div>
      </div>
    </section>
  );
}

function Interest({ d }: { d: DivisionData }) {
  const uid = useId();
  const [audience, setAudience] = useState<string>(d.audiences[0] ?? "");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const subject = `${d.name}: interest from ${audience.toLowerCase()}`;
  const text = [`Hello E-Prime, I am interested in ${d.name}.`, `I am: ${audience}`, name && `Name: ${name}`, message]
    .filter(Boolean)
    .join("\n");
  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  const whatsapp = `${company.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <section id="interest" aria-labelledby="interest-title" className="scroll-mt-24 pt-24 md:pt-32">
      <div className="ep-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow>Register interest</Eyebrow>
          <h2 id="interest-title" className="ep-h2 mt-5">
            Be first when {d.short} opens.
          </h2>
          <p className="ep-lede mt-5">
            No list, no newsletter. Your note comes straight to us by email or WhatsApp, and we reply when there is something real to
            say.
          </p>
        </div>
        <Reveal>
          <div className="rounded-card border border-line bg-surface p-6 md:p-8">
            <fieldset>
              <legend className="text-sm font-semibold">I am</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {d.audiences.map((a) => (
                  <button
                    key={a}
                    type="button"
                    aria-pressed={audience === a}
                    onClick={() => setAudience(a)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      audience === a ? "border-fg bg-fg text-bg" : "border-line text-fg/80 hover:border-fg/40"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </fieldset>
            <label htmlFor={`${uid}-name`} className="mt-6 block text-sm font-semibold">
              Name <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id={`${uid}-name`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-[15px] outline-none focus:border-primary"
            />
            <label htmlFor={`${uid}-message`} className="mt-5 block text-sm font-semibold">
              What you have in mind <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id={`${uid}-message`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-2 w-full resize-y rounded-lg border border-line bg-bg px-4 py-3 text-[15px] outline-none focus:border-primary"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="ep-btn ep-btn-solid">
                <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
                Send on WhatsApp
              </a>
              <a href={mailto} className="ep-btn ep-btn-ghost">
                <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                Send by email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
