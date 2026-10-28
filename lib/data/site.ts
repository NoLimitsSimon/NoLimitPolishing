import type { Metadata } from "next";

/**
 * Single source of truth for name / address / phone (NAP), hours and links.
 *
 * Before 2026-10-26 the phone number was hard-coded in 25+ places and the site
 * still said "College Station & Houston" after the business was sold and moved
 * to Sealy. NAP that disagrees with the Google Business Profile is the most
 * common reason a local business fails to rank, so nothing on the site may
 * hard-code a phone, city or hour again — import from here.
 *
 * Must match the GBP exactly (verified, service-area business, address hidden):
 *   phone (830) 992-8932 · Sealy, TX 77474 · Mon–Sat 8 AM–6 PM, Sun closed.
 */
export const siteConfig = {
  name: "No Limit Polishing",
  // Vercel serves the APEX domain. `www` is not attached to the project, so
  // every canonical must use the apex or it points at a host we don't serve.
  url: "https://nolimitpolishing.com",
  owner: "Connor Morgan",
  founder: "Simon Duffy",
  phone: "+18309928932",
  phoneDisplay: "(830) 992-8932",
  // Leads also go here unless LEAD_TO_EMAIL is set in Vercel.
  email: "nolimitpolishing@gmail.com",
  city: "Sealy",
  region: "TX",
  postalCode: "77474",
  county: "Austin County",
  geo: { lat: 29.7808, lng: -96.1572 },
  description:
    "No Limit Polishing is an aluminum wheel polishing shop based in Sealy, TX — acid wash, full sand & mirror polish, curb rash repair, lip re-engraving and ceramic coating for trucks, duallies and forged wheels across Austin County, Katy and West Houston.",
  hours: [
    { days: "Monday – Saturday", hours: "8:00 AM – 6:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  hoursSchema: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  social: {
    facebook: "https://www.facebook.com/people/Nolimitpolishing/61564772250462/",
    instagram: "https://www.instagram.com/no_limit_polishing/",
    tiktok: "https://www.tiktok.com/@no_limit_polishing",
    instagramHandle: "@no_limit_polishing",
  },
  googleReviewUrl: "https://g.page/r/CRBiPRF78iFOECE/review",
  /**
   * The 12 service areas set on the Google Business Profile. Towns with their
   * own page live in lib/data/areas.ts; this list is what schema `areaServed`
   * and the lead-form dropdown use, so the site claims exactly what the GBP does.
   */
  serviceAreas: [
    "Sealy",
    "San Felipe",
    "Wallis",
    "Bellville",
    "Brookshire",
    "Katy",
    "Fulshear",
    "Columbus",
    "Hempstead",
    "Waller",
    "Rosenberg",
    "Houston",
  ],
} as const;

export const telHref = `tel:${siteConfig.phone}`;
export const smsHref = `sms:${siteConfig.phone}`;

/**
 * Next REPLACES `openGraph` rather than deep-merging it, so every page-level
 * `openGraph` spreads this and sets its own `twitter` via `twitterFor` so the
 * two cards can never disagree.
 */
export const baseOpenGraph = {
  type: "website",
  locale: "en_US",
  siteName: siteConfig.name,
} satisfies Metadata["openGraph"];

export const defaultOgImage = {
  url: "/img/forged-wheel-after-mirror-polish.jpg",
  width: 1348,
  height: 1600,
  alt: "Forged truck wheel after a full sand and mirror polish by No Limit Polishing",
};

export function twitterFor(opts: { title: string; description: string; image?: string }): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title: opts.title,
    description: opts.description,
    images: [opts.image ?? defaultOgImage.url],
  };
}

/** Build a full page Metadata object with canonical, OG and Twitter in one place. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: { src?: string; url?: string; alt: string };
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${opts.path === "/" ? "" : opts.path}`;
  const img = opts.image
    ? { url: opts.image.url ?? opts.image.src ?? defaultOgImage.url, alt: opts.image.alt }
    : defaultOgImage;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph,
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: img.url, alt: img.alt }],
    },
    twitter: twitterFor({ title: opts.title, description: opts.description, image: img.url }),
  };
}

export const businessId = `${siteConfig.url}/#business`;

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
