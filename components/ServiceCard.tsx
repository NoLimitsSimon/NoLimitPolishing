import Link from "next/link";
import type { Service } from "@/lib/data/types";

export default function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--blue-ink)] hover:shadow-md"
    >
      {typeof index === "number" && (
        <span aria-hidden="true" className="mb-3 text-2xl font-black leading-none text-[var(--blue-ink)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3 className="text-lg font-black uppercase tracking-wide text-black group-hover:text-[var(--blue-ink)]">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-black/70">{service.summary}</p>
      <span className="mt-4 text-xs font-bold uppercase tracking-widest text-[var(--blue-ink)]">
        Learn more<span aria-hidden="true"> →</span>
      </span>
    </Link>
  );
}
