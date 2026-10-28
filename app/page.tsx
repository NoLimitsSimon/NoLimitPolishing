import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MotionVideo from "@/components/MotionVideo";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ScrollTicker from "@/components/ScrollTicker";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { Icon, IG_PATH, TT_PATH } from "@/components/SocialIcons";
import { siteConfig, telHref, smsHref, pageMeta } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { guides } from "@/lib/data/guides";
import { reviews } from "@/lib/data/reviews";
import { beforeAfterPairs, galleryPhotos } from "@/lib/data/photos";

export const metadata = pageMeta({
  title: "Aluminum Wheel Polishing in Sealy, TX | No Limit Polishing",
  description:
    "Aluminum wheel polishing in Sealy, TX — acid wash, mirror polish, curb rash repair and ceramic coating for trucks, duallies and forged wheels. Free quotes.",
  path: "/",
  absoluteTitle: true,
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#business` },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden bg-black h-[100svh]">
        <Image src="/img/hero-poster.jpg" alt="" fill preload fetchPriority="high" sizes="100vw" className="object-cover" />
        <MotionVideo
          src="https://res.cloudinary.com/ddamtvtt0/video/upload/f_auto,q_auto/hero_irchql"
          className="absolute inset-0 h-full w-full object-cover"
          buttonClassName="bottom-24 right-4 lg:bottom-8 lg:right-8"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/95" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center [transform:translateZ(0)]">
          <h1 className="mb-4 font-black uppercase leading-none">
            <span className="hero-sub mb-5 block text-xs font-bold tracking-[0.4em] text-[#4da8ff] sm:text-sm">
              Aluminum Wheel Polishing in Sealy, TX
            </span>
            <span className="hero-line-1 block tracking-tight text-white" style={{ fontSize: "clamp(3.5rem,12vw,9rem)" }}>No Limit</span>
            <span className="hero-line-2 hero-glow block tracking-tight text-white" style={{ fontSize: "clamp(3.5rem,12vw,9rem)" }}>Polishing</span>
          </h1>
          <div aria-hidden="true" className="hero-divider mx-auto mb-6 h-0.5 w-48 bg-[#1e90ff]" />
          <p className="hero-sub mb-10 text-base font-light uppercase tracking-[0.2em] text-white/85 sm:text-xl">
            Trucks · Duallies · Forged Wheels
          </p>
          <div className="hero-cta mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href={smsHref} className="btn-outline-dark">Text a Photo</a>
          </div>
          <p className="hero-social text-sm text-white/80">
            Serving Sealy, Katy, Brookshire, Bellville, Columbus &amp; West Houston ·{" "}
            <a href={telHref} className="font-bold text-white underline underline-offset-4 hover:text-[#4da8ff]">{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </section>

      <ScrollTicker />

      {/* ── BEFORE / AFTER ── */}
      <section className="bg-white px-4 py-24" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">The Proof</p>
            <h2 id="proof-heading" className="text-4xl text-black font-black uppercase tracking-tight sm:text-6xl">Before &amp; After</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-black/70">Real wheels from real jobs — oxidized, scratched and dull on the left, polished on the right.</p>
          </div>
          <Reveal animation="scale">
            <BeforeAfterSlider pairs={beforeAfterPairs} />
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#f5f5f5] px-4 py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 id="services-heading" className="mb-3 text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">Wheel Polishing Services</h2>
            <p className="mx-auto max-w-lg text-sm text-black/70">Aluminum only, done right. Every job is quoted — text a photo and we&apos;ll get you a number.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline-light">All services &amp; how they work</Link>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="bg-white px-4 py-24" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
            <Image src="/img/wheel-polishing-in-progress.jpg" alt="Wheel lip being polished with a buffing pad mid-job" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-3">Why No Limit</p>
            <h2 id="why-heading" className="mb-6 text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">A shop that only does aluminum wheels</h2>
            <div className="prose-nlp">
              <p>Most places that &ldquo;polish wheels&rdquo; are detail shops running a buffer over them between car washes. Aluminum wheels are the whole business here — acid wash, sanding, polishing, curb rash, engraving and coating — so the process is built around getting a true mirror, spoke by spoke.</p>
              <p>No Limit Polishing is now based in <Link href="/areas/sealy-tx">Sealy</Link> under owner {siteConfig.owner} (<Link href="/about">read the story</Link>), serving Austin County and the I-10 corridor from <Link href="/areas/columbus-tx">Columbus</Link> to <Link href="/areas/katy-tx">Katy</Link> and <Link href="/areas/houston-tx">West Houston</Link>.</p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Factory, forged, dually & semi wheels", "Outside, inner barrel or both", "Straight quotes — no surprise fees", "By appointment, Mon–Sat"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm font-semibold text-black/80">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1e90ff]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      

      {/* ── GALLERY ── */}
      <section className="bg-white px-4 py-24" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">The Work</p>
            <h2 id="gallery-heading" className="text-4xl text-black font-black uppercase tracking-tight sm:text-5xl">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {galleryPhotos.map((p) => (
              <div key={p.src} className="group relative aspect-square overflow-hidden rounded-xl shadow-sm">
                <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="bg-[#f5f5f5] px-4 py-24" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Where We Work</p>
            <h2 id="areas-heading" className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">Sealy &amp; the I-10 Corridor</h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="block rounded-xl border border-black/10 bg-white p-5 text-center shadow-sm transition-colors hover:border-[var(--blue-ink)]">
                  <span className="block text-lg font-black uppercase tracking-wide text-black">{a.city}</span>
                  <span className="mt-1 block text-xs text-black/65">{a.tier === "home" ? "Home base" : a.county}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-black/70">Also serving San Felipe, Wallis, Waller and Hempstead.</p>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-white px-4 py-24" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">What Customers Say</p>
            <h2 id="reviews-heading" className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">Reviews</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-outline-light">Read all reviews</Link>
          </div>
        </div>
      </section>

      {/* ── GUIDES ── */}
      <section className="bg-[#f5f5f5] px-4 py-24" aria-labelledby="guides-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Know Before You Call</p>
            <h2 id="guides-heading" className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">Wheel Care Guides</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {guides.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="group flex flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:border-[var(--blue-ink)]">
                <h3 className="text-lg font-black uppercase leading-tight tracking-wide text-black group-hover:text-[var(--blue-ink)]">{g.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black/70">{g.summary}</p>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-[var(--blue-ink)]">Read the guide<span aria-hidden="true"> →</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="bg-white px-4 py-20" aria-labelledby="social-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">See Our Work</p>
          <h2 id="social-heading" className="mb-6 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">Follow Along</h2>
          <p className="mx-auto mb-10 max-w-md text-sm text-black/70">Latest jobs, process videos and results on Instagram and TikTok.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline-light gap-3">
              <Icon path={IG_PATH} className="h-5 w-5" /> Instagram<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="btn-outline-light gap-3">
              <Icon path={TT_PATH} className="h-5 w-5" /> TikTok<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
