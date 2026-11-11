import { PageHero, Section } from "./site";

export function LegalPage({ title, note, sections }: { title: string; note: string; sections: string[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <p className="rounded-xl border border-gold bg-gold/15 px-4 py-2 text-sm font-semibold">{note}</p>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: [Placeholder date]</p>
      </PageHero>
      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s}>
              <h2 className="text-2xl">{s}</h2>
              <p className="mt-2 italic text-muted-foreground">[Placeholder text]</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
