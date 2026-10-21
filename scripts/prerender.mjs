import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssrEntry = resolve(root, "dist-ssr", "entry-server.js");

const template = await readFile(resolve(dist, "index.html"), "utf8");
const { render, routes, notFoundMeta, SITE_URL } = await import(pathToFileURL(ssrEntry).href);

function page(url, pathTag = url) {
  const { html, head } = render(url);
  return template
    .replace("<!--app-head-->", head)
    .replace('<div id="root">', `<div id="root" data-path="${pathTag}">`)
    .replace("<!--app-html-->", html);
}

for (const route of routes) {
  const out = route.path === "/" ? resolve(dist, "index.html") : resolve(dist, `.${route.path}`, "index.html");
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, page(route.path));
  console.log(`prerendered ${route.path}`);
}

await writeFile(resolve(dist, "404.html"), page(notFoundMeta.path, "*"));
console.log("prerendered 404.html");

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => !r.noindex)
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join("\n");
await writeFile(
  resolve(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${routes.length} urls`);

await rm(resolve(root, "dist-ssr"), { recursive: true, force: true });
