import PageHeader from "@/components/PageHeader";
import { pageMeta, siteConfig, telHref } from "@/lib/data/site";

export const metadata = pageMeta({
  title: "Accessibility Statement",
  description: "No Limit Polishing's commitment to an accessible website (WCAG 2.1 AA), the features available, and how to reach us if anything gets in your way.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader eyebrow="Accessibility" title="Accessibility Statement" crumbs={[{ name: "Home", path: "/" }, { name: "Accessibility", path: "/accessibility" }]} />
      <section className="px-4 py-16">
        <div className="prose-nlp mx-auto max-w-3xl">
          <p>{siteConfig.name} wants everyone to be able to use this website. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.</p>
          <h2 className="!mt-10 text-2xl font-black uppercase tracking-tight text-black">What we&apos;ve done</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-black/80">
            <li>Text and buttons meet AA color-contrast ratios.</li>
            <li>Every page can be used with a keyboard, with a visible focus outline and a &ldquo;Skip to main content&rdquo; link.</li>
            <li>Images have descriptive text alternatives; decorative graphics are hidden from screen readers.</li>
            <li>Form fields have visible labels, and errors are announced.</li>
            <li>Background videos can be paused, and all animation stops if your device is set to reduce motion.</li>
            <li>An accessibility menu (bottom-left button) lets you enlarge text, raise contrast, stop animations and underline links.</li>
          </ul>
          <h2 className="!mt-10 text-2xl font-black uppercase tracking-tight text-black">Need help?</h2>
          <p>If anything on this site is hard to use, call or text <a href={telHref}>{siteConfig.phoneDisplay}</a> and we&apos;ll help you directly — and fix the problem.</p>
        </div>
      </section>
    </>
  );
}
