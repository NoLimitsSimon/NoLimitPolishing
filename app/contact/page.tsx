"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", location: "", service: "", wheels: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="pt-40 pb-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">Let&apos;s Talk</p>
          <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black mb-6">Contact Us</h1>
          <p className="text-black/50 text-base leading-relaxed">
            Fill out the form and we&apos;ll reach out to confirm your appointment. Or call or text us directly at{" "}
            <a href="tel:8324663104" className="text-[#1e90ff] font-semibold hover:underline">(832) 466-3104</a>.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "📞", label: "Call or Text", value: "(832) 466-3104", href: "tel:8324663104" },
            { icon: "📍", label: "Locations", value: "College Station & Houston, TX", href: null },
            { icon: "📱", label: "Follow Us", value: "@no_limit_polishing", href: "https://www.instagram.com/no_limit_polishing/" },
          ].map((c) => (
            <div key={c.label} className="border border-black/5 bg-[#f8f8f8] rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-black/40 text-xs tracking-widest uppercase mb-1">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="text-black font-bold hover:text-[#1e90ff] transition-colors text-sm">{c.value}</a>
              ) : (
                <p className="text-black font-bold text-sm">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="border border-black/5 bg-[#f8f8f8] rounded-2xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Request an Appointment</h2>
            <p className="text-black/40 text-sm mb-8">
              We review every request personally and reach out to confirm details before locking you in.
            </p>

            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#1e90ff] flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-black mb-2">Request Sent!</h3>
                <p className="text-black/50 text-sm mb-6">We&apos;ll reach out shortly to confirm your appointment.</p>
                <Link href="/" className="text-[#1e90ff] font-bold text-sm tracking-widest uppercase hover:underline">← Back to Home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-[#1e90ff] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="(832) 000-0000"
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-[#1e90ff] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com"
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-[#1e90ff] transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Preferred Location *</label>
                  <select name="location" value={form.location} onChange={handleChange} required
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm focus:outline-none focus:border-[#1e90ff] transition-colors">
                    <option value="">Select a location</option>
                    <option value="College Station, TX">College Station, TX</option>
                    <option value="Houston, TX">Houston, TX</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Service Needed *</label>
                  <select name="service" value={form.service} onChange={handleChange} required
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm focus:outline-none focus:border-[#1e90ff] transition-colors">
                    <option value="">Select a service</option>
                    <option value="Acid Wash">Acid Wash</option>
                    <option value="Full Sand & Polish — Outside Only">Full Sand & Polish — Outside Only</option>
                    <option value="Full Sand & Polish — Inside Only">Full Sand & Polish — Inside Only</option>
                    <option value="Full Sand & Polish — Inside & Outside">Full Sand & Polish — Inside &amp; Outside</option>
                    <option value="Ceramic Coating (add-on with Full Sand)">Ceramic Coating (add-on with Full Sand)</option>
                    <option value="Curb Rash Repair">Curb Rash Repair</option>
                    <option value="Lip Engraving">Lip Engraving</option>
                    <option value="Clear Coat Removal">Clear Coat Removal</option>
                    <option value="Powder Coat / Anodizing Removal">Powder Coat / Anodizing Removal</option>
                    <option value="Multiple / Not Sure">Multiple / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Wheel Info</label>
                  <input name="wheels" value={form.wheels} onChange={handleChange}
                    placeholder="Brand, size, quantity, current condition..."
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-[#1e90ff] transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widets uppercase text-black/40 mb-2">Additional Notes</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Any other details we should know..."
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-[#1e90ff] transition-colors resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full glow-btn bg-[#1e90ff] hover:bg-[#0a6ebd] text-white font-black text-sm py-4 rounded-lg tracking-widest uppercase transition-all duration-200 disabled:opacity-60">
                  {loading ? "Sending..." : "Submit Request"}
                </button>

                <p className="text-black/30 text-xs text-center pt-1">
                  Prefer to reach out directly? Call or text{" "}
                  <a href="sms:8324663104" className="text-[#1e90ff]">(832) 466-3104</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8 text-center">Where We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { city: "College Station, TX", desc: "Serving Bryan, College Station, and surrounding areas." },
              { city: "Houston, TX", desc: "Serving the greater Houston metro area." },
            ].map((loc) => (
              <div key={loc.city} className="border border-black/5 bg-[#f8f8f8] rounded-2xl p-8 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#1e90ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="font-black uppercase tracking-wide text-black text-lg mb-2">{loc.city}</h3>
                <p className="text-black/40 text-sm">{loc.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-black/30 text-xs mt-5">
            Exact location provided when your appointment is confirmed.
          </p>
        </div>
      </section>
    </div>
  );
}
