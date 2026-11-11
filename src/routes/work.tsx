// Draft copy (Nov 11, 2026), pending approval.
import { pageMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/site";
import { asset, portfolio } from "@/config/site";

export const Route = createFileRoute("/work")({
  head: () => pageMeta(
    "Our Work | Rooted Growth Digital",
    "Websites from Rooted Growth Digital for a leather goods maker, a food brand, a baby gear rental, youth athletics, ingredient sourcing and a consulting practice.",
    "/work",
  ),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHero eyebrow="Work" title="Selected work">
        <p className="text-lg text-muted-foreground">A few of the sites we've built for small businesses, from made-to-order goods to local services. Each one is live, so take a look.</p>
      </PageHero>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {portfolio.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_8px_30px_-18px] shadow-forest/30">
              <img src={asset(p.image)} alt={`${p.name} website`} width={1200} height={750} loading="lazy" className="aspect-[16/10] w-full bg-sage-light object-cover object-top" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{p.type}</p>
                <h2 className="mt-2 text-2xl">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                {p.fact && <p className="mt-3 text-sm font-medium">{p.fact}</p>}
                <div className="mt-auto pt-5">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-gold underline-offset-4">
                      Visit the site <ArrowUpRight className="h-4 w-4" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">Link coming soon</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">More work is on the way.</p>
      </Section>
      <CtaBand title="Could your business be next?" body="Want to see what this could look like for your business? Let's talk." />
    </>
  );
}
