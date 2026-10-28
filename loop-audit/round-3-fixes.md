# Round 3 — fixes applied
1. Alt text corrected in lib/data/photos.ts.
2. Sealy logistics copy reworded in lib/data/areas.ts.

## Final confirm (r3-*.json, Lighthouse mobile, local production build)
| Page | Perf | A11y | BP | SEO | LCP (sim) |
|---|---|---|---|---|---|
| / | 90 | 100 | 96 | 100 | 3.4 s |
| /services | 99 | 100 | 96 | 100 | 2.0 s |
| /services/acid-wash | 90 | 100 | 96 | 100 | 3.1 s |
| /services/full-sand-and-polish | 92 | 100 | 96 | 100 | 3.0 s |
| /services/powder-coat-removal | 94 | 100 | 96 | 100 | 2.7 s |
| /areas | 99 | 100 | 96 | 100 | 2.0 s |
| /areas/sealy-tx | 92 | 100 | 96 | 100 | 3.0 s |
| /areas/houston-tx | 97 | 100 | 96 | 100 | 2.3 s |
| /guides | 93 | 100 | 96 | 100 | 3.0 s |
| /guides/can-you-polish-coated-wheels | 94 | 100 | 96 | 100 | 3.0 s |
| /contact | 98 | 100 | 96 | 100 | 2.5 s |
| /reviews | 94 | 100 | 96 | 100 | 2.7 s |
| /about | 97 | 100 | 96 | 100 | 2.5 s |
| /faq | 99 | 100 | 96 | 100 | 2.0 s |
| /accessibility | 99 | 100 | 96 | 100 | 2.0 s |

Best Practices 96 everywhere = console 404s for `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`,
which only exist on Vercel; expect 100 in production.
