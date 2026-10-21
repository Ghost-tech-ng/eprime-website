import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Mascot } from "../components/brand/Mascot";

export function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="ep-grid-bg ep-grid-fade absolute inset-0" />
      <div className="ep-container relative grid min-h-[70vh] items-center gap-10 py-24 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="ep-rise font-mono text-sm text-muted">404 · f′(x) = 0</p>
          <h1 className="ep-hero ep-rise mt-6 max-w-3xl text-[clamp(44px,8vw,96px)]" style={{ animationDelay: "80ms" }}>
            This page hasn't shipped<span className="text-accent">.</span>
          </h1>
          <p className="ep-rise ep-lede mt-6" style={{ animationDelay: "160ms" }}>
            The link may be old, or the page may still be in the workshop. Everything that has shipped is one click away.
          </p>
          <Link to="/" className="ep-btn ep-btn-solid ep-rise mt-9" style={{ animationDelay: "240ms" }}>
            <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
            Back to the home page
          </Link>
        </div>
        <div className="ep-rise mx-auto w-full max-w-[260px] md:max-w-[320px]" style={{ animationDelay: "200ms" }}>
          <Mascot className="h-auto w-full" title="Prime, the E-Prime robot, waving you back" />
        </div>
      </div>
    </section>
  );
}
