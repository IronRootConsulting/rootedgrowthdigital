// Draft copy (Nov 11, 2026), pending approval.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Compass, Cpu, Users, UserCheck } from "lucide-react";
import { CtaBand, Eyebrow, PageHero, Reveal, Section } from "@/components/site";

export const Route = createFileRoute("/who-its-for")({
  head: () => pageMeta(
    "Who It's For | Rooted Growth Digital",
    "For Southwest Florida service business owners whose work is strong but whose online presence hasn't caught up yet.",
    "/who-its-for",
  ),
  component: WhoItsFor,
});

const OWNERS = [
  { icon: Sprout, t: "Strong work, weak presence", d: "Your product or service is great, but your website, or the lack of one, doesn't show it. We help it catch up." },
  { icon: Compass, t: "Not sure where to start", d: "We start with a conversation, then turn it into a clear plan: what matters now, what can wait, and who handles it." },
  { icon: Cpu, t: "Tech feels like a lot", d: "Websites and marketing shouldn't be one more thing on a full plate. We keep it plain and take the technical side off your hands." },
  { icon: Users, t: "No big-agency budget", d: "You want more customers without a large agency's price or process. Clear plans let you start where it makes sense." },
  { icon: UserCheck, t: "You want one person to call", d: "You'd rather have one reliable person who knows your business than a team you never meet." },
];
const CHIPS = ["Local contractors", "Tradespeople", "Service providers", "Independent professionals", "Family-owned businesses", "Boutiques", "Specialty retailers"];

function WhoItsFor() {
  return (
    <>
      <PageHero eyebrow="Who it's for" title="Built for owners who'd rather run their business">
        <p className="text-lg text-muted-foreground">You're good at what you do, and your customers know it. Your online presence just hasn't caught up yet. That's where we come in.</p>
      </PageHero>
      <Section>
        <h2 className="mb-10 text-3xl">You might be a fit if...</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OWNERS.map(({ icon: Icon, t, d }) => (
            <Reveal key={t} className="rounded-3xl bg-card p-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-sage-light"><Icon className="h-5 w-5" aria-hidden /></div>
              <h3 className="mt-5 text-lg">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-cream-warm">
        <Eyebrow>Businesses like…</Eyebrow>
        <ul className="mt-4 flex flex-wrap gap-3">
          {CHIPS.map((c) => <li key={c} className="rounded-full border border-sage bg-card px-4 py-2 text-sm">{c}</li>)}
        </ul>
        <p className="mt-6 text-muted-foreground">Rooted in Southwest Florida, and glad to help small businesses anywhere in the country.</p>
      </Section>
      <CtaBand title="Sound like you?" body="Let's talk about your business and what would help most right now." />
    </>
  );
}
