# Rooted Growth Digital website

Static site built with React, TanStack Router/Start (prerendered), Tailwind CSS and Vite.
Every route is prerendered to `dist/<route>/index.html`.

## Commands

```sh
npm install          # install dependencies
npm run dev          # local dev server
npm run build        # static build into dist/ (base "/")
npm run build:preview  # build for a project-pages preview (base "/rootedgrowthdigital/")
npm run preview      # serve dist/ on http://localhost:4173
```

Custom base path: `BASE=/some-path/ npm run build`.

## Launch values

All launch values live in `src/config/site.ts`: booking link, contact email and phone,
GA4 ID, Search Console token, pricing plans and the portfolio list. Components read from there.

Brand assets (favicon, apple-touch-icon, OG image) are produced by
`python3 scripts/make-brand-assets.py` from `src/assets/rgd-logo-option2.png`.

## Before publishing (requires approval)

- [ ] Set `draft: false` in `src/config/site.ts` (removes the gold banner and the noindex,nofollow meta).
- [ ] Change `public/robots.txt` to allow crawling and add `Sitemap: https://rootedgrowthdigital.com/sitemap.xml`.
- [ ] Replace every `[PRICE: ...]`, `[TERMS: ...]`, `[CONFIRM: ...]` and `[PLACEHOLDER: ...]` token.
- [ ] Set `contactEmail`, `contactPhone`, and confirm `bookingUrl`.
- [ ] Add `ga4Id` and `searchConsoleToken` if wanted.
- [ ] Confirm portfolio cards and screenshots in `public/work/` are approved for display.
- [ ] Final Privacy and Terms text.
- [ ] `public/CNAME` holds `rootedgrowthdigital.com`; remove it for a github.io-only preview.
