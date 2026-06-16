"use client";
import { useEffect, useRef } from "react";

const PARTICLES = [
  { size: 3,  left: "8%",  delay: "0s",   dur: "7s",  drift: "30px" },
  { size: 2,  left: "15%", delay: "1.2s", dur: "9s",  drift: "-20px" },
  { size: 4,  left: "22%", delay: "0.4s", dur: "8s",  drift: "50px" },
  { size: 2,  left: "30%", delay: "2.5s", dur: "6s",  drift: "-40px" },
  { size: 5,  left: "38%", delay: "0.8s", dur: "10s", drift: "20px" },
  { size: 2,  left: "45%", delay: "3.1s", dur: "7.5s",drift: "-60px" },
  { size: 3,  left: "52%", delay: "1.7s", dur: "8.5s",drift: "40px" },
  { size: 4,  left: "60%", delay: "0.2s", dur: "6.5s",drift: "-30px" },
  { size: 2,  left: "68%", delay: "2.8s", dur: "9.5s",drift: "55px" },
  { size: 3,  left: "75%", delay: "1.1s", dur: "7s",  drift: "-25px" },
  { size: 5,  left: "82%", delay: "3.5s", dur: "8s",  drift: "35px" },
  { size: 2,  left: "88%", delay: "0.6s", dur: "6s",  drift: "-50px" },
  { size: 3,  left: "93%", delay: "2s",   dur: "9s",  drift: "20px" },
  { size: 4,  left: "5%",  delay: "4s",   dur: "7.5s",drift: "60px" },
  { size: 2,  left: "55%", delay: "4.5s", dur: "8s",  drift: "-35px" },
  { size: 3,  left: "72%", delay: "5s",   dur: "10s", drift: "45px" },
];

export default function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-10px",
            "--delay": p.delay,
            "--dur": p.dur,
            "--drift": p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
