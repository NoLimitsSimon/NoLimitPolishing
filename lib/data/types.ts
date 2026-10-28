export type Photo = { src: string; alt: string; width: number; height: number };

export type Faq = { question: string; answer: string };

export type Step = { title: string; description: string };

export type Service = {
  slug: string;
  name: string;
  /** The one keyword this page owns. No two pages share a primary. */
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  /** One-line summary for cards and the services hub. */
  summary: string;
  image: Photo;
  intro: string[];
  whatsIncluded: string[];
  process: Step[];
  goodFit: string[];
  notFit?: string[];
  pricingNote: string;
  faqs: Faq[];
  related: string[];
  guide?: string;
};

export type AreaTier = "home" | "near" | "metro";

export type Area = {
  slug: string;
  city: string;
  county: string;
  tier: AreaTier;
  lat: number;
  lng: number;
  metaTitle: string;
  metaDescription: string;
  /** Route + drive from Sealy, stated plainly. */
  distance: string;
  intro: string[];
  /** What the trucks and wheels from this town tend to need. */
  whatWeSee: string;
  logistics: string;
  popularServices: string[];
  nearby: string[];
  faqs: Faq[];
  photo: Photo;
};

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  updated: string;
  image: Photo;
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs: Faq[];
  relatedServices: string[];
};
