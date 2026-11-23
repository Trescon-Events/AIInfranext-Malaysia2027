"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatRowProps {
  overlap?: boolean;
}

export default function StatRow({ overlap = false }: StatRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState([
    { num: 500, suffix: "+", label: "DELEGATES", display: "500+", type: "delegates" },
    { num: 40, suffix: "+", label: "SPEAKERS", display: "40+", type: "speakers" },
    { num: 4, suffix: "", label: "CONTENT PILLARS", display: "4", type: "pillars" },
    { num: 2, suffix: "", label: "DAYS", display: "2", type: "days" },
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
                  { num: 500, suffix: "+", label: "DELEGATES", display: "500+", type: "delegates" },
                  { num: 40, suffix: "+", label: "SPEAKERS", display: "40+", type: "speakers" },
                  { num: 4, suffix: "", label: "CONTENT PILLARS", display: "4", type: "pillars" },
                  { num: 2, suffix: "", label: "DAYS", display: "2", type: "days" },
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

  const renderIcon = (type: string) => {
    if (type === "delegates") {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="7" r="3.25" stroke="#2EE8D1" strokeWidth="1.5" />
          <path d="M6.5 19C6.5 15.5 9 13.5 12 13.5C15 13.5 17.5 15.5 17.5 19" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5" cy="9" r="2.25" stroke="#00B4C5" strokeWidth="1.2" opacity="0.8" />
          <path d="M2 18.5C2 16.5 3.5 15 5 15" stroke="#00B4C5" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          <circle cx="19" cy="9" r="2.25" stroke="#00B4C5" strokeWidth="1.2" opacity="0.8" />
          <path d="M22 18.5C22 16.5 20.5 15 19 15" stroke="#00B4C5" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        </svg>
      );
    }
    if (type === "speakers") {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="9" y="3" width="6" height="10" rx="3" stroke="#2EE8D1" strokeWidth="1.5" />
          <line x1="12" y1="6" x2="12" y2="8" stroke="#2EE8D1" strokeWidth="1" strokeLinecap="round" />
          <path d="M5.5 10C5.5 13.5 8.4 16.5 12 16.5C15.6 16.5 18.5 13.5 18.5 10" stroke="#00B4C5" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="16.5" x2="12" y2="20.5" stroke="#00B4C5" strokeWidth="1.5" />
          <line x1="8.5" y1="20.5" x2="15.5" y2="20.5" stroke="#00B4C5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === "pillars") {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="3" y1="4.5" x2="21" y2="4.5" stroke="#2EE8D1" strokeWidth="1.75" strokeLinecap="round" />
          <rect x="4.5" y="6.5" width="2.5" height="11" rx="0.5" fill="#00B4C5" />
          <rect x="9" y="6.5" width="2.5" height="11" rx="0.5" fill="#00B4C5" />
          <rect x="13.5" y="6.5" width="2.5" height="11" rx="0.5" fill="#00B4C5" />
          <rect x="18" y="6.5" width="2.5" height="11" rx="0.5" fill="#00B4C5" />
          <line x1="3" y1="19.5" x2="21" y2="19.5" stroke="#2EE8D1" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    }
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" stroke="#2EE8D1" strokeWidth="1.5" />
        <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" stroke="#00B4C5" strokeWidth="1.25" />
        <line x1="7.5" y1="2.5" x2="7.5" y2="5" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16.5" y1="2.5" x2="16.5" y2="5" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="6.5" y="12.5" width="4.5" height="4.5" rx="1" fill="#00B4C5" />
        <rect x="13" y="12.5" width="4.5" height="4.5" rx="1" fill="#00B4C5" />
      </svg>
    );
  };

  return (
    <div className={`stat-row-wrap ${overlap ? "stat-row-overlap" : ""}`} ref={containerRef}>
      <div className="container">
        <div
          className="stat-grid exhibition-panel stage-plinth-glow"
          style={{
            border: "1px solid rgba(46, 232, 209, 0.35)",
            background: "linear-gradient(180deg, rgba(7, 21, 47, 0.95) 0%, rgba(2, 7, 28, 0.98) 100%)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(46, 232, 209, 0.2)",
          }}
        >
          <div className="hairline-light-sweep" style={{ height: "2px", width: "100%", gridColumn: "1 / -1", opacity: 0.9 }}></div>
          {stats.map((s, idx) => (
            <div key={idx} className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>
              <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {renderIcon(s.type)}
              </div>
              <div className="stat-number" style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "6px" }}>
                {s.display}
              </div>
              <div className="stat-label" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--aqua)", fontFamily: "var(--mono)", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
