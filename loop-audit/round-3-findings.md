# Round 3 of 3 — cold re-audit + interaction testing

New tooling this round: axe-core (WCAG 2.0/2.1 A+AA + best-practice) on all 29 URLs at 320 px, horizontal-overflow
check at 320 px and 1280 px, scripted keyboard pass (skip link, 25 tab stops, focus visibility), mobile-menu
Escape/focus-return test, quote-form failure-path test, prefers-reduced-motion test, Lighthouse on 15 URLs,
crawler + near-duplicate check again, and a fresh read of every page's copy and imagery.

## Findings
1. MEDIUM — Alt text on `polished-wheel-lip-closeup.jpg` described a lip close-up; the photo is actually a full
   polished dually face. Wrong alt is an accessibility *and* image-SEO defect (it's the curb-rash page hero).
2. LOW — Sealy logistics line claimed Sealy-area customers get "the shortest turnaround" — a promise with nothing
   behind it. Reworded to the plain fact (a few minutes' drive).

## Clean (verified, not assumed)
- axe-core: 0 violations on 29 URLs. No horizontal overflow at 320 px or 1280 px.
- Keyboard: first Tab = skip link, Enter moves focus to <main>; 25 consecutive tab stops all visible with an outline.
- Mobile menu: aria-expanded toggles, Escape closes and returns focus to the button.
- Quote form with no email provider configured: shows the error + phone fallback, never a false "Request sent".
- Reduced motion: ticker/particles/reveals stop, videos don't autoplay.
- Crawler: 28 URLs, 0 issues; max page-pair similarity 0.23 (5-gram Jaccard, including shared header/footer).
- /does-not-exist returns a real 404 with the branded page.
