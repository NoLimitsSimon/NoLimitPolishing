export default function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
      <div className="mb-4 flex gap-0.5" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} aria-hidden="true" className="h-4 w-4 text-[#f5a400]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-black/80">&ldquo;{text}&rdquo;</blockquote>
      <figcaption className="mt-5 border-t border-black/5 pt-4 text-sm font-black uppercase tracking-wide text-black">{name}</figcaption>
    </figure>
  );
}
