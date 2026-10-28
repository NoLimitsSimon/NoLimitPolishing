import type { Metadata, Viewport } from "next";
// Self-hosted via the `geist` package: next/font/google needs network access at
// build time and fails the whole build when fonts.googleapis.com is unreachable.
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import MobileCallBar from "@/components/MobileCallBar";
import SkipLink from "@/components/SkipLink";
import JsonLd from "@/components/JsonLd";
import { siteConfig, businessId, defaultOgImage, telHref } from "@/lib/data/site";
import { services } from "@/lib/data/services";

const homeTitle = "Aluminum Wheel Polishing in Sealy, TX | No Limit Polishing";

export const viewport: Viewport = { themeColor: "#050505" };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: homeTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  // `keywords` removed: ignored by Google, a stuffing signal to Bing, and it
  // published a College Station / Houston keyword list on every page.
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: homeTitle,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: siteConfig.description, images: [defaultOgImage.url] },
  icons: {
    icon: [
      { url: "/img/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/img/apple-touch-icon.png", sizes: "180x180" },
  },
  verification: { google: "y4LW6XGXq0uqSxa1G62aDdr2d4GIZxqL2vjahrnh_AY" },
};

/**
 * Service-area business: no street address (the GBP hides it too), so only
 * locality/region/postal code plus `geo` for the Sealy origin. Inventing a
 * street address to silence a Rich Results warning would put a wrong address
 * in Google's index.
 */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  "@id": businessId,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}${defaultOgImage.url}`,
  logo: `${siteConfig.url}/img/logo-512.jpg`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng },
  areaServed: siteConfig.serviceAreas.map((c) => ({ "@type": "City", name: `${c}, TX` })),
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", ...siteConfig.hoursSchema }],
  founder: { "@type": "Person", name: siteConfig.founder },
  employee: { "@type": "Person", name: siteConfig.owner, jobTitle: "Owner" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aluminum wheel polishing services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${siteConfig.url}/services/${s.slug}` },
    })),
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.tiktok],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="flex min-h-screen flex-col bg-white text-black">
        <JsonLd data={localBusinessSchema} />
        <SkipLink />
        <Navbar phoneDisplay={siteConfig.phoneDisplay} phoneHref={telHref} />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <aside aria-label="Quick contact and accessibility tools">
          <MobileCallBar />
          <ChatWidget />
          <AccessibilityWidget />
        </aside>
        {/* Cookieless — no consent banner needed. Turn Web Analytics ON in the
            Vercel dashboard (project → Analytics → Enable) or this collects nothing. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
