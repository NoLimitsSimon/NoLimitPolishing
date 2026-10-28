# No Limit Polishing — Loop Final Report (2026-10-26)

## 1. Executive summary
**Before:** a good-looking one-page-per-topic site with these problems:
- It still described a College Station / Houston business with Simon's phone number. The business is now Connor Morgan's, in Sealy.
- It weighed 16 MB on mobile.
- It failed WCAG color contrast on every button.
- Its quote form had silently thrown away every lead since launch. The Vercel project has never had an email key, and the API faked success.
- It had no pages a search engine could rank for any individual service or town.

**After:** a 28-URL site rebuilt on the same structure Rangefinder uses, keeping No Limit's own look (black, chrome-blue, heavy uppercase type, glitch hero).
- One data layer feeds 8 service pages, 8 town pages, 3 guides and full structured data.
- The name, address and phone match the Google Business Profile exactly.
- About 520 KB home page.
- Accessibility 100 and SEO 100 on every page tested.
- Zero axe violations.
- The form fails loudly instead of losing leads.

## 2. What was done
Full detail in `round-{1,2,3}-findings.md` / `-fixes.md`.

**Technical**
- Apex canonical host (www was never attached to Vercel).
- Sitemap generated from the data, robots, 404 page.
- Security headers.
- Self-hosted font.
- Images re-encoded with EXIF stripped and optimized through next/image.
- Videos load only after the page loads and are on screen.
- Removed the open `/api/chat` Anthropic proxy.
- HTML-escaped the lead email.

**On-page**
- Keyword map: one primary per URL (see header of `lib/data/services.ts`).
- Unique titles ≤60 characters and descriptions 110–160 characters.
- One keyword H1 per page and a correct heading outline.
- Descriptive alt text.
- Fixed the home ↔ Sealy-page cannibalization.

**Local**
- Single NAP source (`lib/data/site.ts`).
- AutoBodyShop schema with geo, hours and the 12 GBP service areas.
- Service, FAQPage, BreadcrumbList, Article and WebSite schema.
- 8 genuinely different town pages (largest page-to-page overlap 0.23).
- No doorway service×city pages.

**Accessibility**
- AA contrast tokens.
- Skip link.
- Keyboard-complete navigation.
- Labelled form fields with announced errors.
- No auto-advancing carousels.
- Pause controls on videos.
- Full reduced-motion support.
- Accessibility widget and statement page.

**Design**
- Same brand language, now applied consistently:
  - Shared button system.
  - Black interior page headers that echo the hero.
  - Service cards.
  - Before/after viewer with real captions.
  - "Why No Limit" section.
  - Town grid.
  - Guide cards.
  - Mobile call / text-a-photo bar.

## 3. Scores (honest, 0–100)
| Area | Before | After | Why |
|---|---|---|---|
| Technical SEO | 45 | 92 | Indexable, fast, valid schema; can't score higher until it's deployed and Search Console confirms indexing |
| On-page SEO | 40 | 90 | Keyword map, unique metadata, real content per intent |
| Local SEO (on-site) | 15 | 88 | NAP = GBP, area pages, schema; off-site signals are still missing |
| Content | 35 | 82 | 8 services + 8 towns + 3 guides; still no project case studies or real Sealy-era photos |
| **Overall SEO readiness** | **35** | **88** | |
| Accessibility (WCAG 2.1 AA) | 62 | 96 | axe 0, LH 100, keyboard verified; not tested with a real screen-reader user |
| Design / UX | 70 | 86 | Kept the identity, fixed contrast, consistency, mobile CTAs; needs fresh photos |
| Lighthouse mobile performance (home) | 74 (16 MB) | 90 (0.5 MB) | Simulated LCP 3.4 s / observed 1.3 s |

## 4. What still needs doing (prioritized)
1. **Deploy.** Run `npm install`, then `npm run build`, then `npx vercel --prod --scope simon-duffy-s-projects` from `~/nolimitpolishing`.
2. **Turn on lead delivery. Until this is done, the form shows customers an error and points them to call or text.** Easiest option:
   - Go to web3forms.com and create a free key with Connor's email.
   - In Vercel, add `WEB3FORMS_KEY` under project → Settings → Environment Variables.
   - Redeploy.
   - Submit a test lead.
   - Alternative: set `RESEND_API_KEY` and `RESEND_FROM` on a verified domain.
   - Set `LEAD_TO_EMAIL` if it shouldn't go to nolimitpolishing@gmail.com.
3. **Search Console.**
   - Add the `nolimitpolishing.com` (apex) property.
   - Submit `/sitemap.xml`.
   - Request indexing on `/`, `/areas/sealy-tx`, `/services/full-sand-and-polish` and `/services/acid-wash`.
4. **Vercel Analytics.** In the dashboard, open project → Analytics → Enable. The code is already in place.
5. **Check the Cloudinary hero video** once it's live. It now requests `f_auto,q_auto`. If it fails, the poster still shows.
6. **Confirm with Connor:**
   - Drop-off vs. mobile model.
   - Whether he does semi/trailer/bed-rail work. The GBP description mentions bed rails and side boxes; the site doesn't.
   - Which email leads should go to.
7. **Off-site work (most of the remaining ranking upside):**
   - Get new Google reviews under Connor. Use the review link on /reviews.
   - Update MapQuest, Yahoo Local, Facebook and Instagram bios, which still say Bryan / College Station and (832) 466-3104.
   - Add Bing Places and Apple Business Connect listings.
   - Get Sealy-area citations: Sealy Chamber of Commerce, Austin County directories.
8. **Content:**
   - Add job write-ups once Connor has Sealy jobs: before/after with truck and town. These were the Rangefinder "projects" pages.
   - A 4th guide: "How much does wheel polishing cost?" (price ranges, if Connor is willing to publish them).

## 5. Design & imagery — assets needed
- A photo of Connor at work, for /about. This is the biggest trust gap right now, since the About page has no face.
- 6–10 fresh Sealy-era before/after pairs. Shoot each the same way: same angle, daylight, whole wheel in frame.
- One landscape (16:9) hero video or photo. The current hero is a portrait phone clip cropped to landscape.
- Optional: a clean vector logo (SVG). The current logo is a 1024 px AI-style raster.

## 6. Hand-off and realistic timeline
- **Week 0:** deploy, set the email key, Search Console sitemap.
- **Weeks 1–4:** Google recrawls and the new URLs start appearing.
  - Expect the Sealy and small-town pages to rank first, since there's little competition there.
- **Months 2–4:** Katy and Houston terms move only with reviews and citations. A site alone won't beat established Houston shops.
- No one can guarantee #1. This is the strongest on-page foundation the site can have. Reviews, citations and time do the rest.
