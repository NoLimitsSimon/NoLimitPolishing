"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What services do you offer?",
    a: "Acid wash, full sanding (inside/outside/both), inner barrel polish, curb rash repair, and lip engraving. Every job is custom — reach out for a quote.",
  },
  {
    q: "How much does it cost?",
    a: "All pricing is quote-based since every wheel is different. Call or text us and we'll give you a straight number — no hidden fees.",
  },
  {
    q: "Do you work on stock wheels?",
    a: "Yes. We do stock factory aluminum wheels and aftermarket forged sets. If it's aluminum, we can polish it.",
  },
  {
    q: "Where are you located?",
    a: "We have two locations — College Station, TX and Houston, TX. Bring your wheels to us and we'll take it from there.",
  },
  {
    q: "Do you come to me?",
    a: "We're primarily stationary. Mobile service is available for the right job with extra travel fees — reach out and we'll talk through it.",
  },
  {
    q: "How do I book an appointment?",
    a: "Fill out the contact form on the site or call/text us at (832) 466-3104. We review every request personally and confirm before locking you in.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="chat-panel w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1e90ff] px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white font-black text-sm tracking-wide uppercase">No Limit Polishing</p>
              <p className="text-white/70 text-xs">Common questions</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-xl leading-none">✕</button>
          </div>

          {/* Contact bar */}
          <div className="bg-[#f0f7ff] border-b border-black/5 px-5 py-3 flex items-center justify-between">
            <p className="text-black/60 text-xs">Need a quote? Reach out directly:</p>
            <a
              href="tel:8324663104"
              className="text-[#1e90ff] font-black text-xs tracking-wide hover:text-[#0a6ebd] transition-colors"
            >
              (832) 466-3104
            </a>
          </div>

          {/* FAQ list */}
          <div className="divide-y divide-black/5 max-h-[360px] overflow-y-auto">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left px-5 py-4 hover:bg-[#f8f8f8] transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-sm text-black">{faq.q}</p>
                  <span className={`text-[#1e90ff] text-lg flex-shrink-0 transition-transform duration-200 ${expanded === i ? "rotate-45" : ""}`}>+</span>
                </div>
                {expanded === i && (
                  <p className="text-black/60 text-sm leading-relaxed mt-2 pr-4">{faq.a}</p>
                )}
              </button>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="border-t border-black/5 bg-[#f8f8f8] px-5 py-4 flex gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 bg-[#1e90ff] hover:bg-[#0a6ebd] text-white font-black text-xs py-2.5 rounded-lg tracking-widest uppercase text-center transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href="sms:8324663104"
              className="flex-1 border border-black/10 hover:border-[#1e90ff] text-black font-bold text-xs py-2.5 rounded-lg tracking-widest uppercase text-center transition-colors"
            >
              Text Us
            </a>
          </div>
        </div>
      )}

      {/* Bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#1e90ff] hover:bg-[#0a6ebd] shadow-lg flex items-center justify-center transition-all duration-200 glow-btn"
        aria-label="FAQ"
      >
        {open ? (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
