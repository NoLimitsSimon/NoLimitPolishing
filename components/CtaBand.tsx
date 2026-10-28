import Link from "next/link";
import { siteConfig, telHref } from "@/lib/data/site";

export default function CtaBand({
  heading = "Ready to make your wheels shine?",
  sub = `Based in ${siteConfig.city}, TX. Every job is quoted — call, text or send the form.`,
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-[#1e90ff]/5" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#4da8ff]">Get Started</p>
        <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">{heading}</h2>
        <p className="mx-auto mb-10 max-w-lg text-base text-white/75">{sub}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
          <a href={telHref} className="btn-outline-dark">Call {siteConfig.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
