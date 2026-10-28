import type { Service } from "./types";
import { photos } from "./photos";

/**
 * One page per service. Keyword map (each primary owned by exactly one URL):
 *   /                                   aluminum wheel polishing Sealy TX
 *   /services                           wheel polishing services
 *   /services/acid-wash                 acid wash wheels
 *   /services/full-sand-and-polish      wheel sanding and mirror polish
 *   /services/inner-barrel-polishing    inner barrel polishing
 *   /services/curb-rash-repair          curb rash repair
 *   /services/lip-re-engraving          wheel lip re-engraving
 *   /services/wheel-ceramic-coating     ceramic coating for wheels
 *   /services/clear-coat-removal        wheel clear coat removal
 *   /services/powder-coat-removal       powder coat & anodizing removal
 */
export const services: Service[] = [
  {
    slug: "acid-wash",
    name: "Acid Wash & Polish",
    primaryKeyword: "acid wash wheels",
    metaTitle: "Acid Wash Wheels in Sealy, TX | Oxidation Removal",
    metaDescription:
      "Acid wash for aluminum wheels in Sealy, TX. Strips oxidation, brake dust and road film, then polished back to shine. Quote-based pricing — call or text.",
    h1: "Acid Wash Wheels in Sealy, TX",
    tagline: "Chalky, dull aluminum brought back without sanding a thing.",
    summary: "Chemical strip of oxidation, brake dust and road film, finished with a polish. The fastest way back to bright.",
    image: photos.duallyBefore,
    intro: [
      "Bare aluminum oxidizes. Leave a set of wheels on a work truck through a couple of Texas summers and the bright finish turns chalky, then gray, then spotted where water dried on it. Brake dust bakes into the face around the lugs. None of that is a scratch — it is a layer sitting on top of the metal, and an acid wash is how it comes off.",
      "We apply an aluminum brightener to the wheel, let it work on the oxidation and grime, and rinse it off before it touches anything it shouldn't. What's left is clean, bright aluminum that takes a polish fast. For most work trucks and duallies that have never been abused, an acid wash and polish is the whole job.",
      "If the wheel also has scratches, curb rash or swirl marks, an acid wash alone won't remove them — that is what a full sand and polish is for. We'll tell you which one your wheels actually need when we see them.",
    ],
    whatsIncluded: [
      "Pre-rinse and degrease of face, spokes and lip",
      "Aluminum brightener applied and worked by hand",
      "Thorough neutralizing rinse so no chemical is left on the metal",
      "Machine polish of the face and lip",
      "Final wipe-down and inspection in sunlight",
    ],
    process: [
      { title: "Look at the wheel", description: "We check for clear coat, powder coat or anodizing first — acid wash is for bare aluminum, and coated wheels need the coating stripped before anything else." },
      { title: "Strip", description: "Brightener goes on, oxidation and brake dust lift off, and the wheel is rinsed clean." },
      { title: "Polish", description: "Compound and buffing bring the cleaned aluminum up to a bright, reflective finish." },
      { title: "Hand back", description: "You get the wheels back with simple care instructions so the shine lasts." },
    ],
    goodFit: [
      "Factory aluminum wheels that have gone dull, gray or chalky",
      "Semi and dually wheels with heavy brake dust and road film",
      "Forged wheels that were polished once and have oxidized since",
      "Anyone who wants bright wheels without paying for full sanding",
    ],
    notFit: [
      "Wheels with curb rash, deep scratches or swirl marks (see Full Sand & Polish)",
      "Clear-coated, powder-coated or anodized wheels — the coating has to come off first",
    ],
    pricingNote: "Priced per wheel by size and condition. A set of four or a set of six duallies gets quoted together.",
    faqs: [
      { question: "Is an acid wash safe for my wheels?", answer: "On bare aluminum, done correctly, yes. The brightener is rinsed off completely and the wheel is neutralized before polishing. What damages wheels is leaving acid cleaners on too long or using them on coated or chrome-plated wheels, which we don't do." },
      { question: "How long does an acid wash last?", answer: "The wash removes what is on the wheel; how long it stays bright depends on driving and washing. Uncoated polished aluminum starts to oxidize again over months. Regular washing and an occasional metal polish keep it looking good, and ceramic coating (paired with a full sand & polish) slows it down a lot." },
      { question: "Will an acid wash remove scratches?", answer: "No. It removes oxidation, staining and baked-on grime. Scratches, gouges and curb rash need sanding." },
    ],
    related: ["full-sand-and-polish", "wheel-ceramic-coating", "clear-coat-removal"],
    guide: "acid-wash-vs-full-sand-and-polish",
  },
  {
    slug: "full-sand-and-polish",
    name: "Full Sand & Polish",
    primaryKeyword: "wheel sanding and mirror polish",
    metaTitle: "Full Sand & Mirror Polish for Aluminum Wheels | Sealy TX",
    metaDescription:
      "Full sand and mirror polish for forged, dually and factory aluminum wheels in Sealy, TX. Outside, inside or both. Scratches out, mirror in. Get a quote.",
    h1: "Full Sand & Mirror Polish for Aluminum Wheels",
    tagline: "Every scratch sanded out. Every surface brought to a mirror.",
    summary: "Machine sanding through progressive grits, then cut and color polish. Outside only, inside only, or the full wheel.",
    image: photos.forgedAfter,
    intro: [
      "A full sand and polish is the top of what we do and the job most people call us about. We take the wheel down past the scratches, swirls and pitting with machine sanding, step up through finer and finer grits until the surface is smooth, then cut and color it with polishing compounds until it reflects like a mirror.",
      "You choose the scope: the outside face and spokes, the inner barrel, or the whole wheel inside and out. Every surface we touch gets the same equipment and the same standard. Forged sets with deep lips and tight spokes take the longest — those spokes get worked individually, not just wiped over.",
      "This is the service that pairs with ceramic coating. Coating locks in a finish that was done right; it is not applied over a quick polish.",
    ],
    whatsIncluded: [
      "Inspection for coatings, cracks or bends before any work starts",
      "Machine sanding through progressive grits to remove scratches and pitting",
      "Spoke-by-spoke work on forged and multi-spoke designs",
      "Cut and color polish to a true mirror finish",
      "Your choice of outside, inner barrel, or full wheel",
      "Option to add ceramic coating and lip re-engraving",
    ],
    process: [
      { title: "Inspect", description: "We look for clear coat, powder coat, cracks or bends. A bent or cracked wheel goes to a wheel repair shop first — polishing won't fix it." },
      { title: "Sand", description: "Machine sanding removes scratches and oxidation pitting, then finer grits erase the sanding marks themselves." },
      { title: "Cut and color", description: "Polishing compounds take the sanded surface to a deep, clear reflection." },
      { title: "Detail and protect", description: "Lip lettering, lug area and edges get finished, and ceramic coating goes on if you added it." },
    ],
    goodFit: [
      "Forged truck wheels (American Force, KG1, Specialty Forged and similar)",
      "Dually fronts and rears, including semi-style hubs",
      "Factory aluminum wheels with scratches, swirls or pitting",
      "Anyone who wants the full mirror, not just bright",
    ],
    notFit: ["Chrome-plated wheels — that's plating, not aluminum, and it can't be sanded"],
    pricingNote: "Priced by wheel size, design (spoke count and lip depth), condition and scope — outside only, inside only, or both.",
    faqs: [
      { question: "Can I get just the outside done?", answer: "Yes. Outside face and spokes only, inner barrel only, or the full wheel inside and out — you pick, and the quote reflects it." },
      { question: "Do you polish factory wheels or only aftermarket forged?", answer: "Both. Stock factory aluminum wheels are some of our most common jobs. If it's bare aluminum (or can be stripped to bare aluminum), we can polish it." },
      { question: "How long does a full sand and polish take?", answer: "It depends on the set. Simple factory wheels move faster than a forged set with 20+ spokes and a deep lip. We give you a real turnaround when we quote." },
      { question: "Does sanding take a lot of metal off?", answer: "No. We remove only as much as it takes to get under the damage. Deep gouges are blended rather than chased to the bottom, so the wheel keeps its shape and strength." },
    ],
    related: ["wheel-ceramic-coating", "inner-barrel-polishing", "curb-rash-repair"],
    guide: "acid-wash-vs-full-sand-and-polish",
  },
  {
    slug: "inner-barrel-polishing",
    name: "Inner Barrel Polishing",
    primaryKeyword: "inner barrel polishing",
    metaTitle: "Inner Barrel Polishing for Wheels | No Limit Polishing TX",
    metaDescription:
      "Inner barrel polishing for forged and open-spoke wheels. We sand and mirror-polish the inside of the barrel so the wheel shines through the spokes. Sealy, TX.",
    h1: "Inner Barrel Polishing",
    tagline: "Look through the spokes and see mirror, not grime.",
    summary: "Sanding and mirror polish on the inside of the barrel — standalone or added to any full sand & polish.",
    image: photos.duallyRearAfter,
    intro: [
      "Open-spoke and forged wheels show the inside of the barrel to anyone walking past the truck. A mirror-polished face with a dull, brake-dusted barrel behind it looks half done. Most shops skip the barrel because it's slow, awkward work. We don't.",
      "Inner barrel polishing follows the same process as the face: clean, sand out the oxidation and scuffs, then cut and color to a mirror. It's available on its own if your faces are already in good shape, or as part of a full inside-and-out job.",
    ],
    whatsIncluded: [
      "Degrease and strip of brake dust and road film inside the barrel",
      "Sanding of the barrel surface to remove oxidation and scuffs",
      "Mirror polish of the full inner barrel",
      "Clean-up around weights and valve stem area",
    ],
    process: [
      { title: "Clean", description: "The barrel holds the most brake dust on the wheel — it gets stripped first." },
      { title: "Sand", description: "Oxidation and light scuffs are sanded out evenly around the barrel." },
      { title: "Polish", description: "Cut and color compounds bring it up to match the face." },
    ],
    goodFit: [
      "Forged and open-spoke wheels where the barrel is visible",
      "Dually rears where the barrel faces out",
      "Show trucks and builds that get looked at up close",
    ],
    pricingNote: "Priced per wheel by barrel width and condition; less when added to a full sand & polish.",
    faqs: [
      { question: "Do the tires need to come off?", answer: "For a full inner barrel polish, yes — the barrel has to be reachable all the way around. We'll talk through mounting when we quote." },
      { question: "Can I do just the barrels?", answer: "Yes. If your faces were polished recently and still look good, barrels alone is a common job." },
    ],
    related: ["full-sand-and-polish", "wheel-ceramic-coating", "acid-wash"],
  },
  {
    slug: "curb-rash-repair",
    name: "Curb Rash Repair",
    primaryKeyword: "curb rash repair",
    metaTitle: "Curb Rash Repair for Aluminum Wheels | Sealy & Katy TX",
    metaDescription:
      "Curb rash repair for polished aluminum wheels near Sealy and Katy, TX. Lip damage sanded out, blended and polished to match — lettering re-engraved if needed.",
    h1: "Curb Rash Repair for Polished Aluminum Wheels",
    tagline: "One bad parking job shouldn't ruin a set of wheels.",
    summary: "Lip and barrel damage sanded out, blended into the surrounding finish and polished to match.",
    image: photos.lipCloseup,
    intro: [
      "Curb rash on a polished lip is the most visible damage a wheel can take — it catches light differently than the rest of the wheel, and on a deep-lip forged wheel it can chew straight through the engraved brand name.",
      "On bare aluminum it's very fixable. We sand the damaged area down, feather it into the surrounding lip so there's no flat spot or ridge, and polish the whole lip so the repair blends in instead of sitting there as a patch. If the curb took out the lettering, we re-engrave it afterward.",
      "Rash that's cracked the lip or bent the wheel is a different job — that wheel needs a structural repair or replacement first, and we'll tell you straight if that's what we're looking at.",
    ],
    whatsIncluded: [
      "Assessment of depth — cosmetic rash vs. structural damage",
      "Sanding out of gouges and scrapes on the lip or barrel edge",
      "Feathered blending into the surrounding finish",
      "Polish of the full lip so the repair doesn't show",
      "Re-engraving of damaged lip lettering if needed",
    ],
    process: [
      { title: "Assess", description: "We check whether the damage is cosmetic or has cracked or bent the wheel." },
      { title: "Sand and blend", description: "The damage is taken out and feathered into the lip so the profile stays round." },
      { title: "Polish and re-engrave", description: "The lip is polished as one piece, and lettering is restored if the curb took it." },
    ],
    goodFit: ["Polished or bare aluminum lips with scrapes and gouges", "Deep-lip forged wheels with lettering damage", "One wheel or a whole set"],
    notFit: ["Cracked or bent wheels (structural repair first)", "Painted or powder-coated wheels you want to keep coated"],
    pricingNote: "Priced per wheel by how deep and how long the damage is.",
    faqs: [
      { question: "Will I be able to see where the curb rash was?", answer: "On bare polished aluminum, the goal is no — the lip is polished as one surface after the repair. Very deep gouges may leave a slightly thinner spot you can feel but not see." },
      { question: "Can you fix just one wheel?", answer: "Yes. We'll polish that wheel to match the rest of the set as closely as possible, and recommend a light polish on the others if they've dulled." },
    ],
    related: ["lip-re-engraving", "full-sand-and-polish", "wheel-ceramic-coating"],
  },
  {
    slug: "lip-re-engraving",
    name: "Lip Re-Engraving",
    primaryKeyword: "wheel lip re-engraving",
    metaTitle: "Wheel Lip Re-Engraving | Restore Lettering | No Limit TX",
    metaDescription:
      "Restore the engraved brand lettering on your wheel lip after polishing or curb rash. Deep, crisp, factory-correct lines. Standalone or add-on in Sealy, TX.",
    h1: "Wheel Lip Re-Engraving",
    tagline: "Deep, crisp lettering that reads from across the lot.",
    summary: "Restores the depth and crispness of engraved lip lettering after polishing or curb rash repair.",
    image: photos.deepLipAfter,
    intro: [
      "A lot of forged wheels carry the brand name engraved into the lip. Every polish takes a little off the top of that lettering, and curb rash can wipe part of it out entirely. After a few years the name looks shallow and washed out against the polished lip.",
      "We go back into the lettering and restore its depth and edges so it reads cleanly against the polished aluminum. It's the detail that makes a polish job look finished instead of almost finished.",
    ],
    whatsIncluded: [
      "Inspection of existing lettering depth and damage",
      "Restoration of letter depth and clean edges",
      "Rebuild of letters lost to curb rash where the original is identifiable",
      "Final lip polish around the lettering",
    ],
    process: [
      { title: "Match", description: "We match the original font, spacing and depth from the undamaged letters." },
      { title: "Engrave", description: "Lettering is cut back to depth with clean edges." },
      { title: "Finish", description: "The lip is polished around the engraving so it all reads as one." },
    ],
    goodFit: ["Forged wheels with engraved lip branding", "Wheels coming out of curb rash repair", "Older polished sets where the lettering has faded"],
    pricingNote: "Priced per wheel; less when added to curb rash repair or a full sand & polish.",
    faqs: [
      { question: "Can you engrave custom text instead of the brand name?", answer: "Ask us. We restore existing lettering as standard; custom text depends on the wheel and the lip — we'll tell you honestly what's possible." },
    ],
    related: ["curb-rash-repair", "full-sand-and-polish"],
  },
  {
    slug: "wheel-ceramic-coating",
    name: "Ceramic Coating for Wheels",
    primaryKeyword: "ceramic coating for wheels",
    metaTitle: "Ceramic Coating for Polished Wheels | Sealy, TX",
    metaDescription:
      "Ceramic coating for freshly polished aluminum wheels. Hydrophobic layer that sheds brake dust and slows oxidation. Applied with Full Sand & Polish in Sealy, TX.",
    h1: "Ceramic Coating for Polished Aluminum Wheels",
    tagline: "Lock the mirror in. Wash it off instead of polishing it back.",
    summary: "A hard, hydrophobic coating over a fresh mirror polish. Only applied with Full Sand & Polish.",
    image: photos.onStand,
    intro: [
      "Uncoated polished aluminum is a living finish — it starts to oxidize again the day it leaves the shop, and Gulf Coast humidity speeds that up. Ceramic coating puts a hard, slick layer over the polished metal that sheds water, brake dust and road film, so most of what would dull the wheel washes off with soap and water.",
      "We only coat wheels we've just finished with a full sand and polish. Coating locks in whatever is underneath it, so it has to go over a clean, freshly polished surface — coating over oxidation or swirl marks would seal the problem in.",
    ],
    whatsIncluded: [
      "Panel wipe to remove polishing oils before coating",
      "Professional-grade ceramic coating on the polished surfaces",
      "Proper cure before the wheel goes back in service",
      "Written care instructions",
    ],
    process: [
      { title: "Polish first", description: "Full sand & polish to a true mirror — coating is never a shortcut around it." },
      { title: "Prep", description: "Polishing residue is removed so the coating bonds to bare metal." },
      { title: "Coat and cure", description: "Coating is applied and allowed to cure before the wheel is driven." },
    ],
    goodFit: ["Daily drivers and work trucks that won't get polished often", "Anyone tired of re-polishing every few months", "Forged sets with lots of spokes that are slow to clean"],
    notFit: ["Wheels that aren't getting a full sand & polish with us"],
    pricingNote: "Add-on priced per wheel with a Full Sand & Polish.",
    faqs: [
      { question: "Why can't you coat my wheels without polishing them?", answer: "Coating seals in whatever is on the surface. Over oxidation, swirls or old polish residue, it would lock those in and fail early. It goes on a fresh mirror polish or not at all." },
      { question: "Do coated wheels still need care?", answer: "Yes, but much less. Wash with a pH-neutral soap, skip acid wheel cleaners, and dry them to avoid water spots. You'll be washing, not polishing." },
    ],
    related: ["full-sand-and-polish", "inner-barrel-polishing"],
    guide: "how-to-keep-polished-wheels-shining",
  },
  {
    slug: "clear-coat-removal",
    name: "Clear Coat Removal",
    primaryKeyword: "wheel clear coat removal",
    metaTitle: "Wheel Clear Coat Removal | Peeling Clear Coat | Sealy TX",
    metaDescription:
      "Peeling, yellowed or flaking clear coat stripped off aluminum wheels down to bare metal, ready to polish. Clear coat removal in Sealy, TX — quoted per wheel.",
    h1: "Wheel Clear Coat Removal",
    tagline: "Peeling, yellow, flaking clear coat — gone, down to bare aluminum.",
    summary: "Full strip of factory or aftermarket clear coat so the aluminum underneath can be polished.",
    image: photos.deepLipBefore,
    intro: [
      "Many factory and aftermarket aluminum wheels leave the plant with a clear coat on them. It looks fine for a few years, then it yellows, clouds over, and starts peeling at the edges where water gets under it. Once that starts, the only real fix is to take it all off.",
      "We strip the clear coat completely, chemically and mechanically, down to bare aluminum. From there the wheel can be polished to a finish that's brighter than the clear coat ever was — and that you can maintain yourself, since there's nothing left to peel.",
    ],
    whatsIncluded: [
      "Full removal of factory or aftermarket clear coat",
      "Clean-up of residue in spoke corners and lug area",
      "Bare aluminum surface ready for acid wash or full sand & polish",
    ],
    process: [
      { title: "Confirm the coating", description: "We confirm it's clear coat (not powder coat or anodizing) so the right stripping method is used." },
      { title: "Strip", description: "The coating comes off completely, including the edges and corners where it likes to hang on." },
      { title: "Polish", description: "Most customers follow straight into a polish — the whole point of stripping it." },
    ],
    goodFit: ["Wheels with peeling or flaking clear coat", "Yellowed or cloudy factory finishes", "Anyone who wants polished aluminum instead of coated"],
    pricingNote: "Priced per wheel by size and how much coating is left.",
    faqs: [
      { question: "How do I know if my wheels are clear coated?", answer: "Peeling, flaking or cloudy patches that look like a film lifting off the metal are the giveaway. Bare aluminum oxidizes to a dull gray but never peels. Send us a photo and we'll tell you." },
    ],
    related: ["powder-coat-removal", "full-sand-and-polish", "acid-wash"],
    guide: "can-you-polish-coated-wheels",
  },
  {
    slug: "powder-coat-removal",
    name: "Powder Coat & Anodizing Removal",
    primaryKeyword: "powder coat removal for wheels",
    metaTitle: "Powder Coat & Anodizing Removal for Wheels | Sealy, TX",
    metaDescription:
      "Strip powder coat or anodizing off aluminum wheels down to bare metal, ready for a mirror polish. Powder coat removal near Sealy, Katy and Houston, TX.",
    h1: "Powder Coat & Anodizing Removal for Wheels",
    tagline: "Tired of the black? Strip it to metal and go polished.",
    summary: "Chemical and mechanical removal of powder coat or anodized finishes down to bare aluminum.",
    image: photos.mudTire,
    intro: [
      "Powder-coated and anodized wheels are everywhere on the aftermarket — black, bronze, candy colors. When the color chips, fades, or you just want polished instead, it has to come off completely before aluminum can be polished. Polish won't go through a coating; it'll just scuff it.",
      "Powder coat and anodizing come off differently, and both are slower and more involved than clear coat. We take the wheel down to bare metal, clean out every spoke corner, and hand it over ready for a full sand and polish.",
    ],
    whatsIncluded: [
      "Identification of the finish (powder coat vs. anodizing vs. paint)",
      "Chemical and mechanical stripping to bare aluminum",
      "Detail clean-out of spoke corners and edges",
      "Surface ready for full sand & polish",
    ],
    process: [
      { title: "Identify", description: "Powder coat and anodizing need different methods. We figure out which one you have first." },
      { title: "Strip", description: "The finish is removed completely, down to clean metal." },
      { title: "Polish", description: "Follow-on full sand & polish turns it into a mirror-finish wheel." },
    ],
    goodFit: ["Chipped or faded powder-coated wheels", "Anodized wheels you want polished", "Used wheel purchases in a color you don't want"],
    pricingNote: "Priced per wheel; varies by finish type and wheel design.",
    faqs: [
      { question: "Can any powder-coated wheel be polished?", answer: "Most aluminum wheels can, once stripped. Some cast wheels have porosity under the coating that shows once it's polished — we'll flag that if we see it." },
    ],
    related: ["clear-coat-removal", "full-sand-and-polish"],
    guide: "can-you-polish-coated-wheels",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
