import { Link } from "react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { PrimeSymbol } from "../brand/PrimeSymbol";
import { company } from "../../content/site";

interface ContactBandProps {
  title?: string;
  body?: string;
  whatsappText?: string;
}

export function ContactBand({
  title = "Got something to build?",
  body = "Tell us what it has to do and who it is for. We come back with questions, a rough timeline and a price range in naira.",
  whatsappText = "Hello E-Prime, I would like to talk about a project.",
}: ContactBandProps) {
  return (
    <section aria-labelledby="contact-band-title" className="pb-24 md:pb-32">
      <div className="ep-container">
        <Reveal>
          <div className="ep-ink relative overflow-hidden rounded-card px-6 py-14 md:px-14 md:py-20">
            <div aria-hidden="true" className="ep-grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_right,#000,transparent_70%)]" />
            <div aria-hidden="true" className="absolute -right-10 top-1/2 hidden -translate-y-1/2 text-surface-2 md:block">
              <PrimeSymbol className="h-[320px] w-auto" primeColor="var(--ep-primary)" />
            </div>
            <div className="relative max-w-2xl">
              <h2 id="contact-band-title" className="ep-h2">
                {title}
              </h2>
              <p className="ep-lede mt-5">{body}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="ep-btn ep-btn-solid">
                  Start a project
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </Link>
                <a
                  href={`${company.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-btn ep-btn-ghost"
                >
                  <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
                  WhatsApp {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
