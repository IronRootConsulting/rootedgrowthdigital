// Draft copy (Nov 11, 2026), pending approval.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { CtaBand, Eyebrow, PageHero, Reveal, Section } from "@/components/site";
import { PricingSection, ServiceCards } from "@/components/content";

export const Route = createFileRoute("/how-we-work")({
  head: () => pageMeta(
    "How We Work and Pricing | Rooted Growth Digital",
    "A simple, step-by-step way to build your website, get found and keep growing, with clear build and monthly care plans.",
    "/how-we-work",
  ),
  component: HowWeWork,
});

const STEPS = [
  { t: "Get to know your business", d: "We start with a 15-minute intro call over Google Meet about your story, your customers and your goals." },
  { t: "Build your foundation", d: "We build a professional website that reflects your business and reads well on a phone." },
  { t: "Help you get found", d: "We work on your visibility, so the people looking for what you offer can find you." },
  { t: "Stay and keep growing", d: "Monthly care keeps your site current, and regular check-ins keep you clear on what to do next." },
];
const FAQ = [
  { q: "How do we get started?", a: "Book a 15-minute intro call over Google Meet. We'll talk about your business and what would help most, then I'll suggest the plan that fits. [CONFIRM: is the intro call free?]" },
  { q: "Do I need an existing website?", a: "No. We can build from scratch. If you already have a site, we'll look at it together first. [CONFIRM: do you rebuild or improve existing sites?]" },
  { q: "Do you only work with Southwest Florida businesses?", a: "We're rooted in Southwest Florida, and local owners can meet in person. The intro call is over Google Meet, so businesses anywhere are welcome. [CONFIRM: how ongoing work runs for remote clients]" },
  { q: "What happens after launch?", a: "We stay. With a monthly care plan, your site stays current and you have someone to call when you want to change, fix or grow something. Care is [TERMS: month-to-month]." },
];

function HowWeWork() {
  return (
    <>
      <PageHero eyebrow="How we work" title="A steady, step-by-step way to grow">
        <p className="text-lg text-muted-foreground">We start with your business, build a strong foundation online, and stay alongside you as you grow. Establish the presence. Stay for the growth.</p>
      </PageHero>
      <Section>
        <ol className="relative space-y-8 border-l-2 border-sage-light pl-8 md:grid md:grid-cols-4 md:gap-6 md:space-y-0 md:border-l-0 md:pl-0">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} className="relative md:border-t-2 md:border-sage-light md:pt-8">
              <li className="list-none">
                <span className="absolute -left-[3.05rem] top-0 grid h-9 w-9 place-items-center rounded-full bg-forest font-serif text-cream md:-top-[1.15rem] md:left-0">{i + 1}</span>
                <h3 className="text-xl">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section className="bg-card">
        <Eyebrow>What's included</Eyebrow>
        <h2 className="mb-10 text-3xl sm:text-4xl">Included services</h2>
        <ServiceCards />
        <p className="mt-8 text-sm text-muted-foreground">[CONFIRM: which services come with every plan and which belong to specific plans]</p>
      </Section>
      <PricingSection />
      <Section className="bg-cream-warm">
        <h2 className="mb-8 text-3xl">Questions</h2>
        <div className="space-y-3">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl bg-card p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand title="Let's talk about your foundation" body="Tell me where your business is today and where you'd like it to go. We'll figure out the right first step together." />
    </>
  );
}
