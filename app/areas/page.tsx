import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { areas } from "@/lib/data/areas";
import { pageMeta, siteConfig } from "@/lib/data/site";

export const metadata = pageMeta({
  title: "Wheel Polishing Service Areas | Sealy, Katy & More",
  description:
    "Serving Sealy, Katy, Brookshire, Fulshear, Bellville, Columbus, Rosenberg and West Houston from our Sealy, TX shop. Distances and how drop-off works.",
  path: "/areas",
  absoluteTitle: true,
});

export default function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where We Work"
        title="Wheel Polishing Service Areas"
        lead={`Based in ${siteConfig.city}, TX, on I-10 between Houston and Columbus. Appointments Mon–Sat; drop-off details are sent once your appointment is confirmed.`}
        crumbs={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/areas" }]}
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-colors hover:border-[var(--blue-ink)]">
              <p className="text-xs font-bold uppercase tracking-widest text-black/65">{a.tier === "home" ? "Home base" : a.county}</p>
              <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-black group-hover:text-[var(--blue-ink)]">{a.city}, TX</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/75">{a.distance}</p>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[var(--blue-ink)]">Wheel polishing in {a.city}<span aria-hidden="true"> →</span></span>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl bg-[#f5f5f5] p-7">
          <h2 className="text-lg font-black uppercase tracking-tight text-black">Also serving</h2>
          <p className="mt-2 text-sm text-black/75">
            San Felipe and Wallis (minutes from <Link href="/areas/sealy-tx" className="font-semibold text-[var(--blue-ink)] underline">Sealy</Link>), and Waller and Hempstead (north of <Link href="/areas/brookshire-tx" className="font-semibold text-[var(--blue-ink)] underline">Brookshire</Link>). Somewhere else? Ask — mobile service is available for larger jobs.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
