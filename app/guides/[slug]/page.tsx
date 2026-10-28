import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { guides, getGuide } from "@/lib/data/guides";
import { getService } from "@/lib/data/services";
import { siteConfig, pageMeta, faqSchema, businessId } from "@/lib/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const meta = pageMeta({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${g.slug}`, image: g.image, absoluteTitle: true });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article" } };
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const related = g.relatedServices.map(getService).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const others = guides.filter((x) => x.slug !== g.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.metaDescription,
    image: `${siteConfig.url}${g.image.src}`,
    dateModified: g.updated,
    datePublished: g.updated,
    mainEntityOfPage: `${siteConfig.url}/guides/${g.slug}`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@id": businessId },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(g.faqs)} />
      <PageHeader
        eyebrow="Wheel Care Guide"
        title={g.title}
        lead={g.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: g.shortTitle, path: `/guides/${g.slug}` },
        ]}
      />
      <article className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-black/65">
            Updated <time dateTime={g.updated}>{new Date(g.updated + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time> · {siteConfig.name}, {siteConfig.city} TX
          </p>
          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
            <Image src={g.image.src} alt={g.image.alt} fill preload fetchPriority="high" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
          {g.sections.map((sec) => (
            <section key={sec.heading} className="mb-10">
              <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-black">{sec.heading}</h2>
              <div className="prose-nlp">
                {sec.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {sec.list && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-black/80">
                  {sec.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </section>
          ))}
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-black">Quick answers</h2>
            <FaqList faqs={g.faqs} />
          </section>
        </div>
      </article>
      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Services in this guide</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <h2 className="mb-4 mt-12 text-sm font-bold uppercase tracking-widest text-black">More guides</h2>
          <ul className="space-y-2">
            {others.map((o) => (
              <li key={o.slug}><Link href={`/guides/${o.slug}`} className="font-semibold text-[var(--blue-ink)] underline underline-offset-2">{o.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand heading="Rather have us look at them?" sub="Text a photo of your wheels and we'll tell you which service they need — and what it costs." />
    </>
  );
}
