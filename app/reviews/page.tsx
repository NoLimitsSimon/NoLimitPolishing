import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Reviews | No Limit Polishing",
  description: "See what customers say about No Limit Polishing — premium aluminum wheel polishing in College Station & Houston, TX.",
};

const reviews = [
  {
    name: "Kacen E.",
    location: "Texas",
    text: "Duffy has always done an amazing job on my wheels and also good service and fair pricing.",
    service: "Wheel Polishing",
    stars: 5,
  },
  {
    name: "Hayden",
    location: "Texas",
    text: "Easy to deal with. Real good work. Best in the game!",
    service: "Wheel Polishing",
    stars: 5,
  },
  {
    name: "Jose Munoz",
    location: "Texas",
    text: "Called him with no heads up and he fit me in! Competitive prices and an all around great polisher, one of the best in the game. Quick response and quality work! If your wheels are looking yellow or curbed like mine did I highly recommend y'all give him a try!",
    service: "Wheel Polishing",
    stars: 5,
  },
];

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">What People Say</p>
          <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black mb-6">Reviews</h1>
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array(5).fill(null).map((_, i) => (
              <svg key={i} className="w-7 h-7 text-[#1e90ff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p className="text-black/50 text-base">5.0 average · {reviews.length} reviews</p>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} animation="up" delay={(Math.min(i % 3 * 100, 400)) as 0|100|200|300|400|500|600}>
              <div className="card-hover border border-black/5 bg-[#f8f8f8] rounded-2xl p-7 h-full flex flex-col hover:border-[#1e90ff]/20 hover:shadow-md">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array(r.stars).fill(null).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#1e90ff]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-black/70 text-sm leading-relaxed flex-1 mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-black/5 pt-5 flex items-center justify-between">
                  <div>
                    <p className="font-black text-sm text-black uppercase tracking-wide">{r.name}</p>
                    <p className="text-black/40 text-xs mt-0.5">{r.location}</p>
                  </div>
                  <span className="text-xs font-bold text-[#1e90ff] bg-[#1e90ff]/8 px-3 py-1.5 rounded-full">
                    {r.service}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <Reveal animation="up" className="max-w-2xl mx-auto text-center">
          <p className="text-[#1e90ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">Happy With Your Wheels?</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-5">
            Leave Us a Review
          </h2>
          <p className="text-black/50 text-sm mb-10 max-w-md mx-auto">
            Your feedback means everything. Drop a review on Google or hit us on Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://g.page/r/CRBiPRF78iFOECE/review" target="_blank" rel="noopener noreferrer"
              className="border border-black/10 hover:border-[#1e90ff] hover:text-[#1e90ff] text-black font-bold text-sm px-8 py-4 rounded tracking-widest uppercase transition-all duration-200">
              Leave a Google Review
            </a>
            <Link href="/contact" className="glow-btn bg-[#1e90ff] text-white font-black text-sm px-8 py-4 rounded tracking-widest uppercase">
              Book an Appointment
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
