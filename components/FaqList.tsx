import type { Faq } from "@/lib/data/types";

/** Native <details> accordion: keyboard and screen-reader accessible with no JS. */
export default function FaqList({ faqs, headingLevel = 3 }: { faqs: Faq[]; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.question} className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
            <H className="text-sm font-bold tracking-wide text-black sm:text-base">{f.question}</H>
            <span aria-hidden="true" className="ml-2 flex-shrink-0 text-xl text-[var(--blue-ink)] transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <div className="border-t border-black/5 px-5 pb-6 pt-4 text-sm leading-relaxed text-black/75 sm:px-6">{f.answer}</div>
        </details>
      ))}
    </div>
  );
}
