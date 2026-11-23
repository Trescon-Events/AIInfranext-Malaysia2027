"use client";

import React, { useEffect, useRef } from "react";
import { getAssetPath } from "@/lib/assets";

export default function WhatThisIsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="section-what-this-is"
      style={{
        backgroundColor: "#02071C",
        color: "#FFFFFF",
        paddingTop: "64px",
        paddingBottom: "80px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Multi-Concept Background System (Concept 1: Blueprint, Concept 2: Interconnect, Concept 3: Horizon) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        {/* 1. Base Dark Midnight Field (#02071C) */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#02071C" }}></div>

        {/* 2. Ambient Executive Summit Stage Video (Vivid & Highly Visible) */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={getAssetPath("/images/s4-video-poster.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.85,
              transform: "scale(1.02)",
              filter: "contrast(1.08) brightness(1.02)",
            }}
          >
            <source src={getAssetPath("/videos/s4_ambient_stage.mp4")} type="video/mp4" />
            <source src={getAssetPath("/videos/s4_ambient_stage.webm")} type="video/webm" />
          </video>
        </div>

        {/* 3. Subtle Atmospheric Wash (Light shading to preserve video clarity while ensuring readability) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(2, 7, 28, 0.55) 0%, rgba(2, 7, 28, 0.20) 35%, rgba(2, 7, 28, 0.30) 70%, rgba(2, 7, 28, 0.75) 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 75% 50% at 50% 35%, rgba(0, 69, 200, 0.15) 0%, rgba(0, 180, 197, 0.04) 50%, transparent 80%)",
          }}
        ></div>

        {/* 4. Subtle Vector Scaffolding Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            maskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, black 20%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, black 20%, transparent 95%)",
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="s4-vid-grid" width="80" height="138.564" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 80 138.564 M 80 0 L 0 138.564" fill="none" stroke="rgba(0, 180, 197, 0.25)" strokeWidth="0.5" />
                <circle cx="40" cy="69.282" r="1.2" fill="#2EE8D1" opacity="0.8" />
              </pattern>
              <linearGradient id="brand-horizon-grad-v" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#07152F" stopOpacity="0" />
                <stop offset="20%" stopColor="#0045C8" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#00B4C5" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#2EE8D1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#07152F" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#s4-vid-grid)" />
          </svg>
        </div>

        {/* 6. Orbital Compute Horizon */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "48px", pointerEvents: "none", zIndex: 10 }}>
          <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 1200 48" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 48 Q 600 8 1200 48" stroke="url(#brand-horizon-grad-v)" strokeWidth="4" opacity="0.4" filter="blur(2px)" />
            <path d="M 0 48 Q 600 8 1200 48" stroke="url(#brand-horizon-grad-v)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "800px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px", letterSpacing: "-0.02em", textShadow: "0 2px 14px rgba(2, 7, 28, 0.9)" }}>
            Not an AI conference. Not a data centre show.
          </h2>
          <p style={{ fontSize: "18px", color: "#E2E8F0", lineHeight: 1.6, marginBottom: "8px", textShadow: "0 2px 10px rgba(2, 7, 28, 0.85)" }}>
            It&apos;s the executive summit for the infrastructure decisions that turn AI ambition into production.
          </p>
          <p style={{ fontSize: "16px", color: "var(--aqua)", fontFamily: "var(--mono)", fontWeight: 600, textShadow: "0 2px 10px rgba(2, 7, 28, 0.85)" }}>
            Compute. Cloud. Data centres. Power. Connectivity. Security.
          </p>
        </div>

        {/* Institutional Triptych: Embedded Architectural Division */}
        <div
          id="s4-triptych-panel"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            borderRadius: "16px",
            backgroundColor: "rgba(7, 21, 47, 0.90)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 24px 64px rgba(2, 7, 28, 0.85)",
            backdropFilter: "blur(16px)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top Sweeping Hairline Stage Light Accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--aqua), transparent)",
              opacity: 0.85,
              zIndex: 20,
            }}
          ></div>

          {/* Pillar 1 */}
          <div
            style={{
              padding: "36px 32px",
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "13px", fontWeight: 700, color: "var(--aqua)" }}>
                    01
                  </span>
                  <span style={{ width: "24px", height: "1px", background: "rgba(46, 232, 209, 0.4)" }}></span>
                </div>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="grad-prop1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2EE8D1"></stop>
                      <stop offset="50%" stopColor="#00B4C5"></stop>
                      <stop offset="100%" stopColor="#0045C8"></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="11.5" stroke="url(#grad-prop1)" strokeWidth="1.5" strokeDasharray="4 2"></circle>
                  <circle cx="16" cy="16" r="5" stroke="url(#grad-prop1)" strokeWidth="1.75"></circle>
                  <circle cx="16" cy="16" r="2" fill="#2EE8D1"></circle>
                  <line x1="16" y1="2" x2="16" y2="7.5" stroke="url(#grad-prop1)" strokeWidth="1.5" strokeLinecap="round"></line>
                  <line x1="16" y1="24.5" x2="16" y2="30" stroke="url(#grad-prop1)" strokeWidth="1.5" strokeLinecap="round"></line>
                  <line x1="2" y1="16" x2="7.5" y2="16" stroke="url(#grad-prop1)" strokeWidth="1.5" strokeLinecap="round"></line>
                  <line x1="24.5" y1="16" x2="30" y2="16" stroke="url(#grad-prop1)" strokeWidth="1.5" strokeLinecap="round"></line>
                </svg>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", lineHeight: 1.3 }}>
                Narrower than an AI summit
              </h3>
              <p style={{ fontSize: "14.5px", color: "#C9DCEC", lineHeight: 1.6, margin: 0 }}>
                The question is not whether to adopt AI. It is what has to exist underneath it.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: "36px 32px",
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "13px", fontWeight: 700, color: "var(--aqua)" }}>
                    02
                  </span>
                  <span style={{ width: "24px", height: "1px", background: "rgba(46, 232, 209, 0.4)" }}></span>
                </div>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="grad-prop2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2EE8D1"></stop>
                      <stop offset="50%" stopColor="#00B4C5"></stop>
                      <stop offset="100%" stopColor="#0045C8"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M16 4L27 9.5L16 15L5 9.5L16 4Z" stroke="url(#grad-prop2)" strokeWidth="1.5" strokeLinejoin="round"></path>
                  <path d="M5 15.5L16 21L27 15.5" stroke="url(#grad-prop2)" strokeWidth="1.5" strokeLinejoin="round"></path>
                  <path d="M5 21.5L16 27L27 21.5" stroke="url(#grad-prop2)" strokeWidth="1.5" strokeLinejoin="round"></path>
                  <circle cx="16" cy="9.5" r="1.5" fill="#2EE8D1"></circle>
                </svg>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", lineHeight: 1.3 }}>
                Broader than a data centre event
              </h3>
              <p style={{ fontSize: "14.5px", color: "#C9DCEC", lineHeight: 1.6, margin: 0 }}>
                Facilities, power and cooling matter here because AI workloads depend on them.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: "36px 32px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "13px", fontWeight: 700, color: "var(--aqua)" }}>
                    03
                  </span>
                  <span style={{ width: "24px", height: "1px", background: "rgba(46, 232, 209, 0.4)" }}></span>
                </div>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="grad-prop3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2EE8D1"></stop>
                      <stop offset="50%" stopColor="#00B4C5"></stop>
                      <stop offset="100%" stopColor="#0045C8"></stop>
                    </linearGradient>
                  </defs>
                  <rect x="5" y="5" width="22" height="22" rx="4" stroke="url(#grad-prop3)" strokeWidth="1.5"></rect>
                  <line x1="16" y1="8" x2="16" y2="24" stroke="url(#grad-prop3)" strokeWidth="1" strokeDasharray="2 2"></line>
                  <line x1="8" y1="16" x2="24" y2="16" stroke="url(#grad-prop3)" strokeWidth="1" strokeDasharray="2 2"></line>
                  <circle cx="16" cy="16" r="4" stroke="#2EE8D1" strokeWidth="1.5"></circle>
                  <circle cx="16" cy="16" r="1.5" fill="#2EE8D1"></circle>
                </svg>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", lineHeight: 1.3 }}>
                Built around Malaysian execution
              </h3>
              <p style={{ fontSize: "14.5px", color: "#C9DCEC", lineHeight: 1.6, margin: 0 }}>
                Not a regional overview. The decisions in front of Malaysian buyers, operators and regulators this year.
              </p>
            </div>
          </div>
        </div>

        {/* Architectural Spine Transition into S5 (Positioning → What Decisions) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "-40px",
            position: "relative",
            zIndex: 10,
          }}
          aria-hidden="true"
        >
          <div style={{ width: "1px", height: "48px", background: "rgba(0, 180, 197, 0.4)" }}></div>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", border: "2px solid var(--aqua)", backgroundColor: "#02071C", boxShadow: "0 0 8px var(--aqua)" }}></div>
        </div>
      </div>
    </section>
  );
}
