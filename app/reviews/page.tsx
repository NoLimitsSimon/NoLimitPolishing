import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ReviewCard from "@/components/ReviewCard";
import CtaBand from "@/components/CtaBand";
import { reviews } from "@/lib/data/reviews";
import { pageMeta, siteConfig } from "@/lib/data/site";

export const metadata = pageMeta({
  title: "Customer Reviews — Aluminum Wheel Polishing",
  description:
    "What customers say about No Limit Polishing's aluminum wheel polishing — acid wash, mirror polish and curb rash repair. Leave your own Google review.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What People Say"
        title="Customer Reviews"
        lead="Straight from customers. These reviews were left for No Limit Polishing under founder Simon Duffy — the same process and standard carry on in Sealy."
        crumbs={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]}
      />
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
      </section>
      <section className="bg-[#f5f5f5] px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Happy with your wheels?</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">Leave us a review</h2>
          <p className="mx-auto mb-10 max-w-md text-sm text-black/75">Reviews are how other truck owners find us. It takes a minute and it means a lot.</p>
          <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Leave a Google Review<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
      <p className="bg-[#f5f5f5] px-4 pb-16 text-center text-sm text-black/75">
        New to No Limit? <Link href="/about" className="font-semibold text-[var(--blue-ink)] underline">Read about the shop and the ownership change</Link>.
      </p>
      <CtaBand />
    </>
  );
}
