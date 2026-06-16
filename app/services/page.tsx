import Link from "next/link";

export const metadata = {
  title: "Wheel Polishing Services — Acid Wash, Sand & Polish, Ceramic Coating | TX",
  description:
    "Full-service aluminum wheel polishing in College Station & Houston, TX. Acid wash, machine sand & polish, ceramic coating, curb rash repair, clear coat removal, powder coat removal. Free custom quotes.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Acid Wash",
    pricing: "Custom quote · fast turnaround",
    desc: "A deep chemical process that strips oxidation, brake dust, road tar, and built-up grime that no buffer or cloth can reach. We use acid wash as a standalone service to refresh wheels that have dulled over time, or as a first step before full sanding. If your aluminum has gone chalky or discolored, this is where the process starts.",
    details: ["Removes oxidation, brake dust & road tar", "Restores surface brightness", "Works as standalone or pre-polish prep"],
  },
  {
    title: "Full Sanding",
    pricing: "Priced by wheel size & scope",
    desc: "We machine-sand your wheels using professional-grade equipment from start to finish — no shortcuts, no half measures. You choose the scope: outside face and spokes, inside barrel, or the full wheel inside and out. Every surface gets the same treatment with the same top-tier tools. The result speaks for itself.",
    details: ["Professional-grade machine equipment throughout", "Outside only, inside only, or full wheel — your call", "Mirror finish on every surface we touch"],
  },
  {
    title: "Inner Barrel Polish",
    pricing: "Add-on or standalone",
    desc: "The inside of your wheel can shine just as hard as the outside. We sand and polish the inner barrel so when someone looks through your spokes, all they see is mirror. Most shops skip this entirely. We offer it as a standalone service or as part of any full sanding job.",
    details: ["Full mirror finish inside the barrel", "Available standalone or combined with full sanding", "Makes the whole wheel look the part"],
  },
  {
    title: "Curb Rash Repair",
    pricing: "Priced by severity per wheel",
    desc: "Catching a curb can do real damage to a lip — and depending on how bad it is, it can also eat into the engraved brand lettering on the wheel. We sand the damage out, blend the area back into the surrounding finish, and polish it to match. If the lettering took damage and lost its depth, we re-engrave it. When we're done, you shouldn't be able to tell it happened.",
    details: ["Lip and barrel scratch removal", "Full refinish and polish after repair", "Re-engrave brand lettering if removed by damage"],
  },
  {
    title: "Lip Engraving",
    pricing: "Standalone or bundled",
    desc: "After polishing or curb rash repair, the engraved brand name in the lip can come out looking shallow or washed out. We go back in and restore it — deep, clean lines that read clearly against the polished aluminum. It's the finishing detail that makes the whole job look intentional.",
    details: ["Restore brand lettering depth and clarity", "Available post-polish or as a standalone service", "Clean, factory-correct appearance"],
  },
  {
    title: "Ceramic Coating",
    pricing: "Add-on with Full Sand & Polish only",
    desc: "Once your wheels are sanded to a mirror finish, ceramic coating locks that shine in. We apply a professional-grade ceramic layer that bonds to the aluminum and creates a hard, hydrophobic barrier against brake dust, road grime, and oxidation. This service must be paired with a full sand & polish — the coating is only applied to a freshly finished surface.",
    details: ["Must be paired with Full Sand & Polish", "Hydrophobic — repels brake dust & grime", "Extends the life of your polish significantly"],
  },
  {
    title: "Clear Coat Removal",
    pricing: "Priced per wheel",
    desc: "Factory clear coat and aftermarket clear coats can yellow, peel, and flake over time — and they have to come off before aluminum can be properly polished. We strip the clear coat completely, leaving bare aluminum ready for sanding and finishing.",
    details: ["Full removal of factory or aftermarket clear coat", "Required prep before polishing a coated wheel", "Priced per wheel based on condition"],
  },
  {
    title: "Powder Coat & Anodizing Removal",
    pricing: "Priced per wheel · varies by finish",
    desc: "Powder coat and anodizing are two of the most common finishes on aftermarket wheels — and both have to be fully stripped before aluminum polishing can happen. We chemically and mechanically remove these finishes down to bare metal so the surface is ready for whatever comes next.",
    details: ["Removes powder coat and anodized finishes", "Down-to-metal prep for polishing", "Available standalone or as part of a full job"],
  },
];

const faqs = [
  {
    q: "Do you work on stock wheels, or only aftermarket?",
    a: "We work on both. Stock factory aluminum wheels are some of our most common jobs. If it's aluminum, we can polish it — doesn't matter if it came on the truck from the factory or if it's a $5,000 forged set. The process is the same either way.",
  },
  {
    q: "How do you price your work?",
    a: "Every job is priced individually because no two wheels come in the same condition. Size, current finish, scope of work, how many wheels — all of it factors in. Send us your info and we'll give you a straight number. We don't do hidden fees or surprise charges.",
  },
  {
    q: "Can I choose just inside or just outside for sanding?",
    a: "Absolutely. Some customers only want the face and spokes done. Some want just the inner barrel. Some want the whole thing top to bottom. We work around what you're trying to accomplish and price accordingly.",
  },
  {
    q: "What happens if curb rash removed the lettering on my lip?",
    a: "That's a common one, and it's fixable. We repair the curb rash first, bring the surface back, and then re-engrave the brand name into the lip. By the time we're done it looks like it never happened.",
  },
  {
    q: "Do you come to me, or do I bring my wheels to you?",
    a: "We work out of our locations in College Station and Houston, TX. Bring your wheels to us and we'll handle it from there. Mobile service is available on a case-by-case basis for larger jobs — reach out and we can talk through the details.",
  },
  {
    q: "How long does the job take?",
    a: "It depends on the scope. An acid wash on a set of four can move pretty quickly. A full inside-and-outside sanding on oversized wheels takes more time — we're doing everything by hand, and that matters for the quality of the finish. We'll give you an honest turnaround estimate when we quote the job.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="pt-40 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black mb-6">Services</h1>
          <p className="text-black/50 text-base leading-relaxed">
            All pricing is quote-based — every wheel is different. Call or text{" "}
            <a href="tel:8324663104" className="text-[#1e90ff] hover:underline font-semibold">(832) 466-3104</a>{" "}
            and we&apos;ll get you a number.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((s, i) => (
            <div key={s.title} className="border border-black/5 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-6 bg-[#f8f8f8] px-8 py-5 border-b border-black/5">
                <span className="text-[#1e90ff] font-black text-3xl tabular-nums leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-black uppercase tracking-wide text-black text-xl">{s.title}</h2>
                  {s.pricing && <p className="text-[#1e90ff] text-xs font-bold tracking-wide mt-0.5">{s.pricing}</p>}
                </div>
                <Link href="/contact" className="ml-auto text-[#1e90ff] font-bold text-xs tracking-widest uppercase whitespace-nowrap hidden sm:block hover:text-[#0a6ebd]">
                  Get a Quote →
                </Link>
              </div>
              <div className="bg-white px-8 py-7">
                <p className="text-black/60 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-wrap gap-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-black/60 bg-[#f5f5f5] rounded-full px-3 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e90ff] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-5 inline-block text-[#1e90ff] font-bold text-xs tracking-widest uppercase sm:hidden">
                  Get a Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-black">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-black/5 bg-white rounded-xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-sm tracking-wide text-black hover:text-[#1e90ff] transition-colors list-none">
                  {faq.q}
                  <span className="text-[#1e90ff] group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 text-black/60 text-sm leading-relaxed border-t border-black/5 pt-5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white text-center">
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-6">
          Ready to get a quote?
        </h2>
        <p className="text-black/50 mb-10 max-w-md mx-auto text-sm">
          Call, text, or fill out the form. We get back to you fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="glow-btn bg-[#1e90ff] text-white font-black text-sm px-10 py-4 rounded tracking-widest uppercase">
            Request an Appointment
          </Link>
          <a href="tel:8324663104" className="border border-black/20 hover:border-[#1e90ff] text-black font-bold text-sm px-10 py-4 rounded tracking-widest uppercase transition-all duration-200">
            (832) 466-3104
          </a>
        </div>
      </section>
    </div>
  );
}
