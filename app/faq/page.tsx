import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { pageMeta, faqSchema, siteConfig } from "@/lib/data/site";

export const metadata = pageMeta({
  title: "Wheel Polishing FAQ — Cost, Timing, Drop-Off",
  description:
    "How much wheel polishing costs, how long it takes, where to drop off in Sealy, TX, what wheels we work on and how to book. Straight answers from No Limit Polishing.",
  path: "/faq",
});

const groups: { heading: string; faqs: { question: string; answer: string }[] }[] = [
  {
    heading: "Pricing & booking",
    faqs: [
      { question: "How much does wheel polishing cost?", answer: `Every job is custom-quoted on wheel size, design, condition and scope — inside, outside or both, plus any repair, coating or coating removal. Text a photo to ${siteConfig.phoneDisplay} for the fastest straight number. No hidden fees.` },
      { question: "How do I book?", answer: `Send the quote form, or call or text ${siteConfig.phoneDisplay}. Every request is reviewed personally, and your appointment is confirmed before anything is locked in.` },
      { question: "What are your hours?", answer: "By appointment, Monday through Saturday, 8 AM to 6 PM. Closed Sunday." },
    ],
  },
  {
    heading: "Location & drop-off",
    faqs: [
      { question: "Where are you located?", answer: `We're in ${siteConfig.city}, TX ${siteConfig.postalCode}, on I-10 between Houston and Columbus. We work by appointment, so drop-off details are sent when your appointment is confirmed.` },
      { question: "Do you still have College Station and Houston locations?", answer: "No. The business moved to Sealy in 2026. Houston-area customers are still served — Katy and the west side are a short drive — and mobile service is available for larger jobs." },
      { question: "Do you come to me?", answer: "Mostly drop-off. Mobile service is available case by case for larger jobs, like several trucks or a full set of duallies. Ask when you request a quote." },
    ],
  },
  {
    heading: "Wheels & results",
    faqs: [
      { question: "What kinds of wheels do you polish?", answer: "Aluminum wheels: stock factory wheels, forged aftermarket sets, dually fronts and rears, and semi wheels. We don't polish chrome-plated wheels — that's plating, not aluminum." },
      { question: "How long does a job take?", answer: "It depends on scope. An acid wash and polish on a set of four moves quickly; a full inside-and-out sand and polish on a forged set with a deep lip takes longer. You'll get an honest turnaround with your quote." },
      { question: "How long will the shine last?", answer: "Uncoated polished aluminum slowly oxidizes again; how fast depends on washing, weather and miles. Ceramic coating over a fresh full sand and polish makes it last much longer between touch-ups." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(groups.flatMap((g) => g.faqs))} />
      <PageHeader
        eyebrow="Got Questions"
        title="Wheel Polishing FAQ"
        lead={`Still have a question? Call or text ${siteConfig.phoneDisplay}.`}
        crumbs={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]}
      />
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-14">
          {groups.map((g) => (
            <div key={g.heading}>
              <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-black">{g.heading}</h2>
              <FaqList faqs={g.faqs} />
            </div>
          ))}
          <p className="text-sm text-black/75">
            Service-specific questions are answered on each <Link href="/services" className="font-semibold text-[var(--blue-ink)] underline">service page</Link>, and the <Link href="/guides" className="font-semibold text-[var(--blue-ink)] underline">wheel care guides</Link> go deeper.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
