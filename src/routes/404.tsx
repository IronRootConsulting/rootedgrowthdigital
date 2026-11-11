import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";

// Prerendered to dist/404.html for static hosting.
export const Route = createFileRoute("/404")({
  head: () => ({ meta: [{ title: "Page not found | Rooted Growth Digital" }] }),
  component: NotFound,
});
