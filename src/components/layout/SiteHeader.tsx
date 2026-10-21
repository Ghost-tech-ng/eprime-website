import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Wordmark } from "../brand/Wordmark";
import { ThemeToggle } from "./ThemeToggle";
import { SmartLink } from "../ui/SmartLink";
import { divisionBg } from "../brand/divisionColors";
import { company, nav } from "../../content/site";
import type { NavItem } from "../../content/site";

const mobileNav: NavItem[] = [{ label: "Home", to: "/" }, ...nav, { label: "Contact", to: "/contact" }];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[border-color,box-shadow] duration-200 ${
        scrolled ? "border-line shadow-[0_8px_24px_-16px_rgba(10,26,31,0.25)]" : "border-transparent"
      }`}
    >
      {/* Blur lives on its own layer: backdrop-filter on the header would trap the fixed mobile menu inside it. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bg/85 backdrop-blur-md" />
      <div className="ep-container flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0 rounded-control py-2" aria-label={`${company.name}, home`}>
          <Wordmark className="h-6 w-auto md:h-7" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {nav.map((item, i) => (
              <li key={item.to} className="relative" onMouseEnter={() => setHovered(i)}>
                {hovered === i ? (
                  <m.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-control bg-surface-2"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                ) : null}
                <SmartLink
                  to={item.to}
                  className="relative flex items-center gap-2 rounded-control px-4 py-2.5 text-[15px] font-medium text-fg/85 hover:text-fg"
                >
                  {item.dot ? <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${divisionBg[item.dot]}`} /> : null}
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="ep-btn ep-btn-primary hidden sm:inline-flex">
            Talk to us
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            className="ep-grid-bg fixed inset-x-0 bg-bg bottom-0 top-[72px] z-40 overflow-y-auto border-t border-line lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <nav aria-label="Mobile" className="ep-container flex min-h-full flex-col justify-between py-10">
              <ul className="space-y-2">
                {mobileNav.map((item, i) => (
                  <m.li
                    key={item.to}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <SmartLink
                      to={item.to}
                      className="flex items-baseline gap-4 py-1.5 font-display text-[34px] font-bold leading-tight tracking-tight [font-stretch:110%]"
                    >
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                      {item.label}
                      {item.dot ? <span aria-hidden="true" className={`h-2 w-2 self-center rounded-full ${divisionBg[item.dot]}`} /> : null}
                    </SmartLink>
                  </m.li>
                ))}
              </ul>
              <div className="mt-12 space-y-4">
                <Link to="/contact" className="ep-btn ep-btn-primary w-full justify-center">
                  Talk to us
                </Link>
                <p className="font-mono text-xs text-muted">
                  RC {company.rc} · {company.city}
                </p>
              </div>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
