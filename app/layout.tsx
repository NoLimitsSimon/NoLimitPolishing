import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "No Limit Polishing | Aluminum Wheel Polishing — College Station & Houston TX",
    template: "%s | No Limit Polishing",
  },
  description:
    "No Limit Polishing — professional aluminum wheel polishing in College Station & Houston, TX. Machine sand & polish, acid wash, ceramic coating, curb rash repair, powder coat removal. Mirror finish guaranteed. Get a free quote.",
  keywords: [
    "aluminum wheel polishing",
    "wheel polishing Houston TX",
    "wheel polishing College Station TX",
    "wheel polishing near me",
    "curb rash repair Houston",
    "curb rash repair College Station",
    "acid wash wheels Texas",
    "ceramic coating wheels",
    "forged wheel polish",
    "mirror finish wheels",
    "powder coat removal",
    "wheel restoration Texas",
    "polished wheels Houston",
    "wheel buffing near me",
    "rim polishing Texas",
  ],
  authors: [{ name: "No Limit Polishing" }],
  creator: "No Limit Polishing",
  metadataBase: new URL("https://www.nolimitpolishing.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "No Limit Polishing | Aluminum Wheel Polishing TX",
    description: "Professional aluminum wheel polishing in College Station & Houston, TX. Mirror finish guaranteed.",
    url: "https://www.nolimitpolishing.com",
    siteName: "No Limit Polishing",
    images: [
      {
        url: "/images/img5.jpg",
        width: 1200,
        height: 630,
        alt: "No Limit Polishing — Mirror finish aluminum wheels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Limit Polishing | Aluminum Wheel Polishing TX",
    description: "Professional aluminum wheel polishing in College Station & Houston, TX.",
    images: ["/images/img5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "iWN8aSB_3e63MjldmmHm94h4P8VuFk5_35XrkqlE7Mg",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.nolimitpolishing.com",
  name: "No Limit Polishing",
  description:
    "Professional aluminum wheel polishing in College Station & Houston, TX. Services include machine sand & polish, acid wash, ceramic coating, curb rash repair, and powder coat removal.",
  url: "https://www.nolimitpolishing.com",
  telephone: "+18324663104",
  image: "https://www.nolimitpolishing.com/images/img5.jpg",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Venmo, Zelle",
  areaServed: [
    { "@type": "City", name: "College Station", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bryan", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Houston", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Katy", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedIn: { "@type": "State", name: "Texas" } },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "College Station",
      addressRegion: "TX",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wheel Polishing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acid Wash & Polish" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Sand & Polish" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curb Rash Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lip Re-Engraving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Clear Coat Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Powder Coat & Anodizing Removal" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/no_limit_polishing/",
    "https://www.tiktok.com/@no_limit_polishing",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
