import Link from "next/link";

export const metadata = {
  title: "FAQ — Wheel Polishing Questions Answered | No Limit Polishing TX",
  description:
    "Common questions about aluminum wheel polishing in Texas. How much does wheel polishing cost? How long does it take? Do you come to me? No Limit Polishing answers it all.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does wheel polishing cost in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every job is custom-quoted based on wheel size, current condition, and scope of work. Factors include whether you need inside and outside polishing, curb rash repair, ceramic coating, or powder coat removal. Contact No Limit Polishing at (832) 466-3104 for a free quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does wheel polishing take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnaround depends on the scope. An acid wash on a set of four wheels moves quickly. A full inside-and-outside machine sand and polish on oversized wheels takes more time. We give you an honest turnaround estimate when we quote the job.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get my wheels polished near me in Houston TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No Limit Polishing serves the greater Houston, TX area including Katy, Sugar Land, and surrounding communities. Call or text (832) 466-3104 to schedule. We work out of our Houston location and offer mobile service for larger jobs.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get my wheels polished near me in College Station TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No Limit Polishing is based in College Station, TX and serves Bryan, College Station, and surrounding areas. Call or text (832) 466-3104 to get a free quote and schedule your appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you come to me or do I bring my wheels to you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work out of our locations in College Station and Houston, TX. Bring your wheels to us and we handle everything from there. Mobile service is available on a case-by-case basis for larger jobs — reach out and we can talk through the details.",
      },
    },
    {
      "@type": "Question",
      name: "Can you polish stock factory wheels or only aftermarket wheels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work on both. Stock factory aluminum wheels are some of our most common jobs. If it's aluminum, we can polish it — whether it came on the truck from the factory or it's a high-end forged set. The process is the same either way.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between acid wash and full sand and polish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acid wash is a chemical process that strips oxidation, brake dust, and road grime — it refreshes the surface but doesn't remove scratches or deep damage. Full sand and polish uses professional-grade machine sanding to remove every scratch and imperfection, producing a true mirror finish. Acid wash is faster and less expensive; full sand and polish is the premium result.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix curb rash on my wheels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We sand out the curb rash damage, blend the area, and polish it to match the rest of the wheel. If the engraved brand lettering on the lip was damaged, we re-engrave it so it looks factory-correct. When we're done, you shouldn't be able to tell it happened.",
      },
    },
    {
      "@type": "Question",
      name: "What is ceramic coating for wheels and is it worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceramic coating is a hard, hydrophobic layer applied over a freshly polished aluminum surface. It repels brake dust, road grime, and oxidation, significantly extending the life of your polish. It must be paired with our Full Sand and Polish service. If you want your wheels to stay looking great longer, it's worth it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove powder coat or clear coat before polishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Factory clear coat, aftermarket clear coat, powder coat, and anodized finishes all need to be fully removed before aluminum can be properly polished. We offer chemical and mechanical removal as a standalone service or as part of a full polishing job.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HEADER */}
      <section className="pt-40 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">Got Questions</p>
          <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black mb-6">FAQ</h1>
          <p className="text-black/50 text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about aluminum wheel polishing. Still have questions?{" "}
            <a href="tel:8324663104" className="text-[#1e90ff] font-semibold hover:underline">(832) 466-3104</a>.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqSchema.mainEntity.map((faq) => (
            <details key={faq.name} className="group border border-black/5 bg-[#f8f8f8] rounded-xl overflow-hidden shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-sm tracking-wide text-black hover:text-[#1e90ff] transition-colors list-none">
                {faq.name}
                <span className="text-[#1e90ff] group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0 ml-4">+</span>
              </summary>
              <div className="px-6 pb-6 text-black/60 text-sm leading-relaxed border-t border-black/5 pt-5 bg-white">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* LOCATION CALLOUTS */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">Where We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">Serving Texas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                city: "Houston, TX",
                areas: "Katy · Sugar Land · Pearland · The Woodlands · Pasadena · Friendswood",
                desc: "Professional aluminum wheel polishing serving the greater Houston metro area. Call (832) 466-3104 for a free quote.",
              },
              {
                city: "College Station, TX",
                areas: "Bryan · Hearne · Caldwell · Brenham · Huntsville",
                desc: "Wheel polishing specialists serving College Station, Bryan, and surrounding Brazos Valley communities.",
              },
            ].map((loc) => (
              <div key={loc.city} className="bg-white border border-black/5 rounded-xl p-8 shadow-sm">
                <h3 className="font-black uppercase tracking-wide text-black text-xl mb-2">{loc.city}</h3>
                <p className="text-[#1e90ff] text-xs font-bold tracking-wide mb-3">{loc.areas}</p>
                <p className="text-black/50 text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white text-center">
        <h2 className="text-4xl font-black uppercase tracking-tight text-black mb-6">Ready to get a quote?</h2>
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
