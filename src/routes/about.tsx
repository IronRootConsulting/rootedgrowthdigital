// Draft copy (Nov 11, 2026), pending approval.
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
  { t: "Growth-minded", d: "A good-looking site isn't the goal. Helping you get noticed and win customers is." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Rooted in Southwest Florida" />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="grid aspect-[4/5] place-items-center rounded-3xl bg-sage-light p-6 text-center text-sm font-semibold text-forest/70">[PLACEHOLDER: photo of Andrew, or remove the photo block]</div>
          <Reveal className="space-y-6">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Hi, I'm [PLACEHOLDER: Andrew Malby, name and title as shown on the site]. When you work with Rooted Growth Digital, you work with me. I'm the one who learns your business, builds your site and picks up when you call.</p>
              <p>I started Rooted Growth Digital because small business owners deserve better than a cookie-cutter website and a company that disappears after launch. Many owners do great work, but their online presence doesn't show it, and they don't know where to start. [CONFIRM: this reason comes from your vision notes. Keep, or replace in your own words.]</p>
              <p>My job is to be the person in your corner. I'll build a strong foundation online, then stay alongside you as you grow, with regular check-ins and, here in Southwest Florida, real face-to-face conversations.</p>
              <p>[PLACEHOLDER: 1 to 2 lines of personal background, such as your Southwest Florida ties and relevant experience. Not in the sources, so nothing is invented here.]</p>
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
