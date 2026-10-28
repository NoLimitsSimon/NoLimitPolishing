"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/data/types";

type Pair = { label: string; before: Photo; after: Photo };

/**
 * Before/after viewer. No auto-advance (the old one rotated every 5 s with no
 * pause — WCAG 2.2.2) and real alt text instead of "Before" / "After".
 */
export default function BeforeAfterSlider({ pairs }: { pairs: Pair[] }) {
  const [i, setI] = useState(0);
  const pair = pairs[i];
  const go = (d: number) => setI((n) => (n + d + pairs.length) % pairs.length);

  return (
    <div>
      <figure>
        <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
          {(["before", "after"] as const).map((side) => (
            <div key={side} className="relative aspect-[3/4]">
              <Image
                src={pair[side].src}
                alt={pair[side].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 480px"
                className="object-cover"
                
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                <span className={`text-sm font-black uppercase tracking-widest ${side === "after" ? "text-[#4da8ff]" : "text-white"}`}>
                  {side === "before" ? "Before" : "After"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <figcaption aria-live="polite" className="mt-4 text-sm font-semibold text-black/75">
          {pair.label} <span className="text-black/60">({i + 1} of {pairs.length})</span>
        </figcaption>
      </figure>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous before and after" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/70 hover:border-[var(--blue-ink)] hover:text-[var(--blue-ink)]">
          <span aria-hidden="true">←</span>
        </button>
        <div className="flex gap-1.5">
          {pairs.map((p, n) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show ${p.label}`}
              aria-current={n === i ? "true" : undefined}
              className="flex h-11 items-center px-1"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${n === i ? "w-6 bg-[var(--blue-ink)]" : "w-1.5 bg-black/30"}`} />
            </button>
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next before and after" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/70 hover:border-[var(--blue-ink)] hover:text-[var(--blue-ink)]">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
