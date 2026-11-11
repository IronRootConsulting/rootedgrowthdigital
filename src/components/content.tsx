// Draft pricing: values live in src/config/site.ts (pricingGroups). Tokens stay until figures are approved.
import { Link } from "@tanstack/react-router";
import { Check, Code2, Search, Gauge, Wrench, CalendarCheck, Handshake } from "lucide-react";
import { BookButton, Eyebrow, Reveal, Section } from "./site";
import { pricingGroups } from "@/config/site";

export const SERVICES = [
  { icon: Code2, title: "Website development", desc: "A professional site that tells your story and reads well on a phone, where most of your customers will see it first." },
  { icon: Search, title: "Digital visibility", desc: "Help showing up where your customers are looking, so the people who need what you offer can find you." },
  { icon: Gauge, title: "Website optimization", desc: "Ongoing improvements that keep your site clear, current and easy for customers to reach you through." },
  { icon: Wrench, title: "Monthly maintenance", desc: "Updates and upkeep each month, so your site keeps working and you don't have to think about it." },
  { icon: CalendarCheck, title: "Monthly check-ins", desc: "A regular conversation about what changed, what matters next and who is doing it." },
  { icon: Handshake, title: "In-person consultations", desc: "For local owners, a sit-down conversation about your business, your customers and your goals." },
];

export function ServiceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map(({ icon: Icon, title, desc }) => (
        <Reveal key={title} className="rounded-3xl bg-card p-7 shadow-[0_8px_30px_-18px] shadow-forest/30">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-sage-light text-forest"><Icon className="h-5 w-5" aria-hidden /></div>
          <h3 className="mt-5 text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function PricingSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section id={compact ? undefined : "pricing"} className={compact ? "bg-cream-warm" : ""}>
      <Eyebrow>Pricing</Eyebrow>
      <h2 className="text-3xl sm:text-4xl">Simple plans. Room to grow.</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">Every business is different, so we start with a conversation. These plans give you a clear place to start.</p>
      <p className="mt-5 inline-block rounded-xl border border-gold bg-gold/15 px-4 py-2 text-sm font-semibold text-forest">
        Proposed pricing. Final figures pending approval.
      </p>
      {pricingGroups.map((g) => (
        <div key={g.heading} className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
            <h3 className="text-2xl">{g.heading}</h3>
            <p className="text-sm text-muted-foreground">{g.terms}</p>
          </div>
          <div className={`mt-6 grid gap-6 ${g.plans.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {g.plans.map((t) => (
              <Reveal key={t.name} className={`flex flex-col rounded-3xl bg-card p-7 ${t.featured ? "ring-2 ring-sage" : "border border-border"}`}>
                {t.badge && <span className="self-start rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-forest-deep">{t.badge}</span>}
                <h4 className={`${t.badge ? "mt-5" : ""} font-serif text-2xl`}>{t.name}</h4>
                <p className="mt-4 font-serif text-3xl">{t.price}</p>
                {!compact && <p className="mt-4 text-sm text-muted-foreground">{t.bestFor}</p>}
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {t.includes.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden />{f}</li>
                  ))}
                </ul>
                <BookButton variant={t.featured ? "primary" : "outline"} className="mt-8 w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
      <p className="mt-10 text-sm text-muted-foreground">Not sure which fits? Book a call and we'll talk it through.</p>
      {compact && (
        <Link to="/how-we-work" hash="pricing" className="mt-4 inline-block text-sm font-semibold underline decoration-gold underline-offset-4">
          See full pricing details <span aria-hidden>→</span>
        </Link>
      )}
    </Section>
  );
}
