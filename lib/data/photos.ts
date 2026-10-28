import type { Photo } from "./types";

/**
 * Every work photo on the site, resized to <=1600px, EXIF stripped (the iPhone
 * originals carried camera metadata) and renamed descriptively. Alt text says
 * what is actually in the frame — the old site used "Polished wheel",
 * "Work photo 1", "Before", "After".
 */
const p = (src: string, width: number, height: number, alt: string): Photo => ({
  src: `/img/${src}`,
  width,
  height,
  alt,
});

export const photos = {
  forgedBefore: p("forged-wheel-before-polish.jpg", 1200, 1600, "Forged truck wheel with dull, hazy spokes and lip before polishing"),
  forgedAfter: p("forged-wheel-after-mirror-polish.jpg", 1348, 1600, "The same forged truck wheel after a full sand and mirror polish, reflecting the house and sky"),
  duallyBefore: p("dually-wheel-before-polish.jpg", 973, 1596, "Dually wheel with chalky white oxidation across the face before an acid wash and polish"),
  duallyAfter: p("dually-wheel-after-polish.jpg", 1170, 1560, "Dually wheel polished to a chrome-like mirror finish, reflecting the deck behind it"),
  deepLipBefore: p("deep-lip-wheel-before-polish.jpg", 1200, 1600, "Deep-lip multi-spoke aluminum wheel with a faded, cloudy finish before polishing"),
  deepLipAfter: p("deep-lip-wheel-after-polish.jpg", 1200, 1600, "Deep-lip multi-spoke wheel after polishing, the lip lettering crisp against bright aluminum"),
  duallyRearBefore: p("dually-rear-oxidized-before.jpg", 1200, 1600, "Oxidized rear dually wheel on a mud-terrain tire before polishing"),
  duallyRearAfter: p("dually-rear-polished-after.jpg", 1200, 1600, "Rear dually wheel after polishing, the barrel and lug area reflecting like a mirror"),
  mirrorFinish: p("forged-wheel-mirror-finish.jpg", 1200, 1600, "Forged multi-spoke wheel with a mirror finish reflecting a metal shop building"),
  lipCloseup: p("polished-wheel-lip-closeup.jpg", 1200, 1600, "Polished dually wheel face and lip reflecting the shop interior like a mirror"),
  mudTire: p("polished-forged-wheel-mud-tire.jpg", 1200, 1600, "Polished forged wheel mounted on a muddy mud-terrain tire"),
  pickup: p("polished-wheels-pickup-truck.jpg", 904, 1600, "A set of polished wheels lined up beside a black pickup truck"),
  onStand: p("polished-forged-wheel-on-stand.jpg", 1160, 1600, "Polished forged wheel standing upright outside the shop, every spoke reflecting"),
  inProgress: p("wheel-polishing-in-progress.jpg", 738, 1600, "Wheel lip being polished with a buffing pad mid-job"),
  ranchDually: p("polished-dually-wheel-ranch.jpg", 1200, 1600, "Polished dually wheel on a mud-terrain tire parked on gravel"),
} satisfies Record<string, Photo>;

export const beforeAfterPairs = [
  { label: "Forged spoke wheel — full sand & polish", before: photos.forgedBefore, after: photos.forgedAfter },
  { label: "Dually wheel — oxidation removed and polished", before: photos.duallyBefore, after: photos.duallyAfter },
  { label: "Deep-lip wheel — face and lip polished", before: photos.deepLipBefore, after: photos.deepLipAfter },
  { label: "Rear dually — acid wash and polish", before: photos.duallyRearBefore, after: photos.duallyRearAfter },
];

export const galleryPhotos: Photo[] = [
  photos.mirrorFinish,
  photos.lipCloseup,
  photos.mudTire,
  photos.onStand,
  photos.ranchDually,
  photos.deepLipAfter,
];
