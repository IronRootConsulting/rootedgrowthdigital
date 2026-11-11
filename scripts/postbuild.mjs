// Flattens the static client build into dist/, writes 404.html and sitemap.xml.
import { existsSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const client = join(dist, "client");
if (existsSync(client)) {
  const tmp = "dist.tmp";
  rmSync(tmp, { recursive: true, force: true });
  renameSync(client, tmp);
  rmSync(dist, { recursive: true, force: true });
  renameSync(tmp, dist);
}

const notFound = join(dist, "404", "index.html");
if (!existsSync(notFound)) throw new Error("404 page was not prerendered");
// The 404 page is served for any unknown URL, so it ships as plain HTML (no hydration).
const html = readFileSync(notFound, "utf8")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/<link rel="modulepreload"[^>]*>/g, "");
writeFileSync(join(dist, "404.html"), html);
rmSync(join(dist, "404"), { recursive: true, force: true });


// Keep public/CNAME in the repo for the future custom-domain build, but never
// ship it on a project-pages preview (BASE=/rootedgrowthdigital/).
const rawBase = process.env.BASE ?? "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
const cname = join(dist, "CNAME");
if (base !== "/" && existsSync(cname)) {
  rmSync(cname);
}

const origin = "https://rootedgrowthdigital.com";
const routes = ["/", "/who-its-for/", "/how-we-work/", "/work/", "/about/", "/contact/", "/privacy/", "/terms/"];
for (const r of routes) {
  const file = join(dist, r, "index.html");
  if (!existsSync(file)) throw new Error(`Missing prerendered page: ${file}`);
}
const today = new Date().toISOString().slice(0, 10);
const urls = routes.map((r) => `  <url><loc>${origin}${r}</loc><lastmod>${today}</lastmod></url>`).join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("postbuild: dist ready", readdirSync(dist).join(", "));
