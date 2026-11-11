// About copy approved by Andrew, Nov 11, 2026.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Eyebrow, PageHero, Reveal, Section } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => pageMeta(
    "About Andrew | Rooted Growth Digital",
    "Rooted Growth Digital is based in Southwest Florida and built around one person: the builder you work with directly, from first call to monthly care.",
    "/about",
  ),
  component: About,
});

const VALUES = [
  { t: "Personalized", d: "Every business is different. The work should reflect your story, your customers and your goals, not a template." },
  { t: "Approachable", d: "Technology shouldn't feel intimidating. I keep things plain, with no jargon and no pressure." },
  { t: "Grounded", d: "This is about relationships, not packages that appear and then disappear. I'm here after launch, not just for it." },
  { t: "Growth-minded", d: "A great site should do more than look good. It should help you get found and win customers." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Rooted in Southwest Florida" />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal className="space-y-6">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Hi, I'm Andrew Malby, Founder. When you work with Rooted Growth Digital, you work with me. I'm the one who learns your business, builds your site and picks up when you call.</p>
              <p>I started Rooted Growth Digital because small business owners deserve better than a cookie-cutter website and a company that disappears after launch. Many owners do great work, but their online presence doesn't show it, and they don't know where to start.</p>
              <p>I'll design and build your site, then keep it running, secure and up to date, with regular check-ins and, here in Southwest Florida, face-to-face meetings.</p>
              <p>Building websites is what I do. I've built sites for local businesses and for my own brands, and every one starts with the same question: what should a customer see, feel and do when they land here? A strong online presence means showing up when people search, telling your story clearly and making the next step easy. That's what I build, right here from Ave Maria, Florida.</p>
            </div>
            <blockquote className="border-l-4 border-gold pl-5">
              <p className="font-serif text-2xl">Get noticed. Stay supported. Keep growing.</p>
            </blockquote>
          </Reveal>
        </div>
      </Section>
      <Section className="bg-cream-warm">
        <Eyebrow>Values</Eyebrow>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <Reveal key={v.t} className="rounded-3xl bg-card p-6">
              <h3 className="text-xl">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand title="Let's get to know each other" body="Tell me about your business. I'd like to hear what you do and where you want to go." />
    </>
  );
}
