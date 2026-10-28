import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/data/site";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail + matching BreadcrumbList schema from one list. */
export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const base = dark ? "text-white/70" : "text-black/60";
  const hover = dark ? "hover:text-white" : "hover:text-[var(--blue-ink)]";
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-widest ${base}`}>
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={dark ? "text-white" : "text-black"}>{c.name}</span>
                ) : (
                  <>
                    <Link href={c.path} className={`underline-offset-4 hover:underline ${hover}`}>{c.name}</Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
