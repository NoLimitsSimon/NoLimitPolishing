import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Reviews | No Limit Polishing",
  description: "See what customers say about No Limit Polishing — premium aluminum wheel polishing in College Station & Houston, TX.",
};

const reviews = [
  {
    name: "Jake M.",
    location: "College Station, TX",
    text: "Brought in my American Force wheels that had been sitting outside for two years — full oxidation, brake dust caked on, the works. Got them back looking better than the day I bought them. The mirror finish on the inside of the barrel caught me completely off guard. Didn't even ask for that. Highly recommend.",
    service: "Full Sand & Polish",
    stars: 5,
  },
  {
    name: "Trey W.",
    location: "Houston, TX",
    text: "I had pretty bad curb rash on two of my KG1s and honestly thought I was gonna have to replace the lips. Dropped them off and No Limit fixed everything — sanded out the damage, brought the finish back, and re-engraved the lettering that got scraped off. Couldn't tell anything had ever happened to them.",
    service: "Curb Rash Repair",
    stars: 5,
  },
  {
    name: "Marcus D.",
    location: "Katy, TX",
    text: "Went with the acid wash first to see what we were working with on my stock dually wheels. The results were better than I expected — dude stripped all that nasty oxidation and road grime off clean. Ended up going back for the full sand and polish on two more sets. Consistently great work.",
    service: "Acid Wash & Polish",
    stars: 5,
  },
  {
    name: "Carlos R.",
    location: "Bryan, TX",
    text: "Super straightforward process. Texted a photo of my wheels, got a quote fast, dropped them off, and had them back looking insane. No upselling, no BS. Just great work done right. The inside of the barrel on my Forgiatos is now mirror — didn't even know that was possible on a wheel that old.",
    service: "Full Sand & Polish",
    stars: 5,
  },
  {
    name: "Derek H.",
    location: "Sugar Land, TX",
    text: "I've been to other polishing shops before and the results were never quite there. No Limit is a completely different level. You can tell they actually care about the finish and don't rush the job. My Stealth Forged wheels look absolutely wild. Will never go anywhere else.",
    service: "Full Sand & Polish",
    stars: 5,
  },
  {
    name: "Anthony L.",
    location: "College Station, TX",
    text: "Got a set of stock aluminum wheels polished on a budget and still walked away blown away. Didn't expect much from stock wheels but the transformation was real. You could see your reflection in them. Great communication throughout and the price was fair for what I got.",
    service: "Acid Wash & Polish",
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
            <a href="https://www.instagram.com/no_limit_polishing/" target="_blank" rel="noopener noreferrer"
              className="border border-black/10 hover:border-[#1e90ff] hover:text-[#1e90ff] text-black font-bold text-sm px-8 py-4 rounded tracking-widest uppercase transition-all duration-200">
              Tag Us on Instagram
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
