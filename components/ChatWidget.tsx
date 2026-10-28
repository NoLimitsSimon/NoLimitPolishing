"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig, telHref, smsHref } from "@/lib/data/site";

const faqs = [
  { q: "What services do you offer?", a: "Acid wash, full sand & mirror polish (outside, inside or both), inner barrel polishing, curb rash repair, lip re-engraving, ceramic coating, and clear coat / powder coat removal." },
  { q: "How much does it cost?", a: "Every job is quoted — wheel size, design and condition all change the price. Text a photo and we'll give you a straight number. No hidden fees." },
  { q: "Do you work on stock wheels?", a: "Yes. Factory aluminum wheels and forged aftermarket sets, dually and semi wheels included. If it's aluminum, we can polish it." },
  { q: "Where are you located?", a: `We're in ${siteConfig.city}, TX, by appointment. Drop-off details are sent when your appointment is confirmed. We serve Sealy, Katy, Brookshire, Bellville, Columbus, Fulshear and West Houston.` },
  { q: "Do you come to me?", a: "Mostly drop-off. Mobile service is available case by case for larger jobs — multiple trucks or full dually sets." },
  { q: "How do I book?", a: `Use the quote form or call or text ${siteConfig.phoneDisplay}. We confirm every appointment personally.` },
];

/** Quick-answers panel (static FAQ — no AI, no API calls). Desktop only: on
 *  phones the call/text bar does this job and a third floating button just
 *  covered page content. */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 lg:flex">
      {open && (
        <div id={panelId} role="dialog" aria-label="Quick answers" className="chat-panel w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[var(--blue-ink)] px-5 py-4">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-white">{siteConfig.name}</p>
              <p className="text-xs text-white/85">Quick answers</p>
            </div>
            <button ref={closeRef} type="button" onClick={() => { setOpen(false); toggleRef.current?.focus(); }} aria-label="Close quick answers" className="p-2 text-xl leading-none text-white/90 hover:text-white">
              <span aria-hidden="true">✕</span>
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-black/5 bg-[#f0f7ff] px-5 py-3">
            <p className="text-xs text-black/70">Need a quote?</p>
            <a href={telHref} className="text-xs font-black tracking-wide text-[var(--blue-ink)] underline">{siteConfig.phoneDisplay}</a>
          </div>
          <div className="max-h-[50vh] divide-y divide-black/5 overflow-y-auto">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-black">
                  {f.q}
                  <span aria-hidden="true" className="text-lg text-[var(--blue-ink)] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 pr-4 text-sm leading-relaxed text-black/75">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="flex gap-3 border-t border-black/5 bg-[#f8f8f8] px-5 py-4">
            <Link href="/contact" onClick={() => setOpen(false)} className="flex-1 rounded-lg bg-[var(--blue-ink)] py-2.5 text-center text-xs font-black uppercase tracking-widest text-white">Get a Quote</Link>
            <a href={smsHref} className="flex-1 rounded-lg border border-black/20 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-black">Text Us</a>
          </div>
        </div>
      )}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close quick answers" : "Open quick answers"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--blue-ink)] shadow-lg transition-all duration-200 hover:bg-[#08589a]"
      >
        {open ? (
          <svg aria-hidden="true" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg aria-hidden="true" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        )}
      </button>
    </div>
  );
}
