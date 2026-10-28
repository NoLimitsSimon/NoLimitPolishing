import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title="Page not found" lead="That page doesn't exist — it may have moved when the site was rebuilt." crumbs={[{ name: "Home", path: "/" }, { name: "Not found", path: "/404" }]}>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/services" className="btn-primary">Services</Link>
        <Link href="/contact" className="btn-outline-dark">Get a quote</Link>
      </div>
    </PageHeader>
  );
}
