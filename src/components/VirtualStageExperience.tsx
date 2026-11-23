"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function VirtualStageExperience() {
  const [activeIdx, setActiveIdx] = useState(0);

  const pillars = [
    {
      number: "01",
      title: "Enterprise AI demand, compute and AI factories",
      summary: "Accelerated compute fabrics, workload profiling, and model deployment architectures for Malaysian enterprise production.",
      coverage: [
        "Enterprise AI workload profiling and capacity forecasting",
        "GPU clusters, accelerated compute fabrics and interconnect topologies",
        "AI factory architecture: training vs fine-tuning vs low-latency inference",
        "Compute procurement economics: cloud, co-location and on-premise trade-offs",
        "Hybrid deployment models for mission-critical enterprise systems",
      ],
    },
    {
      number: "02",
      title: "AI-ready data centres, power and thermal infrastructure",
      summary: "High-density racks, liquid cooling, grid access, and utility engineering supporting gigawatt-scale campus builds.",
      coverage: [
        "High-density rack deployments from 40kW to 100kW+ per rack",
        "Direct-to-chip and immersion liquid cooling transition pathways",
        "Grid interconnection, high-voltage sub-stations and TNB capacity planning",
        "Renewable energy integration (Corporate Green Power Programme & TPA)",
        "PUE and WUE efficiency compliance in tropical humid operating environments",
      ],
    },
    {
      number: "03",
      title: "Trusted cloud, data, connectivity and sovereign capability",
      summary: "National cloud policy, data residency, dark fibre, and cross-border governance securing regional AI corridors.",
      coverage: [
        "National Cloud Computing Policy (NCCP) implementation and compliance",
        "Data residency, sovereignty and cross-border transfer rules under PDPA",
        "Subsea cable landings, regional backhaul and terrestrial dark fibre",
        "Sovereign AI models and Malaysian linguistic/cultural dataset governance",
        "Multi-cloud interconnectivity and low-latency financial exchange fabrics",
      ],
    },
    {
      number: "04",
      title: "Secure and production-scale enterprise AI",
      summary: "Cyber Security Act 2024, model weight protection, zero trust, and reliability across mission-critical compute clusters.",
      coverage: [
        "Cyber Security Act 2024 compliance across Critical National Information Infrastructure",
        "Securing AI model weights, training pipelines and fine-tuned enterprise checkpoints",
        "Adversarial testing, data poisoning defense and prompt injection mitigation",
        "Infrastructure identity, zero trust access for accelerated clusters and APIs",
        "Operational resilience, failover engineering and high-availability architecture",
      ],
    },
  ];

  const currentPillar = pillars[activeIdx];

  const renderPillarIcon = (num: string) => {
    if (num === "01") {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" stroke="var(--aqua)" />
          <path d="M12 3v18M3 12h18" stroke="var(--cyan)" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="3" fill="var(--aqua)" />
        </svg>
      );
    }
    if (num === "02") {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="3" width="16" height="6" rx="1.5" stroke="var(--aqua)" />
          <rect x="4" y="11" width="16" height="6" rx="1.5" stroke="var(--cyan)" />
          <path d="M8 6h.01M8 14h.01M16 6h2M16 14h2" stroke="var(--aqua)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if (num === "03") {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" stroke="var(--aqua)" />
          <path d="M12 12v5m0 0l-2-2m2 2l2-2" stroke="var(--cyan)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--aqua)" />
        <path d="m9 12 2 2 4-4" stroke="var(--cyan)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <div
      style={{
        borderRadius: "24px",
        backgroundColor: "#020614",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        padding: "40px 32px",
        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.7)",
        position: "relative",
        overflow: "hidden",
        color: "#FFFFFF",
      }}
    >
      {/* Theatrical Overhead Stage Spotlight Glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "20%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(0, 180, 197, 0.12)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      ></div>

      {/* Top accent hairline */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, var(--aqua), transparent)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      ></div>

      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Stage Display Header */}
        <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--aqua)", marginBottom: "8px" }}>
            Programme
          </div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "10px" }}>
            Four Pillars. One infrastructure ecosystem. Two days.
          </h2>
          <p style={{ fontSize: "16px", color: "#C9DCEC", maxWidth: "760px", lineHeight: 1.6, margin: 0 }}>
            The agenda is structured around four decisions facing Malaysian organisations deploying AI infrastructure in 2027.
          </p>
        </div>

        {/* Theatrical Stage Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* Stage Pillar Selectors (Left Column) - Changes strictly on hover, not clickable */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {pillars.map((pillar, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    textAlign: "left",
                    padding: "18px 20px",
                    borderRadius: "12px",
                    border: isCurrent ? "1px solid var(--aqua)" : "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: isCurrent ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.02)",
                    color: isCurrent ? "#FFFFFF" : "#94A3B8",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                    userSelect: "none",
                    transition: "all 0.25s ease",
                    boxShadow: isCurrent ? "0 8px 25px rgba(0, 180, 197, 0.2)" : "none",
                  }}
                >
                  {/* Active Indicator Bar */}
                  {isCurrent && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: "var(--aqua)",
                        boxShadow: "0 0 10px var(--aqua)",
                      }}
                    ></div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "18px",
                        fontWeight: 800,
                        color: isCurrent ? "var(--aqua)" : "var(--cyan)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {pillar.number}
                    </span>
                    <span style={{ opacity: isCurrent ? 1 : 0.6 }}>{renderPillarIcon(pillar.number)}</span>
                  </div>
                  <div style={{ fontSize: "14.5px", fontWeight: 700, color: isCurrent ? "#FFFFFF" : "#E2E8F0", lineHeight: 1.35 }}>
                    {pillar.title}
                  </div>
                </div>
              );
            })}

            <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <Link
                href="/apply/"
                className="btn btn-primary"
                style={{ width: "100%", textAlign: "center", display: "block", padding: "12px" }}
              >
                Apply for a Delegate Pass →
              </Link>
            </div>
          </div>

          {/* Main Theatrical Stage Display Panel (Right Column) */}
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(7, 21, 47, 0.90)",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Top Screen Lighting Scrim */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, var(--aqua), transparent)",
                opacity: 0.9,
              }}
              aria-hidden="true"
            ></div>

            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "44px",
                    fontWeight: 900,
                    color: "var(--aqua)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {currentPillar.number}
                </span>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(0, 180, 197, 0.12)",
                    border: "1px solid rgba(46, 232, 209, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {renderPillarIcon(currentPillar.number)}
                </div>
              </div>

              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#FFFFFF", marginBottom: "14px", lineHeight: 1.3 }}>
                {currentPillar.title}
              </h3>

              <p style={{ fontSize: "15px", color: "#C9DCEC", lineHeight: 1.6, marginBottom: "24px" }}>
                {currentPillar.summary}
              </p>

              {/* 5 Coverage Bullets in Architectural Grid */}
              <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "11px", fontWeight: 700, color: "var(--aqua)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
                  Coverage &amp; Decisions
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
                  {currentPillar.coverage.map((item, cIdx) => (
                    <div
                      key={cIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "var(--aqua)",
                          marginTop: "6px",
                          flexShrink: 0,
                          boxShadow: "0 0 6px var(--aqua)",
                        }}
                      ></span>
                      <span style={{ fontSize: "13px", color: "#E2E8F0", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cross-Cutting Themes Note */}
              <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "12.5px", color: "#94A3B8", fontFamily: "var(--mono)" }}>
                Capital, policy, sustainability, infrastructure economics and talent run across all four.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
