import { useEffect } from "react";
import { useLocation } from "react-router";
import { SITE_URL } from "../content/site";
import { metaFor } from "../seo";

function setMeta(selector: string, attr: "content" | "href", value: string): void {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/* Keeps title, description and canonical in step during client-side navigation.
   The prerendered HTML already carries the full head for crawlers. */
export function useDocumentMeta(): void {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", `${SITE_URL}${meta.path}`);
  }, [pathname]);
}
