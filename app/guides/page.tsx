import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { guides } from "@/lib/data/guides";
import { pageMeta } from "@/lib/data/site";

export const metadata = pageMeta({
  title: "Aluminum Wheel Care & Polishing Guides",
  description:
    "Straight answers on polished aluminum wheels: acid wash vs sanding, keeping wheels shining in Texas humidity, and whether coated wheels can be polished.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Know Before You Call"
        title="Wheel Care Guides"
        lead="What we tell customers every week, written down. No sales pitch — just how aluminum wheels work."
        crumbs={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]}
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:border-[var(--blue-ink)]">
              <div className="relative aspect-[4/3]">
                <Image src={g.image.src} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-black uppercase leading-tight tracking-wide text-black group-hover:text-[var(--blue-ink)]">{g.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black/75">{g.summary}</p>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-[var(--blue-ink)]">Read the guide<span aria-hidden="true"> →</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
