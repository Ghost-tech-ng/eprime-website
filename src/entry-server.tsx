import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./App";
import { metaFor, renderHead } from "./seo";

export { routes, notFoundMeta } from "./seo";
export { SITE_URL } from "./content/site";

export function render(url: string): { html: string; head: string } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: renderHead(metaFor(url)) };
}
