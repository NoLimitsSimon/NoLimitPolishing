import { siteConfig, telHref, smsHref } from "@/lib/data/site";

/** Thumb-reach call / text bar on phones — where nearly all of these leads come from. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-black lg:hidden">
      <a href={telHref} aria-label={`Call ${siteConfig.phoneDisplay}`} className="flex items-center justify-center gap-2 py-4 text-sm font-black uppercase tracking-widest text-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" /></svg>
        Call
      </a>
      <a href={smsHref} aria-label={`Text a photo to ${siteConfig.phoneDisplay}`} className="flex items-center justify-center gap-2 bg-[var(--blue-ink)] py-4 text-sm font-black uppercase tracking-widest text-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" /></svg>
        Text a photo
      </a>
    </div>
  );
}
