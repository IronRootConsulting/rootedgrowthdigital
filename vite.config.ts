import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Site base path. "/" for the custom domain; set BASE=/repo-name/ for a project-pages preview.
const rawBase = process.env["BASE"] ?? "/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

const ROUTES = ["/", "/who-its-for", "/how-we-work", "/work", "/about", "/contact", "/privacy", "/terms", "/404"];

export default defineConfig({
  base,
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: false, autoSubfolderIndex: true, failOnError: true },
      pages: ROUTES.map((path) => ({ path, prerender: { enabled: true } })),
    }),
    viteReact(),
  ],
});
