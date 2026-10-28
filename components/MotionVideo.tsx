"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted looping video with a visible pause control (WCAG 2.2.2 — anything that
 * moves for more than 5 s needs one) that never autoplays for users who asked
 * for reduced motion. Decorative: the meaning is carried by the page text.
 */
export default function MotionVideo({
  src,
  poster,
  className = "",
  maxSeconds,
  buttonClassName = "",
}: {
  src: string;
  poster?: string;
  className?: string;
  maxSeconds?: number;
  buttonClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // The video is several MB. It used to start downloading during hydration and
  // compete with the hero image and fonts for the phone's bandwidth, so it is
  // only attached once the page has loaded, the browser is idle, and the video
  // is actually on screen.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("a11y-reduce-motion");
    let io: IntersectionObserver | undefined;
    const start = () => {
      io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io?.disconnect();
        if (!v.src) v.src = src;
        if (!reduce) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      });
      io.observe(v);
    };
    const idle = () => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(start, { timeout: 3000 });
      else setTimeout(start, 1500);
    };
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });
    const clamp = () => {
      if (maxSeconds && v.currentTime >= maxSeconds) v.currentTime = 0;
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("timeupdate", clamp);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      io?.disconnect();
      window.removeEventListener("load", idle);
      v.removeEventListener("timeupdate", clamp);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [maxSeconds, src]);

  return (
    <>
      <video ref={ref} className={className} poster={poster} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
      <button
        type="button"
        onClick={() => {
          const v = ref.current;
          if (!v) return;
          if (playing) return v.pause();
          if (!v.src) v.src = src;
          v.play().catch(() => {});
        }}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className={`absolute z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white hover:bg-black/80 ${buttonClassName}`}
      >
        {playing ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
    </>
  );
}
