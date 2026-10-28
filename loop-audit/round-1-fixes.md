# Round 1 — fixes applied

| # | Finding | Fix |
|---|---|---|
| 1 | NAP wrong everywhere | `lib/data/site.ts` is the single source (Sealy TX 77474, (830) 992-8932, Mon–Sat 8–6, Connor Morgan). Zero hard-coded phones/cities remain (crawl-verified). |
| 2 | About page showed Simon as owner | Rewritten: founded by Simon Duffy, owned by Connor Morgan since 2026, moved to Sealy. Simon's photo removed. |
| 3, 31 | Form faked success / no env vars → every lead lost | `/api/contact` returns 503/502 when it can't deliver; LeadForm only shows success on 2xx and otherwise tells the customer to call/text. Supports RESEND_API_KEY or WEB3FORMS_KEY; recipient LEAD_TO_EMAIL. Undelivered leads are also logged to Vercel runtime logs so they're recoverable. |
| 4 | HTML injection in lead email | All fields escaped, length-capped; honeypot field; phone validated. |
| 5 | `/api/chat` open Anthropic proxy | Route deleted, `@anthropic-ai/sdk` and unused `resend` removed. |
| 6 | 16 MB home page | 15 photos re-encoded ≤1600 px, EXIF stripped, descriptive filenames in `/public/img`; `images.unoptimized` removed (AVIF/WebP via next/image); videos load only after page load + idle + in view. Home 16,359 KB → ~516 KB. |
| 7 | No service pages | 8 service pages `/services/[slug]` (intro, included, fit/not-fit, process, pricing note, FAQ, related, quote form), 440–870 words each. |
| 8 | No area pages | 8 area pages `/areas/[slug]` + hub; the other 4 GBP towns folded in. No service×city doorway pages (Rangefinder lesson). |
| 9 | No guides | 3 guides `/guides/[slug]` with Article + FAQPage schema. |
| 10–12 | Schema | AutoBodyShop LocalBusiness with Sealy address, geo, hours, 12 areaServed = GBP, offer catalog, founder/owner; Service schema per service/area; FAQPage; BreadcrumbList on every interior page; Article on guides; WebSite on home. `<` escaped in all JSON-LD. |
| 13 | Contrast | `--blue-ink #0a6ebd` (5.28:1) for text/buttons on light; `#4da8ff` for small blue text on black; white/40 → white/75. |
| 14 | Hours | Shown in footer, contact, area pages; in schema. |
| 15–16 | keywords tag / metadata | Removed keywords; `pageMeta()` gives every page unique title, description, canonical, OG + Twitter. |
| 17 | A11y | Skip link + focusable main; header nav with aria-expanded/controls + Escape; labelled form fields; descriptive alt text; carousels no longer auto-advance; pause buttons on both videos; full prefers-reduced-motion support; emoji icons removed; accessibility widget (text size, contrast, stop motion, underline links); /accessibility statement. |
| 18 | Footer | NAP + hours + every service + every area + company links. |
| 19–20 | Junk files | 0-byte and duplicate images unused; `.vercelignore` excludes 160 MB of .mov files and the original 57 MB images from deploys; starter SVGs deleted. |
| 21 | Fonts | Self-hosted Geist via `geist` package (build no longer needs Google Fonts). |
| 22 | Headings | Home H1 now includes "Aluminum Wheel Polishing in Sealy, TX"; every page one H1 with its keyword. |
| 23 | No analytics | @vercel/analytics + speed-insights mounted. |
| 27 | Reveal hides content w/o JS | `<noscript>` override + reduced-motion override. |
| 29 | Sitemap lastmod | Fixed content date instead of build time; all 28 URLs. |
| 30 | 404 + statement | `app/not-found.tsx`, `/accessibility`. |
| 32 | www canonical host | Everything on apex `https://nolimitpolishing.com`; www→apex redirect in next.config. |
| perf | Hero LCP | Removed infinite 280px text-shadow pulse and entrance animations on the LCP text. |

## Confirm (after fixes)
Lighthouse mobile, local prod build (r1*.json): every page Accessibility 100, SEO 100, BP 96 (the 4 = local-only
404s for /_vercel/insights scripts, which Vercel serves in production). Home perf 82 (from 74) at 516 KB (from 16 MB);
interior pages 92–99.
Crawler: 28 URLs, 0 broken links, 0 old phone numbers, 0 JSON-LD parse errors, highest page-to-page similarity 0.22.
