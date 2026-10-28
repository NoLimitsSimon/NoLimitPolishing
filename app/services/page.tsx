import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/data/services";
import { pageMeta, faqSchema, siteConfig, smsHref } from "@/lib/data/site";

export const metadata = pageMeta({
  title: "Aluminum Wheel Polishing Services | Sealy, TX",
  description:
    "Every aluminum wheel service we offer in Sealy, TX: acid wash, mirror polish, inner barrels, curb rash repair, re-engraving, ceramic coating and coating removal.",
  path: "/services",
  absoluteTitle: true,
});

const faqs = [
  { question: "How do you price wheel polishing?", answer: "Every job is quoted individually — wheel size, design (spoke count and lip depth), current condition and scope all change it. Text a photo of your wheels and we'll give you a straight number with no hidden fees." },
  { question: "Which service do I need?", answer: "Dull, chalky or spotted but smooth: acid wash and polish. Scratches, swirls or pitting: full sand and polish. Peeling film or a colored finish: the coating has to be removed first. Not sure? Send a photo." },
  { question: "Do you polish chrome wheels?", answer: "No. Chrome plating isn't aluminum and can't be sanded and polished. We work on bare aluminum — factory, forged, dually and semi wheels." },
];

export default function ServicesPage() {
  const ordered = services;
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        eyebrow="What We Offer"
        title="Aluminum Wheel Polishing Services"
        lead={`Eight services, one specialty. Everything is quote-based because no two wheels come in the same condition — call or text ${siteConfig.phoneDisplay}.`}
        crumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
      />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Polishing</h2>
          <p className="mb-8 max-w-2xl text-sm text-black/75">From a fast acid wash to a full mirror inside and out.</p>
          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.filter((s) => ["acid-wash", "full-sand-and-polish", "inner-barrel-polishing"].includes(s.slug)).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Repair &amp; protection</h2>
          <p className="mb-8 max-w-2xl text-sm text-black/75">Fix the damage, restore the details, and keep the shine.</p>
          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.filter((s) => ["curb-rash-repair", "lip-re-engraving", "wheel-ceramic-coating"].includes(s.slug)).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Coating removal</h2>
          <p className="mb-8 max-w-2xl text-sm text-black/75">Polish only works on bare aluminum. These get you there.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.filter((s) => ["clear-coat-removal", "powder-coat-removal"].includes(s.slug)).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">Common questions</h2>
          <FaqList faqs={faqs} />
          <p className="mt-8 text-sm text-black/75">
            More answers on the <Link href="/faq" className="font-semibold text-[var(--blue-ink)] underline">FAQ page</Link>, or{" "}
            <a href={smsHref} className="font-semibold text-[var(--blue-ink)] underline">text us a photo</a>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
