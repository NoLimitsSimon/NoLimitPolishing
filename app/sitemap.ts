import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { guides } from "@/lib/data/guides";

// Fixed date of the last real content change. `new Date()` on every build told
// Google every page changed on every deploy, which teaches it to ignore lastmod.
const UPDATED = new Date("2026-10-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string, priority: number) => ({ url: `${siteConfig.url}${path}`, lastModified: UPDATED, priority });
  return [
    u("", 1),
    u("/services", 0.9),
    ...services.map((s) => u(`/services/${s.slug}`, 0.85)),
    u("/areas", 0.8),
    ...areas.map((a) => u(`/areas/${a.slug}`, a.tier === "home" ? 0.85 : 0.7)),
    u("/guides", 0.6),
    ...guides.map((g) => ({ ...u(`/guides/${g.slug}`, 0.6), lastModified: new Date(g.updated) })),
    u("/contact", 0.8),
    u("/reviews", 0.6),
    u("/about", 0.6),
    u("/faq", 0.6),
    u("/accessibility", 0.2),
  ];
}
