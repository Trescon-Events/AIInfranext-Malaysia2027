"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatRowProps {
  overlap?: boolean;
}

export default function StatRow({ overlap = false }: StatRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState([
    { num: 800, suffix: "+", label: "Delegates", display: "800+" },
    { num: 40, suffix: "+", label: "Speakers", display: "40+" },
    { num: 4, suffix: "", label: "Content pillars", display: "4" },
    { num: 2, suffix: "", label: "Days", display: "2" },
  ]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    let animated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const duration = 1200;
            const startTime = performance.now();

            const update = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = progress * (2 - progress);

              setStats((prev) =>
                prev.map((s) => ({
                  ...s,
                  display: Math.floor(eased * s.num) + s.suffix,
                }))
              );

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setStats([
                  { num: 800, suffix: "+", label: "Delegates", display: "800+" },
                  { num: 40, suffix: "+", label: "Speakers", display: "40+" },
                  { num: 4, suffix: "", label: "Content pillars", display: "4" },
                  { num: 2, suffix: "", label: "Days", display: "2" },
                ]);
              }
            };
            requestAnimationFrame(update);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`stat-row-wrap ${overlap ? "stat-row-overlap" : ""}`} ref={containerRef}>
      <div className="container">
        <div className="stat-grid exhibition-panel stage-plinth-glow">
          <div className="hairline-light-sweep" style={{ height: "2px", width: "100%", gridColumn: "1 / -1", opacity: 0.9 }}></div>
          {stats.map((s, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{s.display}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
