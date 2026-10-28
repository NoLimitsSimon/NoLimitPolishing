# Round 2 of 3 — cold re-audit (tools re-run from scratch, every page re-opened)

Tools: custom crawler (all sitemap URLs + every internal link; titles, descriptions, canonicals, H1s, heading
order, alt, JSON-LD parse/shape, orphans, 5-gram near-duplicate Jaccard), html-validate, Lighthouse mobile on 8 URLs,
manual read of every page's copy.

## HIGH
1. **Keyword cannibalization: home and /areas/sealy-tx had the identical title** ("Aluminum Wheel Polishing in
   Sealy, TX | No Limit Polishing") and the same H1 target. Two URLs fighting for one query.
2. **Fabricated-sounding customer claims in area copy** — "Most Katy customers plan the drive…", "Ceramic coating is
   popular here", "Most-booked from {city}", "What we see from {city}". The shop just changed hands; there's no
   customer data behind those statements. Honesty + E-E-A-T risk.
3. Titles over 60 chars once the "| No Limit Polishing" template was appended: /services (73), /areas (66), two
   guides (67, 73), /about (75). Google truncates them.
4. Meta descriptions over 160: home 167, /services 173, /areas 171, /about 166.

## MEDIUM
5. /about is an orphan from page content (only reachable from nav/footer).
6. `<style>` inside `<body>` (the noscript reveal fallback) — invalid HTML on every page.
7. Unlabelled `<aside>` on area pages ("At a glance") → duplicate unnamed complementary landmark next to the floating
   tools aside (html-validate unique-landmark).
8. Inputs without `type` (name, wheel info).
9. Phone numbers can wrap mid-number on narrow screens.
10. On phones there were THREE floating controls (call bar, accessibility, chat) and the chat bubble covered form
    fields and body text mid-page.
11. Area pages had no imagery at all — walls of text on a business that sells a visual result.
12. Next 16 deprecated `priority` on next/image; the LCP images weren't getting `fetchpriority=high`
    (Lighthouse lcp-discovery). Guide LCP 3.8 s.
13. No security headers (nosniff, referrer-policy, frame-options, permissions-policy).

## LOW
14. Non-standard `host` in robots.txt.
