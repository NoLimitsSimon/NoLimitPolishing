import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const SYSTEM = `You are the virtual assistant for No Limit Polishing, a premium aluminum wheel polishing business based in College Station and Houston, TX.

Business info:
- Owner phone: (832) 466-3104 (call or text)
- Instagram & TikTok: @no_limit_polishing
- Locations: College Station, TX and Houston, TX
- Stationary shop — mobile available for special jobs with extra fees
- All pricing is quote-based (no set prices — every wheel is different)

Services offered:
1. Acid Wash — deep chemical strip for oxidation, brake dust, grime. Standalone or pre-polish prep.
2. Full Sanding — mirror polish. Customer chooses: outside only, inside only, or full inside and outside.
3. Inner Barrel Polish — sand and mirror the inside of the barrel as standalone or add-on.
4. Curb Rash Repair — fix lip/barrel damage, re-engrave lettering if the curb rash removed it.
5. Lip Engraving — restore brand lettering depth after polishing or repair.

We do NOT do: chrome-plated wheels, cast wheels. Aluminum only.
We do stock factory wheels AND forged aftermarket wheels.
All jobs are appointment-based — customers request and we confirm.

Respond in a friendly, professional tone. Keep answers concise and useful. If someone wants a quote or appointment, direct them to the contact form on the site or to call/text (832) 466-3104. Never make up prices.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || apiKey === "your_api_key_here") {
    return Response.json({ text: "Our chat assistant isn't configured yet. For the fastest response, call or text us at (832) 466-3104 or fill out the contact form and we'll get back to you shortly!" });
  }

  const { messages } = await req.json();
  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: SYSTEM,
      messages,
    });
    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return Response.json({ text });
  } catch {
    return Response.json({ text: "Something went wrong on our end. Please call or text us at (832) 466-3104 — we respond fast!" });
  }
}
