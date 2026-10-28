import Link from "next/link";
import { siteConfig, telHref, smsHref } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { Icon, IG_PATH, TT_PATH, FB_PATH } from "./SocialIcons";

export default function Footer() {
  const heading = "mb-5 text-xs font-bold uppercase tracking-widest text-white";
  const link = "text-sm text-white/75 transition-colors duration-200 hover:text-[#4da8ff] hover:underline underline-offset-4";
  return (
    <footer className="bg-[#0a0a0a] pb-28 pt-16 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 text-xl font-bold uppercase tracking-widest text-[#4da8ff]">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-white/75">
              Aluminum wheel polishing in {siteConfig.city}, TX — acid wash, full sand &amp; mirror polish, curb rash repair and ceramic coating.
            </p>
            <address className="mt-6 space-y-2 text-sm not-italic text-white/75">
              <p>{siteConfig.city}, {siteConfig.region} {siteConfig.postalCode} · by appointment</p>
              <p><a href={telHref} className={link}>{siteConfig.phoneDisplay}</a> · <a href={smsHref} className={link}>Text us</a></p>
            </address>
            <ul className="mt-4 space-y-1 text-sm text-white/75">
              {siteConfig.hours.map((h) => (
                <li key={h.days}>{h.days}: {h.hours}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { href: siteConfig.social.instagram, label: "Instagram", path: IG_PATH },
                { href: siteConfig.social.tiktok, label: "TikTok", path: TT_PATH },
                { href: siteConfig.social.facebook, label: "Facebook", path: FB_PATH },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-200 hover:border-[#4da8ff] hover:text-[#4da8ff]">
                  <Icon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <p className={heading}>Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className={link}>{s.name}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <p className={heading}>Service Areas</p>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.slug}><Link href={`/areas/${a.slug}`} className={link}>Wheel polishing in {a.city}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className={heading}>Company</p>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/reviews", label: "Reviews" },
                { href: "/guides", label: "Wheel care guides" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Get a quote" },
                { href: "/accessibility", label: "Accessibility" },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/65 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Serving Sealy, Katy, Brookshire, Bellville, Columbus &amp; West Houston</p>
        </div>
      </div>
    </footer>
  );
}
