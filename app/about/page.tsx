import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Aluminum Wheel Polishing Specialists in College Station & Houston TX",
  description:
    "No Limit Polishing — founded by Simon Duffy in College Station, TX. Professional-grade equipment, no shortcuts. Serving College Station, Bryan, Houston, Katy, Sugar Land, and surrounding Texas communities.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative pt-40 pb-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">Who We Are</p>
            <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight leading-none text-black mb-6">
              No Limit<br />
              <span className="text-[#1e90ff]">Polishing</span>
            </h1>
            <div className="space-y-4 text-black/55 text-base leading-relaxed">
              <p>
                No Limit Polishing was founded on a commitment to quality craftsmanship, attention to detail, and delivering results that exceed expectations. What began as a passion for restoring and maintaining high-end automotive finishes has grown into a business serving customers across Texas.
              </p>
              <p>
                While forged aluminum wheel restoration remains our specialty, we provide a range of polishing and restoration services designed to bring out the best in every project.
              </p>
              <p>
                At No Limit Polishing, we believe quality is found in the details. Every project is approached with the same level of care, precision, and professionalism, regardless of size or scope. Our goal is simple: provide exceptional workmanship, honest service, and results that our customers can take pride in.
              </p>
              <p>
                Through a dedication to continuous improvement and customer satisfaction, we strive to set the standard for professional polishing and restoration services throughout College Station, Houston, and the surrounding areas.
              </p>
            </div>
            <div className="flex gap-4 mt-10">
              <Link href="/contact" className="bg-[#1e90ff] hover:bg-[#0a6ebd] text-white font-black text-sm px-7 py-3.5 rounded tracking-widest uppercase transition-all duration-200">
                Get a Quote
              </Link>
              <Link href="/services" className="border border-black/20 hover:border-[#1e90ff] text-black font-bold text-sm px-7 py-3.5 rounded tracking-widest uppercase transition-all duration-200">
                Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-black/5 shadow-md aspect-[4/5]">
              <Image src="/images/me.jpg" alt="Simon Duffy — Owner & Founder, No Limit Polishing" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute top-4 right-4 bg-[#1e90ff] text-white p-5 rounded-xl shadow-lg">
              <p className="font-black text-3xl">2</p>
              <p className="text-xs font-bold tracking-widest uppercase">Locations</p>
            </div>
            <div className="mt-10 text-center lg:text-left">
              <p className="text-black font-black text-2xl tracking-tight">Simon Duffy</p>
              <p className="text-[#1e90ff] text-xs font-bold tracking-[0.25em] uppercase mt-1">Owner &amp; Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Us</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "No Shortcuts", desc: "Every wheel is fully hand-worked. We don't release anything until it meets our standard — period." },
              { title: "All Aluminum", desc: "Stock factory, forged aftermarket, dually sets, inner barrels — if it's aluminum, we do it." },
              { title: "Two Locations", desc: "Serving College Station and the greater Houston area out of our Houston location. Mobile available for the right job." },
            ].map((v) => (
              <div key={v.title} className="card-hover border border-black/5 bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md">
                <div className="w-10 h-0.5 bg-[#1e90ff] mx-auto mb-6" />
                <h3 className="font-black uppercase tracking-wide text-black text-xl mb-3">{v.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">Find Us</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">Locations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { city: "College Station, TX", desc: "Serving the Bryan/College Station area and surrounding communities." },
              { city: "Houston, TX", desc: "Serving the greater Houston metro area including Katy, Sugar Land, and beyond." },
            ].map((loc) => (
              <div key={loc.city} className="border border-black/5 bg-[#f8f8f8] rounded-xl p-8 shadow-sm hover:border-[#1e90ff]/30 transition-all duration-200">
                <div className="text-[#1e90ff] text-3xl mb-4">📍</div>
                <h3 className="font-black uppercase tracking-wide text-black text-xl mb-3">{loc.city}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PHOTOS */}
      <section className="py-24 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Work</p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-black">Recent Jobs</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img5.jpg"].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group shadow-sm">
                <Image src={src} alt={`Work photo ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white text-center">
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-6">Let&apos;s work together</h2>
        <p className="text-black/50 mb-10 max-w-md mx-auto">Call, text, or fill out the form — we&apos;ll get back to you with a custom quote.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="glow-btn bg-[#1e90ff] text-white font-black text-sm px-10 py-4 rounded tracking-widest uppercase">
            Request an Appointment
          </Link>
          <a href="tel:8324663104" className="border border-black/20 hover:border-[#1e90ff] text-black font-bold text-sm px-10 py-4 rounded tracking-widest uppercase transition-all duration-200">
            (832) 466-3104
          </a>
        </div>
      </section>
    </>
  );
}
