"use client";

import { useEffect, useRef, useState } from "react";

type Settings = { textSize: 0 | 1 | 2; highContrast: boolean; reduceMotion: boolean; underlineLinks: boolean };
const DEFAULTS: Settings = { textSize: 0, highContrast: false, reduceMotion: false, underlineLinks: false };
const KEY = "nlp-a11y";

function apply(s: Settings) {
  const h = document.documentElement;
  h.classList.toggle("a11y-text-lg", s.textSize === 1);
  h.classList.toggle("a11y-text-xl", s.textSize === 2);
  h.classList.toggle("a11y-contrast", s.highContrast);
  h.classList.toggle("a11y-reduce-motion", s.reduceMotion);
  h.classList.toggle("a11y-underline", s.underlineLinks);
  document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((v) => (s.reduceMotion ? v.pause() : v.play().catch(() => {})));
}

function read(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {}
  return DEFAULTS;
}

/** Display preferences only — it does not replace the site itself being accessible. */
export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULTS);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = read();
    setS(stored);
    apply(stored);
  }, []);

  useEffect(() => {
    if (!open) return;
    firstRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function update(next: Settings) {
    setS(next);
    apply(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  }

  const row = "flex w-full items-center justify-between rounded-lg border border-black/15 px-4 py-3 text-left text-sm font-semibold text-black hover:border-[var(--blue-ink)]";
  const pill = (on: boolean) => `ml-3 rounded-full px-2 py-0.5 text-xs font-bold ${on ? "bg-[var(--blue-ink)] text-white" : "bg-black/10 text-black/75"}`;

  return (
    <div className="fixed bottom-20 left-4 z-50 lg:bottom-6 lg:left-6">
      {open && (
        <div id="a11y-panel" role="dialog" aria-label="Accessibility settings" className="mb-3 w-[min(88vw,300px)] space-y-2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl">
          <p className="mb-1 text-sm font-black uppercase tracking-wide text-black">Accessibility</p>
          <button ref={firstRef} type="button" className={row} onClick={() => update({ ...s, textSize: ((s.textSize + 1) % 3) as Settings["textSize"] })}>
            Text size <span className={pill(s.textSize > 0)}>{["Normal", "Large", "Larger"][s.textSize]}</span>
          </button>
          {([
            ["highContrast", "High contrast"],
            ["reduceMotion", "Stop animations"],
            ["underlineLinks", "Underline links"],
          ] as const).map(([k, label]) => (
            <button key={k} type="button" aria-pressed={s[k]} className={row} onClick={() => update({ ...s, [k]: !s[k] })}>
              {label} <span className={pill(s[k])}>{s[k] ? "On" : "Off"}</span>
            </button>
          ))}
          <button type="button" className="w-full pt-1 text-center text-xs font-bold uppercase tracking-widest text-[var(--blue-ink)] underline" onClick={() => update(DEFAULTS)}>
            Reset
          </button>
        </div>
      )}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Accessibility settings"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-black text-white shadow-lg hover:bg-[#1a1a1a]"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2a2 2 0 110 4 2 2 0 010-4zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" /></svg>
      </button>
    </div>
  );
}
