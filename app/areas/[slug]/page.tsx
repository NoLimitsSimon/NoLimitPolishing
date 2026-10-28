import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import LeadForm from "@/components/LeadForm";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { areas, getArea } from "@/lib/data/areas";
import { services, getService } from "@/lib/data/services";
import { siteConfig, pageMeta, faqSchema, businessId, telHref, smsHref } from "@/lib/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return {};
  return pageMeta({ title: a.metaTitle, description: a.metaDescription, path: `/areas/${a.slug}`, absoluteTitle: true });
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) notFound();

  const popular = a.popularServices.map(getService).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const nearby = a.nearby.map(getArea).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const isHome = a.tier === "home";
  const h1 = isHome ? "Wheel Polishing for Sealy, San Felipe & Wallis" : `Wheel Polishing for ${a.city}, TX`;

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Aluminum wheel polishing — ${a.city}, TX`,
    serviceType: "Aluminum wheel polishing",
    url: `${siteConfig.url}/areas/${a.slug}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: `${a.city}, TX`, geo: { "@type": "GeoCoordinates", latitude: a.lat, longitude: a.lng } },
  };

  return (
    <>
      <JsonLd data={areaSchema} />
      <JsonLd data={faqSchema(a.faqs)} />
      <PageHeader
        eyebrow={isHome ? "Home Base" : `Service Area · ${a.county}`}
        title={h1}
        lead={a.distance}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/areas" },
          { name: a.city, path: `/areas/${a.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#quote" className="btn-primary">Get a quote</a>
          <a href={telHref} className="btn-outline-dark">Call {siteConfig.phoneDisplay}</a>
        </div>
      </PageHeader>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="prose-nlp lg:col-span-2">
            {a.intro.map((p, i) => <p key={i}>{p}</p>)}
            <div className="relative !mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
              <Image src={a.photo.src} alt={a.photo.alt} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
            </div>
            <h2 className="!mt-10 text-2xl font-black uppercase tracking-tight text-black">What {a.city} trucks usually need</h2>
            <p>{a.whatWeSee}</p>
            <h2 className="!mt-10 text-2xl font-black uppercase tracking-tight text-black">Getting your wheels to us</h2>
            <p>{a.logistics}</p>
          </div>
          <aside aria-labelledby="glance" className="h-fit rounded-2xl bg-[#050505] p-7 text-white">
            <h2 id="glance" className="text-sm font-bold uppercase tracking-widest text-[#4da8ff]">At a glance</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="font-bold text-white">Shop</dt><dd className="text-white/80">{siteConfig.city}, TX {siteConfig.postalCode} · by appointment</dd></div>
              <div><dt className="font-bold text-white">Hours</dt><dd className="text-white/80">{siteConfig.hours.map((h) => `${h.days}: ${h.hours}`).join(" · ")}</dd></div>
              <div><dt className="font-bold text-white">Phone / text</dt><dd><a href={telHref} className="text-white underline underline-offset-4">{siteConfig.phoneDisplay}</a></dd></div>
              <div><dt className="font-bold text-white">County</dt><dd className="text-white/80">{a.county}</dd></div>
            </dl>
            <a href={smsHref} className="btn-primary mt-6 w-full">Text a photo</a>
          </aside>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Services that fit {a.city} trucks</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {popular.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <p className="mt-6 text-sm text-black/75">
            See <Link href="/services" className="font-semibold text-[var(--blue-ink)] underline">all {services.length} services</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">{a.city} questions</h2>
          <FaqList faqs={a.faqs} />
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-black">Nearby areas we serve</h2>
          <ul className="flex flex-wrap gap-3">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link href={`/areas/${n.slug}`} className="inline-block rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black hover:border-[var(--blue-ink)] hover:text-[var(--blue-ink)]">
                  Wheel polishing in {n.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:p-12">
          <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-black">Request a quote from {a.city}</h2>
          <p className="mb-8 text-sm text-black/70">Every request is answered personally.</p>
          <LeadForm
            serviceOptions={services.map((x) => ({ value: x.slug, label: x.name }))}
            areaOptions={[...siteConfig.serviceAreas]}
            defaultArea={a.city}
            phoneDisplay={siteConfig.phoneDisplay}
            phoneHref={telHref}
            smsHref={smsHref}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
