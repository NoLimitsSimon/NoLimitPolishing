import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/**
 * Interior page header in No Limit's own language: black field, oversized
 * uppercase type, electric-blue rule — the hero's look without the video.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 pb-16 pt-32 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full border border-[#1e90ff]/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[20rem] w-[20rem] rounded-full border border-[#1e90ff]/10" />
      <div className="relative mx-auto max-w-5xl">
        <Breadcrumbs items={crumbs} dark />
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#4da8ff]">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">{title}</h1>
        <div aria-hidden="true" className="mt-6 h-0.5 w-32 bg-[#1e90ff]" />
        {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
