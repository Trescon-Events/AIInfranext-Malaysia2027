"use client";

import React, { useState } from "react";

export default function FindRowAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const rows = [
    {
      cat: "AI compute and AI cloud",
      target: "Heads of AI, platform engineering, CTOs, enterprise architects, data centre operators",
      desc: "Connect directly with engineering leaders transitioning internal models from training experiments to production inference clusters, benchmarking on-premise GPU builds against sovereign cloud instances.",
    },
    {
      cat: "Hyperscale and cloud",
      target: "CIOs, CTOs, heads of cloud, regulated-sector technology leaders, government agencies",
      desc: "Present your domestic Malaysian region, hybrid-cloud management tooling, and enterprise governance frameworks to Tier 1 financial, telecommunication and public sector workload owners.",
    },
    {
      cat: "Data centres",
      target: "Hyperscalers, AI cloud providers, enterprise infrastructure heads, infrastructure capital",
      desc: "Market available multi-megawatt campus capacity, high-density shell availability, and liquid-cooling-ready data halls to tenants seeking immediate operational timelines.",
    },
    {
      cat: "Networking and connectivity",
      target: "Heads of infrastructure, telecom leaders, subsea network developers, interconnect teams",
      desc: "Position high-bandwidth optical backhauls, subsea landing routing, and ultra-low latency data centre interconnect fabrics required for distributed AI clustering.",
    },
    {
      cat: "Cybersecurity",
      target: "CISOs, heads of risk/GRC, security architects, disaster recovery and compliance leaders",
      desc: "Address mandatory compliance with the Cyber Security Act 2024, model weight protection, zero-trust infrastructure access, and real-time inference telemetry security.",
    },
    {
      cat: "Private cloud and HCI",
      target: "Regulated-sector technology leaders, financial architects, sovereign cloud decision-makers",
      desc: "Showcase sovereign on-premise compute appliances, hyperconverged infrastructure, and strict data residency solutions for banking and government clients under PDPA.",
    },
    {
      cat: "Power and cooling",
      target: "Data centre developers, grid engineers, energy transition planners, infrastructure investors",
      desc: "Provide liquid-to-chip, direct-to-chip, immersion thermal solutions, and behind-the-meter green power architectures solving tropical high-density heat rejection.",
    },
    {
      cat: "Systems integration",
      target: "CEOs, CIOs, chief digital officers, enterprise transformation programme directors",
      desc: "Position your enterprise integration advisory, workload orchestration, and legacy modernisation expertise directly in front of buyers managing complex AI transitions.",
    },
    {
      cat: "Capital and finance",
      target: "Campus developers, utility providers, state investment agencies, sovereign wealth funds",
      desc: "Structure project financing, green debt facilities, and joint-venture equity structures with the operators developing multi-gigawatt pipeline facilities across Malaysia.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="find-row-list">
      {rows.map((r, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`find-row-item ${isOpen ? "open" : ""}`}>
            <button className="find-row-btn" type="button" onClick={() => toggle(idx)}>
              <span>{r.cat}</span>
              <span className="find-row-target">{r.target}</span>
            </button>
            <div className="find-row-content">
              <div className="find-row-content-inner">{r.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
