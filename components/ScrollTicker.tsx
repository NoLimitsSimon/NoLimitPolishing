const items = [
  "Acid Wash & Polish",
  "Full Sand & Polish",
  "Curb Rash Repair",
  "Re-Engraving",
  "Mirror Finish",
  "College Station",
  "Houston TX",
  "No Limit Polishing",
];

const DOT = (
  <span className="mx-6 text-[#1e90ff] text-xl select-none">✦</span>
);

export default function ScrollTicker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#050505] py-4 border-y border-white/5">
      <div className="ticker-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center text-white/50 text-xs font-black tracking-[0.3em] uppercase shrink-0">
            {item}{DOT}
          </span>
        ))}
      </div>
    </div>
  );
}
