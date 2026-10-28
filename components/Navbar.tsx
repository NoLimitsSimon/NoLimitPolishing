"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/guides", label: "Guides" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ phoneDisplay, phoneHref }: { phoneDisplay: string; phoneHref: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and on Escape (WCAG 2.1.2 / 3.2.x).
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-black/95 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="No Limit Polishing — home">
          <span className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#1e90ff]/60">
            <Image src="/img/logo-512.jpg" alt="" width={48} height={48} className="h-full w-full scale-125 object-cover" loading="eager" />
          </span>
          <span className="hidden leading-tight sm:block" aria-hidden="true">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#4da8ff]">No Limit</span>
            <span className="block text-sm font-bold uppercase tracking-widest text-white">Polishing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#4da8ff] ${
                isActive(l.href) ? "text-[#4da8ff]" : "text-white/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href={phoneHref} className="text-sm font-bold tracking-wide text-white hover:text-[#4da8ff]">
            {phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Get a Quote
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="flex flex-col gap-1.5 p-3 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/10 bg-black/95 px-4 py-6 lg:hidden">
        <ul className="flex flex-col gap-1">
          {[{ href: "/", label: "Home" }, ...links].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className="block py-2 text-lg font-medium uppercase tracking-wide text-white/90 hover:text-[#4da8ff]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-4 w-full">Get a Quote</Link>
      </div>
    </header>
  );
}
