const items = [
  "Acid Wash & Polish",
  "Full Sand & Polish",
  "Curb Rash Repair",
  "Lip Re-Engraving",
  "Ceramic Coating",
  "Sealy TX",
  "Katy",
  "Bellville",
  "Columbus",
  "Mirror Finish",
];

/** Decorative marquee — hidden from screen readers, frozen under reduced motion. */
export default function ScrollTicker() {
  const doubled = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-white/5 bg-[#050505] py-4">
      <div className="ticker-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center text-xs font-black uppercase tracking-[0.3em] text-white/60">
            {item}
            <span className="mx-6 select-none text-xl text-[#1e90ff]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
