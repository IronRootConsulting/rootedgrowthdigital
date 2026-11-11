import type { ReactNode } from "react";
import { PageHero, Section } from "./site";

/** Shared layout for Privacy and Terms. Draft notes stay visible until publication. */
export function LegalPage({
  title,
  note,
  dates,
  children,
}: {
  title: string;
  note: ReactNode;
  dates?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <div className="rounded-xl border border-gold bg-gold/15 px-4 py-3 text-sm font-semibold text-forest">
          {note}
        </div>
        {dates ? <div className="mt-4 text-sm text-muted-foreground">{dates}</div> : null}
      </PageHero>
      <Section>
        <div className="max-w-3xl space-y-8 leading-relaxed">{children}</div>
      </Section>
    </>
  );
}
