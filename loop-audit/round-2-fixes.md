# Round 2 — fixes applied

1. Sealy page re-targeted to the hyper-local query: title "Wheel Polishing in Sealy, San Felipe & Wallis, TX",
   H1 "Wheel Polishing for Sealy, San Felipe & Wallis". Home keeps "Aluminum Wheel Polishing in Sealy, TX".
2. Rewrote the claims as guidance, not statistics; headings now "What {city} trucks usually need" and
   "Services that fit {city} trucks".
3–4. All titles ≤60 (absolute titles where the template overflowed); all descriptions 110–160.
5. /about linked from the home "Why No Limit" copy and from /reviews.
6. Replaced the `<noscript><style>` with `@media (scripting: none)` in globals.css.
7. Area aside now `aria-labelledby` its heading.
8. `type="text"` added.
9. `white-space: nowrap` on tel:/sms: links.
10. Quick-answers widget is desktop-only; phones get the call/text bar + accessibility button.
11. Each area page gets its own work photo (8 different photos).
12. `priority` → `preload fetchPriority="high"` on each page's LCP image; navbar logo `loading="eager"`.
13. Security headers added in next.config.ts.
14. Removed `host`.

## Confirm
Crawler: 0 issues across 28 URLs. Lighthouse (r2b): home Perf 91 (LCP 3.2 s sim / 1.3 s observed), guide 91,
service 92; all A11y 100 / SEO 100.
