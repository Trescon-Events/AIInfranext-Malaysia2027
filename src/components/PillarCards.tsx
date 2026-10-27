"use client";

import React, { useState } from "react";

export default function PillarCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const pillars = [
    {
      num: "01",
      title: "Enterprise AI demand, compute and AI factories",
      subtitle: "Accelerated compute fabrics, workload profiling, and model deployment architectures",
      coverage: [
        "Enterprise AI workload profiling and capacity forecasting",
        "GPU clusters, accelerated compute fabrics and interconnect topologies",
        "AI factory architecture: training vs fine-tuning vs low-latency inference",
        "Compute procurement economics: cloud, co-location and on-premise trade-offs",
        "Hybrid deployment models for mission-critical enterprise systems",
      ],
    },
    {
      num: "02",
      title: "AI-ready data centres, power and thermal infrastructure",
      subtitle: "High-density racks, liquid cooling, grid access, and utility engineering",
      coverage: [
        "High-density rack deployments from 40kW to 100kW+ per rack",
        "Direct-to-chip and immersion liquid cooling transition pathways",
        "Grid interconnection, high-voltage sub-stations and TNB capacity planning",
        "Renewable energy integration (Corporate Green Power Programme & TPA)",
        "PUE and WUE efficiency compliance in tropical humid operating environments",
      ],
    },
    {
      num: "03",
      title: "Trusted cloud, data, connectivity and sovereign capability",
      subtitle: "National cloud policy, data residency, dark fibre, and cross-border governance",
      coverage: [
        "National Cloud Computing Policy (NCCP) implementation and compliance",
        "Data residency, sovereignty and cross-border transfer rules under PDPA",
        "Subsea cable landings, regional backhaul and terrestrial dark fibre",
        "Sovereign AI models and Malaysian linguistic/cultural dataset governance",
        "Multi-cloud interconnectivity and low-latency financial exchange fabrics",
      ],
    },
    {
      num: "04",
      title: "Secure and production-scale enterprise AI",
      subtitle: "Cyber Security Act 2024, model weight protection, zero trust, and reliability",
      coverage: [
        "Cyber Security Act 2024 compliance across Critical National Information Infrastructure",
        "Securing AI model weights, training pipelines and fine-tuned enterprise checkpoints",
        "Adversarial testing, data poisoning defense and prompt injection mitigation",
        "Infrastructure identity, zero trust access for accelerated clusters and APIs",
        "Operational resilience, failover engineering and high-availability architecture",
      ],
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pillars-grid">
      {pillars.map((p, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`pillar-card ${isOpen ? "open" : ""}`}>
            <div className="pillar-header" onClick={() => toggle(idx)}>
              <span className="pillar-index">{p.num}</span>
              <div className="pillar-title-wrap">
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-subtitle">{p.subtitle}</div>
              </div>
              <div className="pillar-toggle-icon">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="pillar-body">
              <div className="pillar-body-inner">
                <div className="pillar-coverage-label">Coverage &amp; Decisions</div>
                <ul className="pillar-coverage-list">
                  {p.coverage.map((c, cIdx) => (
                    <li key={cIdx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
