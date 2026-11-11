// Draft copy (Nov 11, 2026), pending approval.
import { pageMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookButton, CtaBand, Eyebrow, Reveal, Section } from "@/components/site";
import { PricingSection, ServiceCards } from "@/components/content";

export const Route = createFileRoute("/")({
  head: () => pageMeta(
    "Rooted Growth Digital | Websites for SWFL Small Businesses",
    "Websites and monthly care for service-based small businesses in Southwest Florida. Get noticed, stay supported and keep growing.",
    "/",
  ),
  component: Home,
});

function RootsArt() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <circle cx="200" cy="170" r="150" className="fill-sage-pale" />
      <circle cx="270" cy="110" r="60" className="fill-sage-light" />
      <g className="stroke-forest" fill="none" strokeWidth="3" strokeLinecap="round">
        <path d="M200 60 C200 120 200 170 200 230" />
        <path d="M200 120 C170 100 150 90 130 95 C150 125 175 130 200 125" className="fill-sage" />
        <path d="M200 160 C230 135 255 128 275 132 C258 165 230 170 200 165" className="fill-sage" />
        <path d="M200 95 C185 75 182 62 188 48 C205 60 208 78 200 95" className="fill-sage-light" />
        <path d="M120 230 H280" className="stroke-gold" strokeWidth="4" />
        <path d="M200 230 C200 270 175 290 150 320" />
        <path d="M200 230 C205 280 230 300 255 330" />
        <path d="M200 240 C190 280 200 320 198 360" />
        <path d="M178 275 C160 280 140 278 120 290" />
        <path d="M222 280 C245 285 262 280 285 292" />
      </g>
    </svg>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow>Southwest Florida · Small businesses anywhere</Eyebrow>
            <h1 className="text-4xl leading-[1.1] sm:text-6xl">A stronger foundation for the way you grow.</h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">Websites and monthly care for Southwest Florida service businesses. You work with one person who builds your site and stays to help it grow.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton />
              <Link to="/how-we-work" className="inline-flex items-center justify-center rounded-full border border-forest px-6 py-3 text-sm font-semibold hover:bg-sage-pale">How we work</Link>
            </div>
          </div>
          <div className="mx-auto aspect-square w-full max-w-sm md:max-w-md"><RootsArt /></div>
        </div>
      </section>

      <Section className="bg-card">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">A growth partner, not a website agency</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A website is only the start. Your business also needs to be found, kept current and given room to grow. We build a strong presence online, then stay alongside you with steady, personal care. No templates, and no one who disappears after launch.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Eyebrow>What's included</Eyebrow>
        <h2 className="mb-10 text-3xl sm:text-4xl">Everything your business needs to take root</h2>
        <ServiceCards />
      </Section>

      <section className="bg-forest px-5 py-20 text-center text-cream sm:px-8">
        <Reveal><p className="mx-auto max-w-3xl font-serif text-3xl leading-snug sm:text-5xl">Establish the presence. <span className="text-gold">Stay for the growth.</span></p></Reveal>
      </section>

      <PricingSection compact />
      <CtaBand title="Ready to put down roots?" body="Tell me about your business and where you'd like to grow. We'll talk it through, plainly and with no pressure." />
    </>
  );
}
