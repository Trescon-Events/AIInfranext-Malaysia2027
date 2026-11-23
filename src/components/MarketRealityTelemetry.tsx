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
            backgroundImage: `linear-gradient(135deg, rgba(2, 7, 28, 0.88) 0%, rgba(7, 21, 47, 0.5) 100%), url(${getAssetPath("/images/market-reality-bg.png")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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
        <div className="telemetry-panel">
          {/* Card 1 */}
          <div className="telemetry-stat-card">
            <div className="stat-header">
              <span className="stat-title">Approved Since 2021</span>
              <span className="stat-tag">MIDA 1H 2026</span>
            </div>
            <div className="stat-val-row">
              <div className="telemetry-stat-number">US$91.8B</div>
            </div>
            <p className="stat-meta">RM184.7B equivalent in data-centre-related investments approved across Malaysia.</p>
          </div>

          {/* Card 2 */}
          <div className="telemetry-stat-card">
            <div className="stat-header">
              <span className="stat-title">Capital Surge in 1H 2026</span>
              <span className="stat-tag">44% of Total</span>
            </div>
            <div className="stat-val-row">
              <div className="telemetry-stat-number">US$22.8B</div>
              <span className="stat-sub-badge">44% Share</span>
            </div>
            <p className="stat-meta">Cloud and DC investments accounted for nearly half of all national investment approvals in six months.</p>
          </div>

          {/* Card 3: Live Utilization Gauge */}
          <div className="gauge-card">
            <div className="gauge-header">
              <span className="gauge-title">Connected Load vs. Contracted Pipeline</span>
              <span className="gauge-source">35 Projects</span>
            </div>

            <div className="gauge-metrics">
              <span className="metric-active">● 850MW Operational (18.8%)</span>
              <span className="metric-pipe">4,500MW (4.5GW) Pipeline Gap</span>
            </div>

            <div className="gauge-track">
              <div className="gauge-fill-active"></div>
              <div className="gauge-fill-gap"></div>
            </div>

            <div className="gauge-footer">
              <span>Active Load: <strong>850MW</strong></span>
              <span>Execution Gap: <strong>81.2% Unutilised Capacity</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
