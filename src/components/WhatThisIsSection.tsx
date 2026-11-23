"use client";

import React from "react";
import { getAssetPath } from "@/lib/assets";

export default function WhatThisIsSection() {
  return (
    <section id="section-what-this-is" className="bg-[#02071C] text-white pt-16 pb-20 border-b border-white/10 relative overflow-hidden">
      {/* Background Video & Scaffolding System */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Base dark midnight field */}
        <div className="absolute inset-0 bg-[#02071C]"></div>

        {/* Ambient Stage Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={getAssetPath("/images/s4-video-poster.jpg")}
            className="w-full h-full object-cover object-center opacity-40 scale-[1.02] filter contrast-[1.10] brightness-[0.85]"
          >
            <source src={getAssetPath("/videos/s4_ambient_stage.webm")} type="video/webm" />
            <source src={getAssetPath("/videos/s4_ambient_stage.mp4")} type="video/mp4" />
          </video>
        </div>

        {/* High-Contrast Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02071C]/92 via-[#07152F]/82 to-[#02071C]/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_35%,rgba(0,69,200,0.22)_0%,rgba(0,180,197,0.06)_50%,transparent_80%)]"></div>

        {/* Subtle Vector Scaffolding Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 180, 197, 0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        {/* Bottom Horizon Arc */}
        <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 1200 48" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 48 Q 600 8 1200 48" stroke="rgba(46, 232, 209, 0.4)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div style={{ maxWidth: "800px", marginBottom: "40px" }}>
          <div className="hud-badge" style={{ marginBottom: "16px" }}>
            <span className="hud-badge-dot"></span>
            Scope &amp; Positioning
          </div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Not an AI conference. Not a data centre show.
          </h2>
          <p style={{ fontSize: "18px", color: "#C9DCEC", lineHeight: 1.6, marginBottom: "8px" }}>
            It&apos;s the executive summit for the infrastructure decisions that turn AI ambition into production.
          </p>
          <p style={{ fontSize: "16px", color: "var(--aqua)", fontFamily: "var(--mono)", fontWeight: 600 }}>
            Compute. Cloud. Data centres. Power. Connectivity. Security.
          </p>
        </div>

        {/* Institutional Triptych */}
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
          {/* Top Sweeping Accent */}
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
                {/* 01: Optical Focal Aperture */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="11.5" stroke="#2EE8D1" strokeWidth="1.5" strokeDasharray="4 2" />
                  <circle cx="16" cy="16" r="5" stroke="#00B4C5" strokeWidth="1.75" />
                  <circle cx="16" cy="16" r="2" fill="#2EE8D1" />
                  <line x1="16" y1="2" x2="16" y2="7.5" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="24.5" x2="16" y2="30" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="16" x2="7.5" y2="16" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="24.5" y1="16" x2="30" y2="16" stroke="#2EE8D1" strokeWidth="1.5" strokeLinecap="round" />
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
                {/* 02: Multi-layer Architecture */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L27 9.5L16 15L5 9.5L16 4Z" stroke="#2EE8D1" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M5 15.5L16 21L27 15.5" stroke="#00B4C5" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M5 21.5L16 27L27 21.5" stroke="#0045C8" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="16" cy="9.5" r="1.5" fill="#2EE8D1" />
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
                {/* 03: Strategic Radar Crosshair */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="22" height="22" rx="4" stroke="#2EE8D1" strokeWidth="1.5" />
                  <line x1="16" y1="8" x2="16" y2="24" stroke="#00B4C5" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="8" y1="16" x2="24" y2="16" stroke="#00B4C5" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="16" cy="16" r="4" stroke="#2EE8D1" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="1.5" fill="#2EE8D1" />
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
      </div>
    </section>
  );
}
