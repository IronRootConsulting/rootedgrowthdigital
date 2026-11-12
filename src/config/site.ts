/**
 * Launch values for the Rooted Growth Digital site.
 * Everything that changes at launch lives here, so components never need editing.
 * Empty strings / null mean "not set yet"; the UI hides or falls back accordingly.
 */

export const site = {
  name: "Rooted Growth Digital",
  /** Canonical origin used for sitemap, og:url and og:image. No trailing slash. */
  origin: "https://rootedgrowthdigital.com",

  /** Draft mode keeps the gold banner and noindex,nofollow. Set false only after publish approval. */
  draft: false,

  /**
   * Booking page URL (opens in a new tab). Empty = Book buttons link to /contact#book.
   * PENDING Andrew's confirmation for RGD: this is his existing intro-call page
   * (currently titled "IronRoot Consulting - 15-Minute Intro Call").
   */
  bookingUrl: "https://calendar.app.google/rnamZXdXAbJXoZ3T8",

  /**
   * Contact email. This is a Google Workspace alias/secondary-domain address
   * on Andrew's existing Workspace (mailbox name confirmed; DNS not applied yet).
   * The contact form opens mailto: to this address when the value has no "[" token.
   */
  contactEmail: "hello@rootedgrowthdigital.com",

  /** Optional phone. Empty = hidden everywhere. Placeholder token shown until supplied. */
  contactPhone: "(239) 341-4766",

  /** Google Analytics 4 measurement ID (G-XXXXXXX). Empty = no analytics script is rendered. */
  ga4Id: "",

  /** Google Search Console HTML-tag token. Empty = no verification meta is rendered. */
  searchConsoleToken: "",

  /** Footer attribution line. */
  parentCompanyNote: "A service of IronRoot Consulting LLC.",
  copyright: "© 2026 IronRoot Consulting LLC",
} as const;

export type Plan = {
  name: string;
  /** Price text exactly as approved, e.g. "$1,797" or "$99/mo". */
  price: string;
  /** Optional line under the price, e.g. "with 12 months of any monthly plan". */
  priceNote?: string;
  bestFor: string;
  includes: string[];
  /** Optional small print under the includes list. */
  finePrint?: string;
  badge?: string;
  featured?: boolean;
};

export type PlanGroup = { heading: string; terms: string; plans: Plan[] };

/** Approved pricing (Andrew, Nov 11, 2026, 1:30 PM ET). Copy from Ignatius, verbatim. */
export const pricingGroups: PlanGroup[] = [
  {
    heading: "Website builds",
    terms: "Paid builds: 50% deposit to start, 50% at launch.",
    plans: [
      {
        name: "One-Page Site",
        price: "$0 build",
        priceNote: "with 12 months of any monthly plan",
        bestFor: "One-person and simple businesses that need one clear, professional page.",
        includes: [
          "A single-page site, built for you",
          "No upfront build cost",
          "Pairs with any monthly plan for 12 months",
        ],
        finePrint: "A $297 fee applies if your plan is cancelled in the first 12 months.",
      },
      {
        name: "Foundation Site",
        price: "$1,797",
        bestFor: "Room to tell your full story and help local customers find you.",
        includes: [
          "Up to 6 pages",
          "Google Business Profile, Maps and on-page SEO",
          "A recorded 30-minute training call",
        ],
        badge: "Most complete start",
        featured: true,
      },
      {
        name: "Growth/Commerce Site",
        price: "from $3,497",
        bestFor: "Larger sites, or businesses that sell or book online.",
        includes: [
          "Online store, booking or payments",
          "Quoted after a discovery call",
        ],
      },
    ],
  },
  {
    heading: "Monthly plans",
    terms: "Month-to-month. No setup fee. One-Page Sites carry a 12-month minimum.",
    plans: [
      {
        name: "Hosting Only",
        price: "$49/mo",
        bestFor: "Owners who make their own updates and just need a reliable home for their site.",
        includes: [
          "Hosting",
          "SSL security certificate",
          "Uptime monitoring",
          "Edits billed separately",
          "For sites we build",
        ],
      },
      {
        name: "Essential Care",
        price: "$99/mo",
        bestFor: "Keeping your site current and working.",
        includes: [
          "Hosting and SSL security",
          "Uptime monitoring",
          "30 minutes of edits a month",
        ],
      },
      {
        name: "Growth Care",
        price: "$199/mo",
        bestFor: "Owners who want ongoing help getting found and growing.",
        includes: [
          "Everything in Essential Care",
          "2 hours of edits a month",
          "Light SEO",
          "A monthly check-in",
        ],
      },
    ],
  },
];

export type PortfolioItem = {
  slug: string;
  name: string;
  type: string;
  body: string;
  /** One-line fact (from the portfolio facts file). Empty = hidden. */
  fact: string;
  /** Live site URL. Empty = "Link coming soon". */
  url: string;
  /** Image path under public/ (served relative to the site base). */
  image: string;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "wild-things",
    name: "Wild Things Leather",
    type: "Made-to-order leather goods",
    body: "A shop site for branded leather goods: a full collection, live logo and monogram previews, online ordering and custom quote requests.",
    fact: "Custom leather shop with a live personalization preview and Stripe checkout.",
    url: "https://wildthingsleather.com",
    image: "work/wild-things.webp",
  },
  {
    slug: "stevies",
    name: "Stevie's Italian Foods",
    type: "Wholesale Italian ingredients",
    body: "A wholesale supplier site with a four-category product catalog, pages for each type of buyer, and quote and contact requests.",
    fact: "Brand site for Stevie's Italian Foods, with a four-category wholesale catalog of oils, cheeses, tomatoes and pastas, plus a quote-request form.",
    url: "https://steviesitalian.com",
    image: "work/stevies.webp",
  },
  {
    slug: "her-mantle",
    name: "Her Mantle Baby Co.",
    type: "Baby gear rentals, Ave Maria",
    body: "A local rental site with a gear catalog, online reservations with delivery and pickup, a reservation lookup and a partner page.",
    fact: "Ave Maria baby-gear rental site with date-based booking, delivery and pickup, and online checkout.",
    url: "https://hermantlebabyco.com",
    image: "work/her-mantle.webp",
  },
  {
    slug: "athletics",
    name: "IronRoot Athletics",
    type: "Faith-based youth sports, Ave Maria",
    body: "A youth sports site for Ave Maria families: program pages with live capacity, online registration and waitlists, a parent login and a coaches page.",
    fact: "Faith-based youth sports site for Ave Maria families, with program registration, live capacity, a parent login and a coaches page.",
    url: "https://ironrootathletic.com",
    image: "work/athletics.webp",
  },
  {
    slug: "ingredients",
    name: "IronRoot Ingredients",
    type: "B2B food-ingredient sourcing",
    body: "A B2B sourcing site for an independent manufacturer representative, with specification-grade catalogs for oils, fats, cheeses, tomatoes and pastas, plus a quote-request form.",
    fact: "B2B sourcing site for an independent manufacturer representative, with specification-grade catalogs for oils, fats, cheeses, tomatoes and pastas, plus a quote-request form.",
    url: "https://ironrootingredients.com",
    image: "work/ingredients.webp",
  },
  {
    slug: "ironroot",
    name: "IronRoot Consulting",
    type: "Operations consulting",
    body: "A one-page consulting site laying out who it serves, how the work runs, two fixed-fee ways to start, FAQs and a 15-minute call booking.",
    fact: "Operations-advisory site with two fixed-fee offers and a 15-minute call booked through Google Calendar.",
    url: "https://ironrootstrategy.com",
    image: "work/ironroot.webp",
  },
];

/** True when a value is still a [BRACKET] placeholder token. */
export function isToken(value: string): boolean {
  return value.includes("[");
}

/** Prefixes a public asset path with the configured base (works for "/" and "/repo/"). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
