import type { Area } from "./types";
import { photos } from "./photos";

/**
 * Service-area pages. Lesson carried over from the Rangefinder build: a page per
 * town only earns indexing if it says something true and specific about that
 * town — route, distance, what the trucks there need, how drop-off works. City-
 * name-swapped boilerplate gets one page indexed and the rest dropped
 * ("Duplicate, Google chose different canonical"). So:
 *   - 8 pages, not 12: the four smallest GBP towns (San Felipe, Wallis, Waller,
 *     Hempstead) are served and listed but folded into their nearest page.
 *   - NO service x city combo pages. Rangefinder built 187 of them and pruned
 *     133 after they earned almost nothing.
 * Distances are approximate road miles from Sealy.
 */
export const areas: Area[] = [
  {
    slug: "sealy-tx",
    photo: photos.ranchDually,
    city: "Sealy",
    county: "Austin County",
    tier: "home",
    lat: 29.7808,
    lng: -96.1572,
    metaTitle: "Wheel Polishing in Sealy, San Felipe & Wallis, TX",
    metaDescription:
      "Local wheel polishing for Sealy, San Felipe and Wallis — acid wash, mirror polish, curb rash repair and coating for trucks and duallies. (830) 992-8932.",
    distance: "Home base — Sealy, Austin County, on I-10 between Houston and Columbus.",
    intro: [
      "No Limit Polishing is based in Sealy. If you live in town, out toward San Felipe, or down toward Wallis, you're a few minutes from a shop that does nothing but aluminum wheels — no detailing add-ons, no tire sales, just polish.",
      "Sealy sits right where Houston's western suburbs give way to ranch country, and the trucks around here reflect both: lifted half-tons on forged wheels that need a show finish, and three-quarter and one-ton work trucks and duallies whose factory aluminum has gone chalky from hauling and weather.",
    ],
    whatWeSee:
      "Ranch and work duallies with oxidized factory wheels, stock trailers' worth of brake dust on the rears, and lifted trucks on forged wheels that need curb rash taken out after a tight parking lot. An acid wash and polish handles most work trucks; forged sets usually get the full sand and polish.",
    logistics:
      "Appointments are booked by phone, text or the quote form. Once your appointment is confirmed you'll get drop-off details. From Sealy, San Felipe or Wallis it's a few minutes each way for drop-off and pickup.",
    popularServices: ["acid-wash", "full-sand-and-polish", "curb-rash-repair"],
    nearby: ["bellville-tx", "brookshire-tx", "katy-tx", "columbus-tx"],
    faqs: [
      { question: "Do you serve San Felipe and Wallis too?", answer: "Yes — both are a short drive from Sealy and are part of our regular service area. Book the same way: call, text or use the quote form." },
      { question: "Where in Sealy are you located?", answer: "We work by appointment, so we don't list a street address publicly. Drop-off details are sent when your appointment is confirmed." },
    ],
  },
  {
    slug: "katy-tx",
    photo: photos.forgedAfter,
    city: "Katy",
    county: "Harris, Fort Bend & Waller Counties",
    tier: "near",
    lat: 29.7858,
    lng: -95.8245,
    metaTitle: "Wheel Polishing in Katy, TX | Forged & Truck Wheels",
    metaDescription:
      "Wheel polishing for Katy, TX trucks — forged wheel mirror polish, curb rash repair and ceramic coating. About 20 minutes west on I-10 in Sealy. Free quotes.",
    distance: "About 18 miles west of Katy on I-10 — roughly a 20-minute drive without traffic.",
    intro: [
      "Katy has more lifted trucks on forged wheels per block than almost anywhere around Houston, and most of them spend their lives in parking lots, school pickup lines and new-construction streets. That combination is hard on a polished lip.",
      "We're a straight shot west on I-10 in Sealy, so Katy customers skip the drive into the city and get a shop that only does aluminum wheels.",
    ],
    whatWeSee:
      "Forged wheels with curb rash from tight parking, deep lips that have gone hazy, and clear-coated aftermarket wheels that have started to peel. Ceramic coating makes the most sense here — daily drivers that won't get polished often benefit the most.",
    logistics:
      "Book by phone, text or the quote form and we'll confirm a drop-off time that works around I-10 traffic — the drive is easiest outside rush hour.",
    popularServices: ["full-sand-and-polish", "curb-rash-repair", "wheel-ceramic-coating"],
    nearby: ["brookshire-tx", "fulshear-tx", "sealy-tx", "houston-tx"],
    faqs: [
      { question: "Is it worth driving from Katy to Sealy for wheel polishing?", answer: "It's about 20 minutes west on I-10, against the main commuter traffic most of the day. You get a shop that specializes in aluminum wheels instead of a detailer that polishes them on the side." },
      { question: "Can you fix curb rash on one Katy parking-lot wheel?", answer: "Yes. One wheel or a full set — we blend the repair and polish the lip so it matches the others." },
    ],
  },
  {
    slug: "brookshire-tx",
    photo: photos.duallyAfter,
    city: "Brookshire",
    county: "Waller County",
    tier: "near",
    lat: 29.786,
    lng: -95.9511,
    metaTitle: "Wheel Polishing Near Brookshire, TX | Trucks & Duallies",
    metaDescription:
      "Aluminum wheel polishing near Brookshire, TX — acid wash for work trucks and duallies, full mirror polish for forged sets. 10 minutes west in Sealy.",
    distance: "About 10 miles west of Brookshire on I-10 — around a 10-minute drive.",
    intro: [
      "Brookshire sits between Katy's growth and the open country to the west, with a lot of warehouses, distribution yards and the trucks that work them. Aluminum wheels on hard-working trucks oxidize fast — brake dust, highway film and sun do it in a season or two.",
      "We're one exit-hop west in Sealy, close enough to drop wheels off on the way to work and pick them up on the way home. Waller and Hempstead customers to the north are in our service area too.",
    ],
    whatWeSee:
      "Work trucks and duallies whose factory aluminum has gone gray, and fleet-style wheels that just need to look right again without a show-car price. An acid wash and polish is usually the right call.",
    logistics:
      "Call, text or send the quote form. Larger jobs — several trucks or a full set of duallies — can be scheduled together; ask about mobile service for multi-truck jobs.",
    popularServices: ["acid-wash", "full-sand-and-polish", "inner-barrel-polishing"],
    nearby: ["katy-tx", "sealy-tx", "fulshear-tx"],
    faqs: [
      { question: "Do you serve Waller and Hempstead?", answer: "Yes. Both are in our service area — Hempstead is roughly 30 miles from the shop and Waller a little less. Book the same way and we'll set up a drop-off time." },
      { question: "Can you do several work trucks at once?", answer: "Yes. Multi-truck and dually jobs get quoted together, and mobile service is available case by case for larger jobs." },
    ],
  },
  {
    slug: "fulshear-tx",
    photo: photos.onStand,
    city: "Fulshear",
    county: "Fort Bend County",
    tier: "near",
    lat: 29.6936,
    lng: -95.8999,
    metaTitle: "Wheel Polishing for Fulshear, TX | Mirror Finish & Coating",
    metaDescription:
      "Fulshear, TX wheel polishing — full sand & mirror polish, ceramic coating and inner barrels for forged truck wheels. About 25 minutes from our Sealy shop.",
    distance: "Around 20 miles from Fulshear to Sealy via FM 359 and I-10 — about 25 minutes.",
    intro: [
      "Fulshear has grown fast, and a lot of the trucks in those new neighborhoods are someone's pride and joy — lifted, on big forged wheels, washed every weekend. Those owners want a finish that holds up, not a quick shine.",
      "That's the customer a full sand and polish with ceramic coating is built for. We're about 25 minutes away in Sealy.",
    ],
    whatWeSee:
      "High-spoke-count forged wheels that are slow to keep clean, inner barrels nobody has ever polished, and owners who want the shine to last between washes. Full sand & polish plus ceramic coating is the combination that fits.",
    logistics:
      "Request a quote with your wheel brand, size and condition (photos help). We'll confirm a drop-off time and give you a realistic turnaround for the set.",
    popularServices: ["full-sand-and-polish", "wheel-ceramic-coating", "inner-barrel-polishing"],
    nearby: ["katy-tx", "brookshire-tx", "rosenberg-tx"],
    faqs: [
      { question: "How long does a full sand, polish and coating take on a forged set?", answer: "It depends on spoke count, lip depth and condition. A simple design moves faster than a 20-spoke deep-lip set. You'll get a real turnaround with the quote." },
    ],
  },
  {
    slug: "bellville-tx",
    photo: photos.duallyRearAfter,
    city: "Bellville",
    county: "Austin County",
    tier: "near",
    lat: 29.9502,
    lng: -96.2572,
    metaTitle: "Wheel Polishing Near Bellville, TX | Ranch & Work Trucks",
    metaDescription:
      "Wheel polishing for Bellville and Austin County — acid wash for ranch trucks and duallies, mirror polish for forged wheels. 15 miles south in Sealy.",
    distance: "About 15 miles south of Bellville on TX-36 — roughly 20 minutes.",
    intro: [
      "Bellville is the Austin County seat and the heart of the county's ranch country. The trucks that come from up TX-36 tend to be working trucks first — three-quarter and one-tons, duallies, rigs that pull trailers — and their wheels show it.",
      "We're the county's own aluminum polishing shop, 20 minutes down the highway in Sealy.",
    ],
    whatWeSee:
      "Dually rears caked with brake dust from towing, factory aluminum that's gone chalky from sun and pasture dust, and owners who want the truck to look as good as it works. An acid wash and polish usually handles it; inner barrels on dually rears are a worthwhile add-on.",
    logistics:
      "Book by phone or text. If you're bringing a dually, tell us whether you want fronts, rears or all six so we quote the right job.",
    popularServices: ["acid-wash", "inner-barrel-polishing", "full-sand-and-polish"],
    nearby: ["sealy-tx", "columbus-tx", "brookshire-tx"],
    faqs: [
      { question: "Do you polish dually rears?", answer: "Yes — fronts, rears or all six. Rears that face out are a good candidate for inner barrel polishing too." },
    ],
  },
  {
    slug: "columbus-tx",
    photo: photos.mirrorFinish,
    city: "Columbus",
    county: "Colorado County",
    tier: "near",
    lat: 29.7066,
    lng: -96.5397,
    metaTitle: "Wheel Polishing for Columbus, TX | Aluminum Truck Wheels",
    metaDescription:
      "Aluminum wheel polishing for Columbus and Colorado County, TX. Acid wash, full mirror polish and curb rash repair — 25 miles east on I-10 in Sealy.",
    distance: "About 25 miles east of Columbus on I-10 — around 25 minutes.",
    intro: [
      "Columbus sits on I-10 halfway between Houston and San Antonio, and plenty of the trucks around Colorado County spend real miles on that interstate. Highway miles mean road film and brake dust — the two things that dull aluminum fastest.",
      "We're the closest dedicated aluminum wheel polishing shop east of town, straight down I-10 in Sealy.",
    ],
    whatWeSee:
      "Highway-mile trucks with dull, filmed-over wheels, ag trucks and duallies, and the occasional set of semi wheels. Most need an acid wash and polish; wheels with scratches or rash go to a full sand and polish.",
    logistics:
      "Request a quote, and we'll set a drop-off time. If you're coming in on I-10 for a Houston trip anyway, we can often line up drop-off and pickup around it.",
    popularServices: ["acid-wash", "full-sand-and-polish", "curb-rash-repair"],
    nearby: ["sealy-tx", "bellville-tx"],
    faqs: [
      { question: "Do you polish semi truck wheels?", answer: "If they're aluminum, yes. Tell us how many wheels and their condition so we can quote it properly." },
    ],
  },
  {
    slug: "rosenberg-tx",
    photo: photos.deepLipAfter,
    city: "Rosenberg",
    county: "Fort Bend County",
    tier: "metro",
    lat: 29.5572,
    lng: -95.8086,
    metaTitle: "Wheel Polishing for Rosenberg, TX | No Limit Polishing",
    metaDescription:
      "Rosenberg and Richmond, TX wheel polishing — forged wheel mirror polish, curb rash repair, clear coat and powder coat removal. About 30 minutes to Sealy.",
    distance: "About 25 miles from Rosenberg to Sealy, north on TX-36 — around 30 minutes.",
    intro: [
      "Rosenberg and Richmond are the south end of our service area — a straight run up TX-36 through Wallis to Sealy, which avoids the Houston freeways entirely.",
      "A lot of what comes from this side of Fort Bend is wheels that need more than a shine: clear coat that's peeling, powder coat someone is tired of, or rash on a lip that needs to be blended out properly.",
    ],
    whatWeSee:
      "Aftermarket wheels with failing clear coat or faded powder coat that owners want stripped and polished, plus forged truck wheels that need curb rash repair and lip re-engraving.",
    logistics:
      "Send the quote form with photos if you can — coatings are easier to identify from a picture. We'll confirm the job and a drop-off time.",
    popularServices: ["clear-coat-removal", "powder-coat-removal", "curb-rash-repair"],
    nearby: ["fulshear-tx", "sealy-tx", "katy-tx"],
    faqs: [
      { question: "Can you strip powder coat and polish the wheels in one job?", answer: "Yes. Powder coat or anodizing removal followed by a full sand and polish is a common combination." },
    ],
  },
  {
    slug: "houston-tx",
    photo: photos.lipCloseup,
    city: "Houston",
    county: "Harris County",
    tier: "metro",
    lat: 29.7604,
    lng: -95.3698,
    metaTitle: "Aluminum Wheel Polishing for Houston, TX | West of the City",
    metaDescription:
      "Houston-area aluminum wheel polishing: forged wheel mirror polish, curb rash repair, ceramic coating. A specialist shop west of the city on I-10 in Sealy.",
    distance: "About 50 miles west of downtown Houston on I-10 — closer from the Energy Corridor and west side.",
    intro: [
      "No Limit Polishing started out serving Houston, and Houston customers are still welcome. The shop is now based in Sealy, about 50 miles west of downtown on I-10 — a much easier trip from the Energy Corridor, Cypress and the west side than from the east.",
      "What you get for the drive is a shop that does one thing. Aluminum wheels are the whole business, not a menu item next to window tint and detailing packages.",
    ],
    whatWeSee:
      "Forged truck wheels on show builds that need the full mirror and ceramic coating, curb rash from city parking, and factory aluminum on daily drivers that just needs to look new again.",
    logistics:
      "Send a quote request with your wheel details. For larger Houston jobs — full sets with inner barrels and coating, or more than one truck — ask about mobile service.",
    popularServices: ["full-sand-and-polish", "wheel-ceramic-coating", "curb-rash-repair"],
    nearby: ["katy-tx", "brookshire-tx", "fulshear-tx"],
    faqs: [
      { question: "Do you have a Houston location?", answer: "Not anymore — the shop is in Sealy, about 50 miles west of downtown on I-10. Houston customers drop off by appointment, and mobile service is available for larger jobs." },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
