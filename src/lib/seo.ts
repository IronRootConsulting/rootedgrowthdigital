import { site } from "@/config/site";

/** Per-page title, description, Open Graph and Twitter tags. */
export function pageMeta(title: string, description: string, path: string) {
  const url = `${site.origin}${path === "/" ? "/" : `${path}/`}`;
  const image = `${site.origin}/og-image.png`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Rooted Growth Digital logo" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
