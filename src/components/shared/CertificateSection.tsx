import { useRef } from "react";
import { BadgeCheck, ExternalLink, Maximize2, X } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { company } from "../../content/site";

const facts: Array<[string, string]> = [
  ["Company", company.legalName.toUpperCase()],
  ["RC number", company.rc],
  ["Incorporated", company.incorporatedLabel],
  ["Type", company.companyType],
  ["Under", company.act],
  ["Registrar", company.registrar],
  ["Tax ID", company.tin],
];

interface CertificateSectionProps {
  headingLevel?: "h2" | "h3";
}

export function CertificateSection({ headingLevel = "h2" }: CertificateSectionProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const Heading = headingLevel;

  return (
    <section id="certificate" aria-labelledby="certificate-title" className="border-t border-line py-24 md:py-32">
      <div className="ep-container grid items-center gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-[460px]">
            <div aria-hidden="true" className="absolute -inset-4 rounded-card border border-dashed border-line md:-inset-6" />
            <div aria-hidden="true" className="absolute -left-4 top-10 h-24 w-px bg-primary md:-left-6" />
            <button
              type="button"
              onClick={() => dialog.current?.showModal()}
              className="group relative block w-full overflow-hidden rounded-control bg-white shadow-[0_40px_80px_-40px_rgba(10,26,31,0.55)] ring-1 ring-line transition-transform duration-200 hover:-translate-y-1"
              aria-label="Enlarge the certificate of incorporation"
            >
              <img
                src="/images/cac-certificate-720.webp"
                srcSet="/images/cac-certificate-720.webp 720w, /images/cac-certificate-1400.webp 1400w"
                sizes="(min-width: 1024px) 460px, 90vw"
                width={720}
                height={902}
                loading="lazy"
                decoding="async"
                alt={`Certificate of incorporation for ${company.legalName}, RC ${company.rc}, issued by the ${company.registrar} on ${company.incorporatedLabel}.`}
                className="block h-auto w-full"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-control bg-ink-950/85 px-3 py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <Maximize2 size={14} aria-hidden="true" />
                Enlarge
              </span>
            </button>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.05}>
          <Eyebrow>On the record</Eyebrow>
          <Heading id="certificate-title" className="ep-h2 mt-5">
            Registered in Nigeria, and you can check.
          </Heading>
          <p className="ep-lede mt-5">
            {company.legalName} is incorporated with the {company.registrar}. This is our certificate. Search the public register for our
            RC number and you will find the same company.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[130px_1fr] gap-4 py-3 text-sm sm:grid-cols-[160px_1fr]">
                <dt className="text-muted">{k}</dt>
                <dd className="font-mono font-semibold tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={company.cacSearch} target="_blank" rel="noopener noreferrer" className="ep-btn ep-btn-secondary">
              <BadgeCheck size={16} strokeWidth={1.75} aria-hidden="true" />
              Verify on the CAC register
              <ExternalLink size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <span className="font-mono text-xs text-muted">Search: RC {company.rc}</span>
          </div>
        </Reveal>
      </div>

      <dialog
        ref={dialog}
        aria-label="Certificate of incorporation"
        className="m-auto max-h-[94vh] w-[min(94vw,820px)] overflow-auto rounded-card bg-surface p-0 text-fg backdrop:bg-ink-950/80 backdrop:backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-line bg-surface px-4 py-3">
          <p className="text-sm font-semibold">Certificate of incorporation · RC {company.rc}</p>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-control hover:bg-surface-2"
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <img
          src="/images/cac-certificate-1400.webp"
          width={1400}
          height={1754}
          loading="lazy"
          alt={`Certificate of incorporation for ${company.legalName}, RC ${company.rc}.`}
          className="block h-auto w-full bg-white"
        />
      </dialog>
    </section>
  );
}
