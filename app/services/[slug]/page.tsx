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
import { services, getService } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { getGuide } from "@/lib/data/guides";
import { siteConfig, pageMeta, faqSchema, businessId, telHref, smsHref } from "@/lib/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}`, image: s.image, absoluteTitle: true });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related.map(getService).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const guide = s.guide ? getGuide(s.guide) : undefined;
  const areasForService = areas.filter((a) => a.popularServices.includes(s.slug));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.primaryKeyword,
    description: s.metaDescription,
    url: `${siteConfig.url}/services/${s.slug}`,
    image: `${siteConfig.url}${s.image.src}`,
    provider: { "@id": businessId },
    areaServed: siteConfig.serviceAreas.map((c) => ({ "@type": "City", name: `${c}, TX` })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema(s.faqs)} />
      <PageHeader
        eyebrow="Service"
        title={s.h1}
        lead={s.tagline}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#quote" className="btn-primary">Get a quote</a>
          <a href={telHref} className="btn-outline-dark">Call {siteConfig.phoneDisplay}</a>
        </div>
      </PageHeader>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="prose-nlp">
            {s.intro.map((p, i) => <p key={i}>{p}</p>)}
            {guide && (
              <p>
                Not sure this is the right service? Read <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>.
              </p>
            )}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
            <Image src={s.image.src} alt={s.image.alt} fill preload fetchPriority="high" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">What&apos;s included</h2>
            <ul className="space-y-3">
              {s.whatsIncluded.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm text-black/80">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--blue-ink)]" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Is it right for your wheels?</h2>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-black">A good fit for</h3>
            <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-black/80">
              {s.goodFit.map((g) => <li key={g}>{g}</li>)}
            </ul>
            {s.notFit && (
              <>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-black">Not the right service for</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-black/80">
                  {s.notFit.map((g) => <li key={g}>{g}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">How it works</h2>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <span aria-hidden="true" className="text-3xl font-black text-[var(--blue-ink)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-black uppercase tracking-wide text-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/75">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-xl border-l-4 border-[var(--blue-ink)] bg-[#f0f7ff] p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black">Pricing</h3>
            <p className="mt-2 text-sm text-black/80">{s.pricingNote} <a href={smsHref} className="font-bold text-[var(--blue-ink)] underline">Text a photo</a> for the fastest quote.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">{s.name} FAQ</h2>
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Often paired with</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => <ServiceCard key={r.slug} service={r} />)}
          </div>
          {areasForService.length > 0 && (
            <p className="mt-8 text-sm text-black/75">
              {s.name} for customers in{" "}
              {areasForService.map((a, i) => (
                <span key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="font-semibold text-[var(--blue-ink)] underline underline-offset-2">{a.city}</Link>
                  {i < areasForService.length - 2 ? ", " : i === areasForService.length - 2 ? " and " : ""}
                </span>
              ))}
              {" "}and the rest of our <Link href="/areas" className="font-semibold text-[var(--blue-ink)] underline underline-offset-2">service area</Link>.
            </p>
          )}
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:p-12">
          <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-black">Get a {s.name.toLowerCase()} quote</h2>
          <p className="mb-8 text-sm text-black/70">Every request is answered personally.</p>
          <LeadForm
            serviceOptions={services.map((x) => ({ value: x.slug, label: x.name }))}
            areaOptions={[...siteConfig.serviceAreas]}
            defaultService={s.name}
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
