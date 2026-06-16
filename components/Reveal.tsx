"use client";
import { useEffect, useRef, ReactNode } from "react";

type Animation = "up" | "left" | "right" | "scale";

interface Props {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  threshold?: number;
}

export default function Reveal({ children, className = "", animation = "up", delay = 0, threshold = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-active");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const delayClass = delay ? `d${delay}` : "";

  return (
    <div ref={ref} className={`reveal-${animation} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
