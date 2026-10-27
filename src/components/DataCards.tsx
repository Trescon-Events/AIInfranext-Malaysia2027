import React from "react";

export default function DataCards() {
  const cards = [
    {
      status: "Approved since 2021",
      value: "US$91.8B",
      desc: "Data-centre-related investments approved across Malaysia since 2021",
      cite: "Source: MIDA, 1H 2026",
    },
    {
      status: "Approved 1H 2026",
      value: "US$22.8B",
      desc: "Data-centre and cloud approvals in 1H 2026 alone (44% of all approved investment)",
      cite: "Source: MIDA, 1H 2026",
    },
    {
      status: "Connected load vs pipeline",
      value: "850MW / 4.5GW",
      desc: "Actual data-centre load utilisation at year-end 2025 across 4.5GW connected pipeline",
      cite: "Source: TNB Integrated Annual Report, 2025",
    },
  ];

  return (
    <div className="data-card-grid">
      {cards.map((c, idx) => (
        <div key={idx} className="data-card">
          <span className="data-card-status">{c.status}</span>
          <div className="data-card-value">{c.value}</div>
          <div className="data-card-desc">{c.desc}</div>
          <div className="data-card-cite">{c.cite}</div>
        </div>
      ))}
    </div>
  );
}
