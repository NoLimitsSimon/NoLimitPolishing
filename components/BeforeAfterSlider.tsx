"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const pairs = [
  {
    before: "/images/b4.jpg",
    after:  "/images/a4_new.jpg",
    afterPosition: "center 30%",
  },
  {
    before: "/images/b3.jpg",
    after:  "/images/a3.jpg",
    afterPosition: "center center",
  },
  {
    before: "/images/b2.jpg",
    after:  "/images/a2.jpg",
    afterPosition: "center center",
  },
  {
    before: "/images/b1.jpg",
    after:  "/images/after1_new.jpg",
    afterPosition: "center center",
  },
];

export default function BeforeAfterSlider() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => advance(1), 5000);
    return () => clearInterval(t);
  }, [index]);

  const advance = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + dir + pairs.length) % pairs.length);
      setAnimating(false);
    }, 300);
  };

  const pair = pairs[index];

  return (
    <div className="relative">
      <div className={`grid grid-cols-2 gap-2 rounded-2xl overflow-hidden border border-black/5 shadow-lg transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
        {/* BEFORE */}
        <div className="relative" style={{ aspectRatio: "3/4" }}>
          <Image
            src={pair.before}
            alt="Before"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-4 px-5">
            <span className="text-white/80 font-black text-sm tracking-widest uppercase">Before</span>
          </div>
        </div>

        {/* AFTER */}
        <div className="relative" style={{ aspectRatio: "3/4" }}>
          <Image
            src={pair.after}
            alt="After"
            fill
            className="object-cover"
            style={{ objectPosition: pair.afterPosition }}
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-4 px-5">
            <span className="text-[#1e90ff] font-black text-sm tracking-widest uppercase">After</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-end mt-5 px-1">
        <div className="flex items-center gap-3">
          <button onClick={() => advance(-1)} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:border-[#1e90ff] hover:text-[#1e90ff] transition-colors text-black/40 text-sm">←</button>
          <div className="flex gap-1.5">
            {pairs.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#1e90ff]" : "w-1.5 bg-black/15"}`} />
            ))}
          </div>
          <button onClick={() => advance(1)} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:border-[#1e90ff] hover:text-[#1e90ff] transition-colors text-black/40 text-sm">→</button>
        </div>
      </div>
    </div>
  );
}
