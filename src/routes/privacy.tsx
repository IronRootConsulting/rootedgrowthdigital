// Placeholder legal page; final text by legal reviewer.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta("Privacy Policy — Rooted Growth Digital (Draft)", "Draft placeholder privacy policy.", "/privacy"),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      note="Placeholder — final Privacy Policy to be drafted (St. Thomas More)."
      sections={["Information we collect", "How we use information", "Sharing", "Your choices", "Contact"]}
    />
  ),
});
