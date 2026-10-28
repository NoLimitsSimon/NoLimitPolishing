import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import { pageMeta, siteConfig, telHref, smsHref } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export const metadata = pageMeta({
  title: "Get a Free Wheel Polishing Quote — Sealy, TX",
  description: `Request a free quote for aluminum wheel polishing in Sealy, TX. Call or text ${siteConfig.phoneDisplay}, text a photo, or send the form — every request answered personally.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Talk"
        title="Get a Free Quote"
        lead="The fastest quote is a photo: text one to us and we'll come back with a straight number. Or send the form and we'll reach out to confirm."
        crumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="rounded-2xl border border-black/10 bg-[#f8f8f8] p-8 shadow-sm sm:p-12 lg:col-span-3">
            <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-black">Request a quote</h2>
            <p className="mb-8 text-sm text-black/70">Every request is reviewed personally before your appointment is confirmed.</p>
            <LeadForm
              serviceOptions={services.map((s) => ({ value: s.slug, label: s.name }))}
              areaOptions={[...siteConfig.serviceAreas]}
              phoneDisplay={siteConfig.phoneDisplay}
              phoneHref={telHref}
              smsHref={smsHref}
            />
          </div>
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl bg-[#050505] p-8 text-white">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#4da8ff]">Call or text</h2>
              <a href={telHref} className="mt-2 block text-3xl font-black tracking-tight text-white hover:text-[#4da8ff]">{siteConfig.phoneDisplay}</a>
              <a href={smsHref} className="btn-primary mt-6 w-full">Text a photo</a>
            </div>
            <div className="rounded-2xl border border-black/10 p-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-black">Location</h2>
              <p className="mt-2 text-sm text-black/80">{siteConfig.city}, {siteConfig.region} {siteConfig.postalCode}<br />By appointment — drop-off details are sent when your appointment is confirmed.</p>
              <h2 className="mt-6 text-sm font-bold uppercase tracking-widest text-black">Hours</h2>
              <ul className="mt-2 text-sm text-black/80">
                {siteConfig.hours.map((h) => <li key={h.days}>{h.days}: {h.hours}</li>)}
              </ul>
              <h2 className="mt-6 text-sm font-bold uppercase tracking-widest text-black">Service area</h2>
              <p className="mt-2 text-sm text-black/80">{siteConfig.serviceAreas.join(", ")}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
