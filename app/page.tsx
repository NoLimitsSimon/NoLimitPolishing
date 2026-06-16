import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VideoClip from "@/components/VideoClip";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ParticleField from "@/components/ParticleField";
import ScrollTicker from "@/components/ScrollTicker";
import TiltCard from "@/components/TiltCard";

const services = [
  { num: "01", title: "Acid Wash & Polish", desc: "Deep chemical strip that dissolves oxidation, brake dust, and road grime — then straight into polish." },
  { num: "02", title: "Full Sand & Polish", desc: "Professional-grade machine sanding removes every scratch, gouge, and imperfection. Mirror finish, inside and out — no shortcuts." },
  { num: "03", title: "Ceramic Coating", desc: "Locks your polish in with a hard hydrophobic barrier. Must be paired with Full Sand & Polish." },
  { num: "04", title: "Curb Rash Repair", desc: "We sand out the damage, blend it, and polish it back. If the engraving got hit, we put it back too." },
  { num: "05", title: "Re-Engraving", desc: "Restore the brand lettering in your lip — deep, crisp, factory-correct. Standalone or add-on." },
  { num: "06", title: "Clear Coat Removal", desc: "Full strip of factory or aftermarket clear coat down to bare aluminum, ready for polish." },
  { num: "07", title: "Powder Coat & Anodizing Removal", desc: "Chemical and mechanical removal of powder coat or anodized finishes before polishing." },
];

const gallery = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img5.jpg",
  "/images/gallery5.jpg",
  "/images/img4.jpg",
];

function WheelDivider() {
  return (
    <div className="relative py-14 flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute w-96 h-24 rounded-full bg-[#1e90ff]/8 blur-3xl" />

      {/* Outer ripple rings */}
      <svg className="absolute" width="180" height="180" viewBox="0 0 180 180" fill="none">
        <circle className="ripple-ring" cx="90" cy="90" r="30" stroke="#1e90ff" strokeWidth="1" fill="none" opacity="0.4" />
        <circle className="ripple-ring" cx="90" cy="90" r="30" stroke="#1e90ff" strokeWidth="1" fill="none" opacity="0.25" style={{animationDelay:"0.7s"}} />
        <circle className="ripple-ring" cx="90" cy="90" r="30" stroke="#1e90ff" strokeWidth="1" fill="none" opacity="0.15" style={{animationDelay:"1.4s"}} />
      </svg>

      {/* Orbiting dots */}
      <div className="absolute w-[100px] h-[100px] flex items-center justify-center">
        <div className="orbit-dot w-2 h-2 rounded-full bg-[#1e90ff]" style={{boxShadow:"0 0 8px #1e90ff"}} />
      </div>
      <div className="absolute w-[100px] h-[100px] flex items-center justify-center">
        <div className="orbit-dot2 w-1.5 h-1.5 rounded-full bg-white" style={{boxShadow:"0 0 6px #fff"}} />
      </div>

      {/* Main wheel */}
      <svg className="wheel-spin relative z-10" width="72" height="72" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke="url(#cg1)" strokeWidth="2.5" fill="none" />
        <circle cx="40" cy="40" r="22" stroke="url(#cg2)" strokeWidth="1.5" fill="none" opacity="0.5" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return <line key={i}
            x1={40 + 22 * Math.cos(rad)} y1={40 + 22 * Math.sin(rad)}
            x2={40 + 35 * Math.cos(rad)} y2={40 + 35 * Math.sin(rad)}
            stroke="#1e90ff" strokeWidth="2" opacity="0.8" />;
        })}
        <circle cx="40" cy="40" r="5" fill="#1e90ff" />
        <circle cx="40" cy="40" r="3" fill="#fff" opacity="0.8" />
        <defs>
          <linearGradient id="cg1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e90ff" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1e90ff" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="cg2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e90ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-0 right-1/2 mr-14 h-px bg-gradient-to-r from-transparent to-[#1e90ff]/40" />
      <div className="absolute left-1/2 right-0 ml-14 h-px bg-gradient-to-l from-transparent to-[#1e90ff]/40" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="https://res.cloudinary.com/ddamtvtt0/video/upload/hero_irchql" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />
        <ParticleField />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="hero-sub text-[#1e90ff] text-xs font-bold tracking-[0.5em] uppercase mb-5">
            College Station & Houston, TX
          </p>

          <h1 className="font-black uppercase leading-none mb-4">
            <span className="hero-line-1 glitch block text-white tracking-tight" style={{ fontSize: "clamp(3.5rem,12vw,9rem)" }}>No Limit</span>
            <span className="hero-line-2 hero-glow block text-white tracking-tight" style={{ fontSize: "clamp(3.5rem,12vw,9rem)" }}>Polishing</span>
          </h1>

          <div className="hero-divider h-0.5 bg-[#1e90ff] w-48 mx-auto mb-6" />

          <p className="hero-sub text-white/60 text-base sm:text-xl font-light tracking-[0.25em] uppercase mb-10">
            Forged Aluminum Wheel Specialists
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="glow-btn bg-[#1e90ff] hover:bg-[#0a6ebd] text-white font-black text-sm px-9 py-4 rounded tracking-widest uppercase transition-all duration-200">
              Get a Free Quote
            </Link>
            <Link href="/services" className="border border-white/40 hover:border-white text-white font-bold text-sm px-9 py-4 rounded tracking-widest uppercase transition-all duration-200">
              Our Services
            </Link>
          </div>

          <div className="hero-social flex items-center justify-center gap-5">
            <span className="text-white/30 text-xs tracking-widest uppercase">Follow Us</span>
            <a href="https://www.instagram.com/no_limit_polishing/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <span className="text-white/20">·</span>
            <a href="https://www.tiktok.com/@no_limit_polishing" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              TikTok
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <p className="text-[10px] tracking-[0.4em] uppercase">Scroll</p>
          <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ── TICKER ── */}
      <ScrollTicker />

      {/* ── BEFORE / AFTER ── */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Reveal animation="up">
              <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Proof</p>
            </Reveal>
            <Reveal animation="up" delay={100}>
              <h2 className="chrome-sweep text-4xl sm:text-6xl font-black uppercase tracking-tight">Before & After</h2>
            </Reveal>
          </div>
          <Reveal animation="scale" delay={200}>
            <BeforeAfterSlider />
          </Reveal>
        </div>
      </section>

      <WheelDivider />

      {/* ── SERVICES ── */}
      <section className="py-28 px-4 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Reveal animation="up">
              <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Do</p>
            </Reveal>
            <Reveal animation="up" delay={100}>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-3">Services</h2>
            </Reveal>
            <Reveal animation="up" delay={200}>
              <p className="text-black/40 max-w-md mx-auto text-sm">Every job is priced by quote — reach out and we&apos;ll get you a number.</p>
            </Reveal>
          </div>

          <div className="space-y-px rounded-xl overflow-hidden shadow-sm">
            {services.map((s, i) => (
              <Reveal key={s.num} animation="left" delay={Math.min(i * 100, 400) as 0|100|200|300|400|500}>
                <div className="group flex items-start gap-6 bg-white hover:bg-[#1e90ff] transition-all duration-300 px-8 py-7 cursor-default border-b border-black/5 last:border-0">
                  <span className="text-[#1e90ff] group-hover:text-white/40 font-black text-2xl leading-none mt-1 transition-colors w-10 flex-shrink-0">{s.num}</span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                    <h3 className="font-black uppercase tracking-wide text-black group-hover:text-white text-lg transition-colors sm:w-56 flex-shrink-0">{s.title}</h3>
                    <p className="text-black/50 group-hover:text-white/75 text-sm leading-relaxed transition-colors">{s.desc}</p>
                  </div>
                  <Link href="/contact" className="hidden sm:block text-[#1e90ff] group-hover:text-white/70 font-bold text-xs tracking-widest uppercase whitespace-nowrap transition-colors">
                    Quote →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal animation="up" delay={400} className="text-center mt-10">
            <Link href="/services" className="race-border inline-block text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white font-bold text-sm px-8 py-3.5 rounded tracking-widest uppercase transition-all duration-200">
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── TICKER 2 ── */}
      <ScrollTicker />

      {/* ── GALLERY + VIDEO ── */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Reveal animation="up">
              <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Work</p>
            </Reveal>
            <Reveal animation="up" delay={100}>
              <h2 className="chrome-sweep text-4xl sm:text-5xl font-black uppercase tracking-tight">Gallery</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
            {gallery.map((src, i) => (
              <Reveal key={i} animation="scale" delay={Math.min(i * 100, 500) as 0|100|200|300|400|500}>
                <TiltCard className="relative group overflow-hidden rounded-xl aspect-square shadow-sm">
                  <Image src={src} alt="Polished wheel" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 640px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{background:"radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(30,144,255,0.15), transparent 60%)"}} />
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal animation="scale" delay={300}>
            <div className="rounded-xl overflow-hidden border border-black/5 shadow-sm">
              <VideoClip />
            </div>
          </Reveal>
        </div>
      </section>

      <WheelDivider />

      {/* ── REVIEWS ── */}
      <section className="py-28 px-4 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Reveal animation="up">
              <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">What Customers Say</p>
            </Reveal>
            <Reveal animation="up" delay={100}>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black mb-3">Reviews</h2>
            </Reveal>
            <Reveal animation="up" delay={200}>
              <div className="flex items-center justify-center gap-1 mt-2">
                {Array(5).fill(null).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 float-bob" style={{animationDelay:`${i*0.15}s`}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal animation="up" delay={200}>
            <ReviewsCarousel />
          </Reveal>
          <Reveal animation="up" delay={300} className="text-center mt-10">
            <Link href="/reviews" className="race-border inline-block text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white font-bold text-sm px-8 py-3.5 rounded tracking-widest uppercase transition-all duration-200">
              See All Reviews
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="py-20 px-4 bg-white">
        <Reveal animation="up" className="max-w-3xl mx-auto text-center">
          <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-3">See Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-6">Follow Us On Social</h2>
          <p className="text-black/40 text-sm mb-10 max-w-md mx-auto">Latest jobs, process videos, and results on Instagram and TikTok.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/no_limit_polishing/" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-black/10 hover:border-[#1e90ff] hover:text-[#1e90ff] text-black font-bold text-sm px-8 py-4 rounded tracking-wide uppercase transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @no_limit_polishing
            </a>
            <a href="https://www.tiktok.com/@no_limit_polishing" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-black/10 hover:border-[#1e90ff] hover:text-[#1e90ff] text-black font-bold text-sm px-8 py-4 rounded tracking-wide uppercase transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              @no_limit_polishing
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-4 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e90ff]/5" />

        {/* Floating background bolts */}
        <svg className="absolute left-6 top-10 opacity-15 float-bob" width="36" height="72" viewBox="0 0 60 120" fill="none" style={{animationDelay:"0s"}}>
          <path d="M38 5 L15 58 L30 58 L22 115 L50 48 L33 48 Z" stroke="#1e90ff" strokeWidth="1.5" fill="rgba(30,144,255,0.1)" />
        </svg>
        <svg className="absolute right-10 bottom-14 opacity-10 float-bob" width="24" height="48" viewBox="0 0 60 120" fill="none" style={{animationDelay:"1.5s"}}>
          <path d="M38 5 L15 58 L30 58 L22 115 L50 48 L33 48 Z" stroke="#1e90ff" strokeWidth="1.5" fill="rgba(30,144,255,0.08)" />
        </svg>
        <svg className="absolute right-1/3 top-6 opacity-8 float-bob" width="16" height="32" viewBox="0 0 60 120" fill="none" style={{animationDelay:"2.5s"}}>
          <path d="M38 5 L15 58 L30 58 L22 115 L50 48 L33 48 Z" stroke="#1e90ff" strokeWidth="1" fill="none" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal animation="up">
            <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">Get Started</p>
          </Reveal>
          <Reveal animation="up" delay={100}>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 text-white">
              Ready to make your<br />
              <span className="shimmer-blue">wheels shine?</span>
            </h2>
          </Reveal>
          <Reveal animation="up" delay={200}>
            <p className="text-white/40 text-base mb-10 max-w-lg mx-auto">Based in College Station & Houston, TX. All quotes are custom.</p>
          </Reveal>
          <Reveal animation="up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="glow-btn bg-[#1e90ff] hover:bg-[#0a6ebd] text-white font-black text-sm px-10 py-4 rounded tracking-widest uppercase transition-all duration-200">
                Request an Appointment
              </Link>
              <a href="tel:8324663104" className="border border-white/20 hover:border-[#1e90ff] text-white font-bold text-sm px-10 py-4 rounded tracking-widest uppercase transition-all duration-200">
                Call (832) 466-3104
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
