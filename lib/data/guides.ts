import type { Guide } from "./types";
import { photos } from "./photos";

/**
 * Informational guides. On the Rangefinder site these were the only pages
 * earning citations in Google's AI answers, because they answer the question
 * someone actually types before they're ready to call. Each one targets a
 * question, not a service keyword, so it doesn't cannibalise a service page —
 * it links to it.
 */
export const guides: Guide[] = [
  {
    slug: "acid-wash-vs-full-sand-and-polish",
    title: "Acid Wash vs. Full Sand & Polish: Which Do Your Wheels Need?",
    shortTitle: "Acid wash vs. full sand & polish",
    metaTitle: "Acid Wash vs Sand & Polish for Aluminum Wheels",
    metaDescription:
      "Acid wash or full sand and polish? How to tell which your aluminum wheels need — oxidation vs scratches, cost, results and how long each lasts.",
    summary:
      "Oxidation sits on top of the metal; scratches are in it. That one difference decides whether a fast acid wash will do or your wheels need sanding.",
    updated: "2026-10-26",
    image: photos.duallyAfter,
    sections: [
      {
        heading: "The short answer",
        body: [
          "If your wheels are dull, gray, chalky or spotted but smooth to the touch, an acid wash and polish will usually bring them back. If you can see or feel scratches, swirl marks, pitting or curb rash, you need a full sand and polish — chemicals can't remove damage that's cut into the metal.",
        ],
      },
      {
        heading: "What an acid wash actually does",
        body: [
          "Bare aluminum reacts with air and water and grows a thin oxide layer. On a polished wheel that shows up as haze, then a chalky white or gray film, then spotting where water dried. Brake dust and road film bake on top of it.",
          "An acid wash uses an aluminum brightener to dissolve that layer and the grime with it. The wheel is rinsed and neutralized, then polished. Because nothing is being sanded, it's the faster and less expensive option, and on wheels that are only oxidized the result is bright and clean.",
        ],
        list: [
          "Removes: oxidation, chalkiness, water spots, brake dust, road film",
          "Doesn't remove: scratches, swirl marks, pitting, curb rash",
          "Best for: work trucks, duallies and factory wheels that have just gone dull",
        ],
      },
      {
        heading: "What a full sand and polish does",
        body: [
          "A full sand and polish starts by machine sanding the wheel to take the surface below the damage. The sanding marks are then removed with progressively finer grits until the surface is smooth, and polishing compounds take it the rest of the way to a mirror.",
          "It's slower and costs more because it's real metal work, spoke by spoke. The payoff is a finish that's deeper and clearer than an acid wash can produce — and it's the only finish worth putting ceramic coating over.",
        ],
        list: [
          "Removes: scratches, swirls, pitting, light-to-moderate curb rash, oxidation",
          "Result: a true mirror finish",
          "Best for: forged wheels, show trucks, anyone who wants the full mirror",
        ],
      },
      {
        heading: "A two-minute test you can do in the driveway",
        body: [
          "Wash one wheel and let it dry. Run a fingernail across the face and the lip. If it glides and the wheel just looks cloudy, it's oxidation — acid wash territory. If your nail catches, or you can see fine circular scratches in direct sun, the damage is in the metal and needs sanding. Peeling or flaking film means a clear coat that has to come off first, whichever route you take.",
        ],
      },
      {
        heading: "How long each one lasts",
        body: [
          "Neither finish is permanent on uncoated aluminum — it will start to oxidize again. How fast depends on washing, weather and miles. A sanded mirror finish starts from a smoother surface, so it tends to stay looking good longer and comes back with a lighter touch-up. Ceramic coating over a fresh full sand and polish slows oxidation the most.",
        ],
      },
    ],
    faqs: [
      { question: "Is acid washing bad for aluminum wheels?", answer: "Not when it's done on bare aluminum and rinsed and neutralized properly. Problems come from leaving acid cleaners on too long, or using them on clear-coated, painted or chrome-plated wheels." },
      { question: "Can I acid wash my wheels myself?", answer: "Aluminum brighteners are sold to the public, but they're strong chemicals that need proper protection and a thorough rinse. Used on the wrong finish or left too long, they can stain or etch. If you're not sure what finish you have, ask first." },
      { question: "Which is cheaper?", answer: "An acid wash and polish costs less because there's no sanding. Every job is quoted on size, design and condition." },
    ],
    relatedServices: ["acid-wash", "full-sand-and-polish", "wheel-ceramic-coating"],
  },
  {
    slug: "how-to-keep-polished-wheels-shining",
    title: "How to Keep Polished Aluminum Wheels Shining in Texas",
    shortTitle: "Keeping polished wheels shining",
    metaTitle: "How to Keep Polished Aluminum Wheels Shining",
    metaDescription:
      "Care for polished aluminum wheels in Texas heat and humidity: what to wash with, what never to use, how often to polish, and when ceramic coating pays off.",
    summary:
      "Polished aluminum starts oxidizing the day it leaves the shop. Here's the routine that keeps it bright — and the cleaners that ruin it.",
    updated: "2026-10-26",
    image: photos.mirrorFinish,
    sections: [
      {
        heading: "Why polished wheels dull so fast here",
        body: [
          "Uncoated polished aluminum is bare metal, and bare aluminum oxidizes. Heat, humidity and rain speed that up, and Gulf Coast Texas has plenty of all three. Add brake dust — which is hot, abrasive and slightly corrosive — and a polished wheel that isn't washed can look hazy within weeks.",
        ],
      },
      {
        heading: "The weekly routine",
        body: ["The single biggest factor is how often brake dust and road film sit on the wheel."],
        list: [
          "Rinse the wheel first to knock off loose grit before you touch it",
          "Wash with a pH-neutral car soap and a soft mitt or brush used only on wheels",
          "Rinse well, including inside the barrel and around the lugs",
          "Dry completely with a clean microfiber — water spots etch into bare aluminum",
          "Wash wheels in the shade when they're cool, never hot off the highway",
        ],
      },
      {
        heading: "What never to put on polished aluminum",
        body: ["Most damage to polished wheels comes from the wrong cleaner, not from driving."],
        list: [
          "Acid-based or 'all-wheel' cleaners from the auto parts store — fine on painted wheels, harsh on bare polish",
          "Degreasers and tire shine overspray left to dry on the face",
          "Stiff brushes, scouring pads or dirty towels that have touched tires",
          "Automatic car washes that spray strong chemicals on wheels",
        ],
      },
      {
        heading: "Polishing between visits",
        body: [
          "A quality aluminum metal polish applied by hand every month or two — more often on a daily driver — takes off light oxidation before it builds. Work in small sections, buff off with a clean microfiber, and expect a little black residue on the towel; that's oxidation coming off.",
          "When hand polishing stops bringing it back, it's time for a professional acid wash and polish, or a full sand and polish if scratches have built up.",
        ],
      },
      {
        heading: "When ceramic coating is worth it",
        body: [
          "If you won't hand polish regularly, ceramic coating applied over a fresh full sand and polish is the best upgrade. It puts a hard, slick layer over the metal so brake dust and water wash off instead of sitting on it. You still wash the wheels — you just stop polishing them.",
        ],
      },
    ],
    faqs: [
      { question: "How often should polished aluminum wheels be polished?", answer: "By hand, every month or two for a daily driver; a professional polish when hand polish no longer brings them back. Ceramic-coated wheels mostly need washing." },
      { question: "Can I use a regular wheel cleaner on polished wheels?", answer: "Avoid acid-based and strong 'all-wheel' cleaners. A pH-neutral car soap is the safest choice for bare polished aluminum." },
    ],
    relatedServices: ["wheel-ceramic-coating", "acid-wash", "full-sand-and-polish"],
  },
  {
    slug: "can-you-polish-coated-wheels",
    title: "Can You Polish Clear-Coated, Powder-Coated or Anodized Wheels?",
    shortTitle: "Polishing coated wheels",
    metaTitle: "Can You Polish Clear Coated or Powder Coated Wheels?",
    metaDescription:
      "Polish won't go through clear coat, powder coat or anodizing. How to tell which finish your wheels have and what it takes to strip and polish them.",
    summary:
      "Polish only works on bare aluminum. If your wheels have a coating, it has to come off first — here's how to tell what you have.",
    updated: "2026-10-26",
    image: photos.deepLipBefore,
    sections: [
      {
        heading: "The short answer",
        body: [
          "Not directly. Metal polish works on bare aluminum. Clear coat, powder coat and anodizing are layers on top of the metal, and polishing them just scuffs or hazes the coating. To get a polished aluminum finish, the coating has to be stripped completely first — then the wheel can be acid washed or sanded and polished like any other.",
        ],
      },
      {
        heading: "How to tell which finish you have",
        body: [],
        list: [
          "Clear coat: looks like polished or machined aluminum but with a glossy film. As it fails it yellows, clouds and peels or flakes at the edges.",
          "Powder coat: a thick, solid color — black, bronze, gloss or satin. Chips show bare metal underneath.",
          "Anodizing: color that looks like it's in the metal rather than on it, often satin or tinted. It fades rather than peels.",
          "Bare aluminum: no film at all. It dulls to gray or chalky white but never peels.",
        ],
      },
      {
        heading: "What stripping involves",
        body: [
          "Each finish comes off differently. Clear coat is the most straightforward; powder coat is thicker and slower; anodizing is a chemical layer that needs its own method. In every case the goal is clean, bare aluminum in every spoke corner — any coating left behind shows up as a dull patch once the wheel is polished.",
          "After stripping, most wheels go straight into a full sand and polish. Stripping alone leaves bare metal that looks raw, not finished.",
        ],
      },
      {
        heading: "Is it worth it?",
        body: [
          "If the coating is failing anyway, yes — polished aluminum can be maintained by hand indefinitely and never peels. Some cast wheels have small porosity under the factory coating that becomes visible once polished; a good shop will tell you if it sees that before you commit.",
        ],
      },
    ],
    faqs: [
      { question: "Will polishing compound remove clear coat?", answer: "Not cleanly. It may cut through in spots and leave a patchy mess. Clear coat should be fully stripped before polishing." },
      { question: "Can chrome-plated wheels be polished like aluminum?", answer: "No. Chrome plating is a different metal layer and can't be sanded and polished the way aluminum can." },
    ],
    relatedServices: ["clear-coat-removal", "powder-coat-removal", "full-sand-and-polish"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
