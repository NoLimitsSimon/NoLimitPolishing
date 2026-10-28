import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { pageMeta, siteConfig } from "@/lib/data/site";
import { photos } from "@/lib/data/photos";

export const metadata = pageMeta({
  title: "About No Limit Polishing | Sealy, TX",
  description:
    "No Limit Polishing is an aluminum wheel polishing shop in Sealy, TX, owned by Connor Morgan. Founded by Simon Duffy; serving Austin County, Katy and West Houston.",
  path: "/about",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About No Limit Polishing"
        lead={`An aluminum wheel polishing shop in ${siteConfig.city}, TX. One specialty, no shortcuts.`}
        crumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">Built on one thing: aluminum done right</h2>
            <div className="prose-nlp">
              <p>
                No Limit Polishing was founded by {siteConfig.founder} on a simple standard — quality craftsmanship, attention to detail, and wheels that come back looking better than the day they left the factory. It grew by word of mouth among truck owners who wanted a real mirror finish, not a quick buff.
              </p>
              <p>
                In 2026 the business — the name, the process, the equipment and the customer relationships — passed to <strong>{siteConfig.owner}</strong>, who moved the shop to {siteConfig.city}, TX. Same services, same standard, now based on I-10 in Austin County.
              </p>
              <p>
                Forged truck wheels remain the specialty, but every set gets the same care: factory aluminum on a work truck, a set of six duallies, or a 24-inch forged set with a deep lip. Every job is quoted honestly, and nothing goes back on a truck until it meets the standard.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">Get a Quote</Link>
              <Link href="/services" className="btn-outline-light">Our Services</Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
            <Image src={photos.onStand.src} alt={photos.onStand.alt} fill preload fetchPriority="high" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">What sets us apart</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "No shortcuts", desc: "Every wheel is worked spoke by spoke and inspected in daylight before it goes back. If it's not right, it's not done." },
              { title: "All aluminum", desc: "Stock factory, forged aftermarket, dually fronts and rears, semi wheels and inner barrels — if it's aluminum, we polish it." },
              { title: "Straight quotes", desc: "Text a photo and get a real number. No hidden fees, no upsell to services your wheels don't need." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-black/10 bg-white p-8 text-center shadow-sm">
                <div aria-hidden="true" className="mx-auto mb-6 h-0.5 w-10 bg-[#1e90ff]" />
                <h3 className="mb-3 text-xl font-black uppercase tracking-wide text-black">{v.title}</h3>
                <p className="text-sm leading-relaxed text-black/75">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-black uppercase tracking-tight text-black">Recent work</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[photos.mirrorFinish, photos.duallyAfter, photos.mudTire, photos.ranchDually].map((p) => (
              <div key={p.src} className="relative aspect-square overflow-hidden rounded-xl shadow-sm">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
