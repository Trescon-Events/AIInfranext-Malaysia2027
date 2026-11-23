"use client";

import React from "react";
import { getAssetPath } from "@/lib/assets";

export default function MarketRealityTelemetry() {
  return (
    <div className="market-reality-wrap">
      <div className="market-reality-frame">
        {/* LEFT: Hero Editorial & Image Hook */}
        <div
          className="hero-panel"
          style={{
            position: "relative",
            padding: "44px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            backgroundImage: `linear-gradient(135deg, rgba(2, 7, 28, 0.88) 0%, rgba(7, 21, 47, 0.6) 100%), url(${getAssetPath("/images/hero-datacenter-world.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRight: "1px solid rgba(46, 232, 209, 0.22)",
          }}
        >
          <div>
            <div className="hud-badge">
              <span className="hud-badge-dot"></span>
              Malaysia AI Infrastructure // Market Reality
            </div>
            <h2 className="hero-headline">
              Malaysia has secured immense digital infrastructure commitments.<br />
              <span>The challenge now is turning capacity into enterprise value.</span>
            </h2>
            <p className="hero-subhead">
              Announcing gigawatts is easy. Running enterprise AI is where the value is unlocked. AI InfraNext connects infrastructure capacity with real enterprise production workloads.
            </p>
          </div>

          <div className="hero-footer">
            <span>TNB Integrated Annual Report 2025</span>
            <span>Sources: <strong>MIDA · TNB · DOSM</strong></span>
          </div>
        </div>

        {/* RIGHT: High-Impact Telemetry Stats & Live Gauge */}
        <div
          className="telemetry-panel"
          style={{
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
            backgroundColor: "rgba(3, 9, 30, 0.92)",
          }}
        >
          {/* Card 1 */}
          <div
            className="telemetry-card"
            style={{
              backgroundColor: "rgba(7, 21, 47, 0.85)",
              border: "1px solid rgba(46, 232, 209, 0.25)",
              borderRadius: "12px",
              padding: "22px 24px",
              position: "relative",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="stat-header">
              <span className="stat-title" style={{ color: "#94A3B8" }}>Approved Since 2021</span>
              <span className="stat-tag">MIDA 1H 2026</span>
            </div>
            <div className="stat-val-row" style={{ margin: "8px 0" }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 15px rgba(0, 180, 197, 0.5)",
                }}
              >
                US$91.8B
              </div>
            </div>
            <p className="stat-meta" style={{ color: "#94A3B8", margin: 0, fontSize: "12.5px", lineHeight: 1.45 }}>
              RM184.7B equivalent in data-centre-related investments approved across Malaysia.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="telemetry-card"
            style={{
              backgroundColor: "rgba(7, 21, 47, 0.85)",
              border: "1px solid rgba(46, 232, 209, 0.25)",
              borderRadius: "12px",
              padding: "22px 24px",
              position: "relative",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="stat-header">
              <span className="stat-title" style={{ color: "#94A3B8" }}>Capital Surge in 1H 2026</span>
              <span className="stat-tag">44% of Total</span>
            </div>
            <div className="stat-val-row" style={{ margin: "8px 0", display: "flex", alignItems: "baseline", gap: "12px" }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 15px rgba(0, 180, 197, 0.5)",
                }}
              >
                US$22.8B
              </div>
              <span className="stat-sub-badge" style={{ color: "var(--aqua)", fontFamily: "var(--mono)", fontWeight: 700, fontSize: "14px" }}>
                44% Share
              </span>
            </div>
            <p className="stat-meta" style={{ color: "#94A3B8", margin: 0, fontSize: "12.5px", lineHeight: 1.45 }}>
              Cloud and DC investments accounted for nearly half of all national investment approvals in six months.
            </p>
          </div>

          {/* Card 3: Live Utilization Gauge */}
          <div
            className="gauge-card"
            style={{
              backgroundColor: "rgba(7, 21, 47, 0.85)",
              border: "1px solid rgba(46, 232, 209, 0.25)",
              borderRadius: "12px",
              padding: "22px 24px",
              position: "relative",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="gauge-header" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span className="gauge-title" style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Connected Load vs. Contracted Pipeline
              </span>
              <span className="gauge-source" style={{ color: "#94A3B8", fontFamily: "var(--mono)", fontSize: "10px" }}>
                35 Projects
              </span>
            </div>

            <div className="gauge-metrics" style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: "12px", marginBottom: "8px" }}>
              <span className="metric-active" style={{ color: "var(--aqua)", fontWeight: 700 }}>
                ● 850MW Operational (18.8%)
              </span>
              <span className="metric-pipe" style={{ color: "#64748B" }}>
                4,500MW (4.5GW) Pipeline Gap
              </span>
            </div>

            <div className="gauge-track" style={{ height: "16px", background: "#08152B", borderRadius: "8px", overflow: "hidden", display: "flex", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <div
                className="gauge-fill-active"
                style={{
                  width: "18.8%",
                  background: "linear-gradient(90deg, #0045C8, #2EE8D1)",
                  boxShadow: "0 0 12px rgba(46, 232, 209, 0.7)",
                }}
              ></div>
              <div
                className="gauge-fill-gap"
                style={{
                  width: "81.2%",
                  background: "repeating-linear-gradient(-45deg, #0c1930, #0c1930 6px, #132442 6px, #132442 12px)",
                }}
              ></div>
            </div>

            <div className="gauge-footer" style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#94A3B8", marginTop: "12px" }}>
              <span>Active Load: <strong style={{ color: "var(--aqua)" }}>850MW</strong></span>
              <span>Execution Gap: <strong style={{ color: "var(--aqua)" }}>81.2% Unutilised Capacity</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
