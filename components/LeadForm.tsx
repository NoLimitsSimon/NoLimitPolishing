"use client";

import { useId, useRef, useState } from "react";

type Option = { value: string; label: string };

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Quote form. Two things the old contact page got wrong are fixed here:
 *  1. It showed "Request Sent!" no matter what — even when the API had no email
 *     key and dropped the lead, or the request threw. Success is now shown only
 *     on a 2xx, and failure tells the customer to call or text instead.
 *  2. Labels weren't tied to their inputs (Lighthouse select-name / label fails).
 *
 * Service and area options come in as props from the server page, so the list
 * can't drift from lib/data and none of that data ships in this bundle.
 */
export default function LeadForm({
  serviceOptions,
  areaOptions,
  defaultService = "",
  defaultArea = "",
  phoneDisplay,
  phoneHref,
  smsHref,
}: {
  serviceOptions: Option[];
  areaOptions: string[];
  defaultService?: string;
  defaultArea?: string;
  phoneDisplay: string;
  phoneHref: string;
  smsHref: string;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const field =
    "w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-base text-black placeholder:text-black/45 focus:border-[var(--blue-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-ink)]/30";
  const label = "mb-2 block text-xs font-bold uppercase tracking-widest text-black/75";

  if (status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="py-12 text-center focus:outline-none">
        <div aria-hidden="true" className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--blue-ink)]">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-black uppercase tracking-wide text-black">Request sent</h3>
        <p className="text-sm text-black/70">
          We&apos;ll reach out to confirm your quote and appointment. Need it sooner? Call or text{" "}
          <a href={phoneHref} className="font-bold text-[var(--blue-ink)] underline">{phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {status === "error" && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="rounded-lg border border-red-700 bg-red-50 p-4 text-sm text-red-900 focus:outline-none">
          Your request didn&apos;t go through. Please call or text{" "}
          <a href={phoneHref} className="font-bold underline">{phoneDisplay}</a> — or try again in a minute.
        </div>
      )}

      {/* Honeypot: hidden from people and assistive tech, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Name <span aria-hidden="true">*</span></label>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>Phone <span aria-hidden="true">*</span></label>
          <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" required autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={label}>Email <span className="font-normal normal-case tracking-normal">(optional)</span></label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-service`} className={label}>Service <span aria-hidden="true">*</span></label>
          <select id={`${id}-service`} name="service" required defaultValue={defaultService} className={field}>
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.label}>{o.label}</option>
            ))}
            <option value="Not sure / multiple">Not sure / multiple</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-area`} className={label}>Your town <span aria-hidden="true">*</span></label>
          <select id={`${id}-area`} name="area" required defaultValue={defaultArea} className={field}>
            <option value="">Select your town</option>
            {areaOptions.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
            <option value="Other">Somewhere else</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-wheels`} className={label}>Wheel info</label>
        <input id={`${id}-wheels`} name="wheels" type="text" placeholder="Brand, size, how many, condition" className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className={label}>Anything else</label>
        <textarea id={`${id}-message`} name="message" rows={4} className={`${field} resize-y`} />
      </div>
      <p className="text-xs text-black/65"><span aria-hidden="true">*</span> Required</p>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request a Quote"}
      </button>
      <p className="pt-1 text-center text-sm text-black/70">
        Prefer to text a photo of your wheels?{" "}
        <a href={smsHref} className="font-bold text-[var(--blue-ink)] underline">Text {phoneDisplay}</a>
      </p>
    </form>
  );
}
