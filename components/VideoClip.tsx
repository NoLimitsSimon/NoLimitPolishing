"use client";
import { useRef, useEffect } from "react";

export default function VideoClip() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const clamp = () => {
      if (v.currentTime >= 10) v.currentTime = 0;
    };
    v.addEventListener("timeupdate", clamp);
    return () => v.removeEventListener("timeupdate", clamp);
  }, []);

  return (
    <video
      ref={ref}
      src="https://res.cloudinary.com/ddamtvtt0/video/upload/baseball-bat_rwmfw4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full aspect-video object-cover"
    />
  );
}
