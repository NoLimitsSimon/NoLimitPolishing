# Round 1 of 3 — cold audit (2026-10-26)

Context: business sold to Connor Morgan; now based in Sealy, TX (Austin County), phone (830) 992-8932.
GBP (verified, service-area, address hidden) now lists Sealy + Katy, Brookshire, Bellville, Columbus,
Fulshear, Hempstead, Waller, Wallis, San Felipe, Rosenberg, Houston. Site still says College Station & Houston
with Simon's number everywhere. Baseline Lighthouse (mobile, local prod build): home P74/A90/BP96/SEO100,
LCP 4.0s, 16.4 MB page weight. Reports in loop-audit/lighthouse/before-*.json.

## CRITICAL
1. **NAP is wrong on every page** — phone (832) 466-3104 (Simon's, he keeps it) hard-coded 25+ times across
   layout schema, home, services, about, faq, contact, footer, chat widget. Location says College Station &
   Houston; GBP says Sealy. Name/area/phone mismatch with GBP is the #1 local-ranking killer. → single
   `siteConfig` source of truth, every page reads from it.
2. **About page presents Simon as owner** (photo + "Owner & Founder" + "2 Locations"). Factually wrong after sale.
3. **Lead form silently drops leads.** `/api/contact` returns `{ok:true}` when RESEND_API_KEY is missing, and the
   client sets `submitted=true` even when fetch throws or returns 500. Customer sees "Request Sent!" and nobody
   gets the lead. Same failure mode that cost Rangefinder leads.
4. **HTML injection in lead email** — form values interpolated raw into the email HTML.
5. **`/api/chat` is an unauthenticated open proxy to the Anthropic API** (no rate limit, no message cap,
   accepts arbitrary `messages`). Nothing on the site calls it (ChatWidget is a static FAQ). Pure cost/abuse risk.
6. **16 MB home page.** `images: { unoptimized: true }` ships 4–6 MB iPhone originals (up to 5712×4284) into
   ~300 px slots. Image delivery savings 16,022 KiB. LCP 4.0 s mobile.

## HIGH
7. **No service pages.** 8 services live as accordion rows on one /services URL — one page cannot rank for
   "curb rash repair", "acid wash wheels", "wheel ceramic coating", etc. (Rangefinder concept: one URL per service.)
8. **No service-area pages.** Zero pages for Sealy or any GBP town. Nothing on the site says Sealy at all.
9. **No informational content** (guides). Rangefinder's guides are its only pages earning AI-overview citations.
10. **LocalBusiness schema wrong**: College Station/Houston addresses, Simon's phone, areaServed = old cities,
    no geo, no openingHours, no logo, `@id` collides with page URL, sameAs missing Facebook + GBP.
11. Schema/script escaping: raw `JSON.stringify` into `<script>` (no `<` escape).
12. **No BreadcrumbList, no Service schema**, FAQPage only on /faq.
13. **Color contrast fails AA site-wide**: brand blue #1e90ff text on white = 3.24:1 (eyebrows, links,
    prices); white on #1e90ff buttons = 3.24:1 (every primary CTA); white/40 text in footer.
14. Hours: GBP says Mon–Sat 8–6, site states none.
15. `keywords` meta tag stuffed with College Station/Houston terms (ignored by Google, flagged by Bing).
16. Page metadata: /reviews has no canonical; OG/Twitter cards are layout-generic on every page (every page
    shares "College Station & Houston" OG text and Simon-era image).

## MEDIUM
17. Accessibility: no skip link; `<main>` has no id; hamburger has no aria-expanded/aria-controls; Escape does not
    close menu; carousel dot buttons have no accessible name (Lighthouse button-name fail); selects lack
    associated labels (labels not tied with htmlFor/id — select-name fail); "Before"/"After" and "Polished
    wheel"/"Work photo 1" alt text is meaningless; auto-advancing carousels (reviews 4 s, before/after 5 s)
    with no pause control (WCAG 2.2.2); zero `prefers-reduced-motion` handling for glitch/particles/ticker/
    pulse/spin animations; emoji used as icons read aloud by screen readers; chat panel close button unlabeled.
18. Footer: no service or area links (internal linking silo absent); "Text us anytime" sms link to old number.
19. Duplicate image: a3.jpg and gallery2.jpg are the same file; gallery4.jpg/gallery6.jpg are 0-byte files.
20. 160 MB of unused .mov files in public/videos (hero/work/baseball-bat) — videos are served from Cloudinary;
    these get uploaded on every CLI deploy. Starter SVGs (next/vercel/globe/file/window) unused.
21. Fonts: next/font/google Geist fails offline builds; self-host via `geist` package.
22. Heading outline: home H1 "No Limit Polishing" (brand only, no keyword); services H1 just "Services";
    service rows use h2/h3 inconsistently.
23. No analytics of any kind (no Vercel Analytics / Speed Insights).
24. Contact page title "Get a Free Quote — Wheel Polishing College Station & Houston TX" — wrong market.
25. Review link (g.page) present; but no AggregateRating — **correct to omit** (self-serving reviews are
    ineligible for stars); keep reviews as plain content.

## LOW
26. `tracking-widets` typo in contact labels (class does nothing).
27. Reveal animations hide content until JS runs (opacity 0 + paused animation).
28. Hero social row duplicates footer; chat bubble overlaps nothing but has label "FAQ" only.
29. Sitemap uses `new Date()` for lastModified on every build (meaningless freshness signal).
30. No 404 page, no /accessibility statement.

## Added after checking production (Vercel MCP)
31. **CRITICAL — the Vercel project has ZERO environment variables.** RESEND_API_KEY was never set, so per #3
    every quote request since launch (Jun 16 2026) hit the "pretend success" branch. No lead from the form has
    ever been delivered.
32. **CRITICAL — canonical host mismatch.** Vercel serves `nolimitpolishing.com` (apex); `www` is not attached to
    the project. Yet metadataBase, canonicals, sitemap, robots and schema all point at
    `https://www.nolimitpolishing.com`. Every canonical points at a host the project does not serve.
