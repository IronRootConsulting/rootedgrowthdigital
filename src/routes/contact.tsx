// Draft copy (Nov 11, 2026), pending approval.
import { pageMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { BookButton, PageHero, Section } from "@/components/site";
import { isToken, site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta(
    "Contact | Book a Call with Rooted Growth Digital",
    "Book a call or send a message to talk about your website, getting found online and monthly care for your Southwest Florida small business.",
    "/contact",
  ),
  component: Contact,
});

const FIELDS = [
  { id: "name", label: "Your name", type: "text", autoComplete: "name" },
  { id: "business", label: "Business name", type: "text", autoComplete: "organization" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone (optional)", type: "tel", autoComplete: "tel" },
];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  // Opens the visitor's email app with a prefilled message. No network request, no form service.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!site.contactEmail || isToken(site.contactEmail)) {
      setStatus("error");
      return;
    }
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const business = get("business");
    const subject = `Website inquiry${business ? ` from ${business}` : name ? ` from ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Business name: ${business}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      "",
      `What does your business do?`,
      get("business_does"),
      "",
      `How can I help?`,
      get("help"),
    ].join("\n");
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };
  const input = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold";
  const emailIsReal = site.contactEmail && !isToken(site.contactEmail);
  const phoneIsReal = site.contactPhone && !isToken(site.contactPhone);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation">
        <p className="text-lg text-muted-foreground">Tell me a little about what you do and where you'd like to grow. No pressure and no jargon, just a conversation about your business.</p>
      </PageHero>
      <Section id="book">
        <div className="rounded-3xl bg-forest px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="text-3xl sm:text-4xl">Book a free 15-minute intro call</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-sage-light">Pick a time for a quick call over Google Meet. We'll talk through where your business is and what would help most. Have your business name handy.</p>
          <BookButton variant="light" className="mt-8" />
          <p className="mt-3 text-xs text-sage-light">A free 15-minute intro call over Google Meet.</p>
          <p className="mt-2 text-xs text-sage-light">Prefer to write first? Send a message below.</p>
        </div>
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-card p-6 sm:p-8" noValidate>
            <h2 className="text-2xl">Send a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <label key={f.id} htmlFor={f.id} className="block text-sm font-medium">
                  {f.label}
                  <input id={f.id} name={f.id} type={f.type} autoComplete={f.autoComplete} className={input} />
                </label>
              ))}
            </div>
            <label htmlFor="business_does" className="block text-sm font-medium">
              What does your business do?
              <input id="business_does" name="business_does" type="text" className={input} />
            </label>
            <label htmlFor="help" className="block text-sm font-medium">
              How can I help?
              <textarea
                id="help"
                name="help"
                rows={5}
                className={input}
                placeholder="A new website, getting found online, help with your current site, or not sure yet. Any of it is a fine place to start."
              />
            </label>
            <p className="text-xs text-muted-foreground">
              By sending this form, you agree I may contact you about your request. See the{" "}
              <Link to="/privacy" className="underline">Privacy Policy</Link>.
            </p>
            <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep">Send message</button>
            {status === "sent" && <p role="status" className="rounded-xl bg-sage-pale px-4 py-3 text-sm font-semibold">Thanks, your message is in. I'll be in touch.</p>}
            {status === "error" && <p role="alert" className="rounded-xl bg-gold/15 px-4 py-3 text-sm font-semibold">Something went wrong and your message didn't send. Please try again.</p>}
          </form>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-light"><Mail className="h-4 w-4" aria-hidden /></span>
              {emailIsReal ? <a href={`mailto:${site.contactEmail}`} className="hover:underline">{site.contactEmail}</a> : site.contactEmail}
            </li>
            {site.contactPhone && (
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-light"><Phone className="h-4 w-4" aria-hidden /></span>
                {phoneIsReal ? <a href="tel:+12393414766" className="hover:underline">{site.contactPhone}</a> : site.contactPhone}
              </li>
            )}
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-light"><MapPin className="h-4 w-4" aria-hidden /></span>
              Southwest Florida · serving small businesses anywhere
            </li>
            <li className="pl-[3.25rem] text-muted-foreground">Serving Collier and Lee counties in person.</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
