import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
// Stand-in raster of Option 2 horizontal lockup (selected Nov 6, 2026). Vector redraw required before real use.
import logo from "@/assets/rgd-logo-option2.png";
import { site } from "@/config/site";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/who-its-for", label: "Who it's for" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className = "h-10" }: { className?: string }) {
  return <img src={logo} alt="Rooted Growth Digital logo" className={`w-auto ${className}`} />;
}

export function DraftBanner() {
  if (!site.draft) return null;
  return (
    <div className="bg-gold px-4 py-1.5 text-center text-xs font-semibold tracking-wide text-forest-deep">
      Draft preview — placeholder copy, not final. Not for publishing.
    </div>
  );
}

// Booking link comes from src/config/site.ts; empty falls back to the contact page booking section.
export function BookButton({ variant = "primary", className = "" }: { variant?: "primary" | "light" | "outline"; className?: string }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-forest-deep",
    light: "bg-cream text-forest hover:bg-cream-warm",
    outline: "border border-forest text-forest hover:bg-sage-pale",
  }[variant];
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles} ${className}`;
  if (site.bookingUrl) {
    return (
      <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className={cls}>
        Book a call
      </a>
    );
  }
  return (
    <Link to="/contact" hash="book" className={cls}>
      Book a call
    </Link>
  );
}

export function Placeholder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <span className="mb-1.5 inline-block rounded-full bg-sage-pale px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Placeholder copy
      </span>
      <p className="italic leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setVisible(true);
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} data-visible={visible} className={`reveal ${className}`}>{children}</div>;
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string | undefined }) {
  return <section id={id} className={`px-5 py-16 sm:px-8 sm:py-24 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{children}</p>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-cream-warm px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage-light/60" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl">{children}</div>}
      </div>
    </section>
  );
}

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-sage-pale px-6 py-12 text-center sm:px-12">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">{body}</p>
        <BookButton className="mt-8" />
        <p className="mt-3 text-xs text-muted-foreground">A free 15-minute intro call over Google Meet.</p>
      </div>
    </section>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  const linkCls = "text-sm font-medium text-forest/80 hover:text-forest";
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" aria-label="Rooted Growth Digital home" onClick={() => setOpen(false)} className="shrink-0">
          <Logo className="h-9 sm:h-11" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "text-forest font-semibold" }} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
          <BookButton className="!px-5 !py-2.5" />
        </nav>
        <button
          type="button"
          className="rounded-full p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-cream px-5 py-6 lg:hidden animate-in fade-in slide-in-from-top-2">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-serif text-2xl hover:bg-sage-pale">{n.label}</Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setOpen(false)}><BookButton className="mt-6 w-full" /></div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-deep px-5 pb-10 pt-14 text-cream sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-2xl bg-cream p-3"><Logo className="h-10" /></div>
          <p className="mt-4 max-w-xs text-sm text-sage-light">Get noticed. Stay supported. Keep growing.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-cream/80 hover:text-cream">{n.label}</Link></li>)}
          </ul>
        </nav>
        <div className="space-y-2 text-sm text-cream/80">
          <p>
            <a href={`mailto:${site.contactEmail}`} className="whitespace-nowrap hover:text-cream">{site.contactEmail}</a>
            {" · "}
            <a href="tel:+12393414766" className="whitespace-nowrap hover:text-cream">{site.contactPhone}</a>
            {" · "}
            <span className="whitespace-nowrap">Southwest Florida</span>
          </p>
          <p>Rooted in Southwest Florida. Serving small businesses anywhere.</p>
          <p className="flex gap-4 pt-2">
            <Link to="/privacy" className="hover:text-cream">Privacy</Link>
            <Link to="/terms" className="hover:text-cream">Terms</Link>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl space-y-1 border-t border-cream/15 pt-6 text-xs text-cream/60">
        <p>{site.parentCompanyNote}</p>
        <p>{site.copyright}</p>
      </div>
    </footer>
  );
}
