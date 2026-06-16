"use client";
import { useState, useEffect, useRef } from "react";

const reviews = [
  { name: "Kacen E.",   text: "Duffy has always done an amazing job on my wheels and also good service and fair pricing.", stars: 5 },
  { name: "Hayden",    text: "Easy to deal with. Real good work. Best in the game!",                     stars: 5 },
  { name: "Marcus D.", text: "Acid washed my stock dually wheels — couldn't believe the difference.",     stars: 5 },
  { name: "Carlos R.", text: "Texted a photo, got a quote fast, picked them up looking insane.",          stars: 5 },
  { name: "Derek H.",  text: "Different level from any other shop I've used. Stealth Forged wheels are fire.", stars: 5 },
  { name: "Anthony L.","text": "Stock wheels polished mirror clean. Never going anywhere else.",           stars: 5 },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {Array(5).fill(null).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const Avatar = ({ name }: { name: string }) => (
  <div className="w-10 h-10 rounded-full bg-[#e0e0e0] flex items-center justify-center flex-shrink-0">
    <svg className="w-6 h-6 text-[#aaa]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  </div>
);

export default function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (i: number) => {
    setActive((i + reviews.length) % reviews.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => go(active + 1), 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active]);

  // Show 3 cards on desktop (active + neighbours)
  const visible = [-1, 0, 1].map((offset) => ({
    review: reviews[(active + offset + reviews.length) % reviews.length],
    offset,
  }));

  return (
    <div>
      {/* Desktop: 3 cards */}
      <div className="hidden sm:grid grid-cols-3 gap-4">
        {visible.map(({ review, offset }) => (
          <div
            key={offset}
            className={`border rounded-2xl p-6 transition-all duration-500 ${
              offset === 0
                ? "border-[#1e90ff]/30 bg-white shadow-lg scale-105"
                : "border-black/5 bg-[#f8f8f8] opacity-60 scale-95"
            }`}
          >
            <Stars />
            <p className="text-black/70 text-sm leading-relaxed mb-5 italic">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <Avatar name={review.name} />
              <p className="font-black text-sm text-black uppercase tracking-wide">{review.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: single card */}
      <div className="sm:hidden">
        <div className="border border-[#1e90ff]/20 bg-white rounded-2xl p-6 shadow-md">
          <Stars />
          <p className="text-black/70 text-sm leading-relaxed mb-5 italic">&ldquo;{reviews[active].text}&rdquo;</p>
          <div className="flex items-center gap-3">
            <Avatar name={reviews[active].name} />
            <p className="font-black text-sm text-black uppercase tracking-wide">{reviews[active].name}</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#1e90ff]" : "w-1.5 bg-black/15"}`}
          />
        ))}
      </div>
    </div>
  );
}
