// Placeholder legal page; final text by legal reviewer.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta("Terms of Service — Rooted Growth Digital (Draft)", "Draft placeholder terms of service.", "/terms"),
  component: () => (
    <LegalPage
      title="Terms of Service"
      note="Placeholder — final Terms to be drafted (St. Thomas More)."
      sections={["Services", "Payments", "Responsibilities", "Limitations", "Changes to these terms"]}
    />
  ),
});
