import { Outlet } from "react-router";
import { LazyMotion, MotionConfig } from "motion/react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollManager } from "./ScrollManager";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

// Animation features load in their own chunk so the first paint does not wait for them.
const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export function Layout() {
  useDocumentMeta();
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-control focus:bg-surface focus:px-4 focus:py-3 focus:text-fg"
        >
          Skip to content
        </a>
        <ScrollManager />
        <SiteHeader />
        <main id="main">
          <Outlet />
        </main>
        <SiteFooter />
      </MotionConfig>
    </LazyMotion>
  );
}
