import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/data/site";

/**
 * Quote-form delivery.
 *
 * The old route returned { ok: true } when RESEND_API_KEY was missing — and the
 * Vercel project has never had ANY env vars — so every lead since launch was
 * thrown away while the customer saw "Request Sent!". This route now fails
 * loudly (503) when it can't deliver, and the form tells the customer to call.
 *
 * Delivery (first one configured wins):
 *   RESEND_API_KEY (+ RESEND_FROM, a sender on a domain verified in Resend)
 *   WEB3FORMS_KEY  (free; the key is tied to the inbox it delivers to)
 * Recipient: LEAD_TO_EMAIL, else siteConfig.email.
 */

const esc = (v: unknown) =>
  String(v ?? "")
    .slice(0, 2000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot filled → bot. Pretend success so it doesn't retry.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (!name || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const fields: [string, unknown][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", body.email || "—"],
    ["Service", body.service],
    ["Town", body.area],
    ["Wheel info", body.wheels || "—"],
    ["Notes", body.message || "—"],
  ];
  const to = process.env.LEAD_TO_EMAIL || siteConfig.email;
  const subject = `New quote request — ${name.slice(0, 80)}`;
  const html =
    `<h2>New quote request — ${esc(siteConfig.name)}</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">` +
    fields.map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold">${esc(k)}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`).join("") +
    `</table>`;

  try {
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || `${siteConfig.name} <onboarding@resend.dev>`,
          to: [to],
          reply_to: typeof body.email === "string" && body.email.includes("@") ? body.email : undefined,
          subject,
          html,
        }),
      });
      if (!res.ok) throw new Error(`resend ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    if (process.env.WEB3FORMS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", "User-Agent": "Mozilla/5.0 (compatible; NoLimitPolishing/1.0)" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_KEY,
          subject,
          from_name: siteConfig.name,
          ...Object.fromEntries(fields.map(([k, v]) => [k, String(v ?? "").slice(0, 2000)])),
        }),
      });
      if (!res.ok) throw new Error(`web3forms ${res.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  console.error("[contact] NO DELIVERY CONFIGURED — set RESEND_API_KEY or WEB3FORMS_KEY in Vercel. Lead was not delivered:", name, phone);
  return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
}
