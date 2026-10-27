import React from "react";

interface OrgItem {
  name: string;
  logo: string;
  scale?: "wide" | "tall" | "standard";
}

const malaysiaLogos: OrgItem[] = [
  { name: "National AI Office / AI Malaysia Berhad", logo: "/images/logos/organisations/national-ai-office.svg", scale: "wide" },
  { name: "CyberSecurity Malaysia", logo: "/images/logos/organisations/cybersecurity-malaysia.svg", scale: "wide" },
  { name: "Ministry of Digital", logo: "/images/logos/organisations/ministry-of-digital-malaysia.webp", scale: "tall" },
  { name: "MIDA", logo: "/images/logos/organisations/mida.png", scale: "wide" },
  { name: "MDEC", logo: "/images/logos/organisations/mdec.svg", scale: "wide" },
  { name: "PETRONAS", logo: "/images/logos/organisations/petronas.svg", scale: "wide" },
  { name: "CelcomDigi", logo: "/images/logos/organisations/celcomdigi.svg", scale: "wide" },
  { name: "Maxis", logo: "/images/logos/organisations/maxis.svg", scale: "standard" },
  { name: "Axiata Group", logo: "/images/logos/organisations/axiata.svg", scale: "standard" },
  { name: "CIMB", logo: "/images/logos/organisations/cimb.svg", scale: "wide" },
  { name: "Maybank", logo: "/images/logos/organisations/maybank.svg", scale: "wide" },
  { name: "Bursa Malaysia", logo: "/images/logos/organisations/bursa-malaysia.svg", scale: "wide" },
  { name: "Pos Malaysia", logo: "/images/logos/organisations/pos-malaysia.svg", scale: "standard" },
  { name: "Johor Corporation", logo: "/images/logos/organisations/jcorp.png", scale: "standard" },
  { name: "Standard Chartered Malaysia", logo: "/images/logos/organisations/standard-chartered.png", scale: "standard" },
];

const regionalLogos: OrgItem[] = [
  { name: "GovTech Indonesia", logo: "/images/logos/organisations/ina-digital.png", scale: "standard" },
  { name: "BRIN", logo: "/images/logos/organisations/brin.svg", scale: "tall" },
  { name: "KORIKA", logo: "/images/logos/organisations/korika.png", scale: "standard" },
  { name: "Toyota Astra Motor", logo: "/images/logos/organisations/toyota.svg", scale: "wide" },
  { name: "Kalbe Farma", logo: "/images/logos/organisations/kalbe.svg", scale: "standard" },
  { name: "DANA Indonesia", logo: "/images/logos/organisations/dana.svg", scale: "wide" },
  { name: "British American Tobacco", logo: "/images/logos/organisations/bat.svg", scale: "wide" },
  { name: "Ørsted", logo: "/images/logos/organisations/orsted.png", scale: "standard" },
  { name: "Coca-Cola", logo: "/images/logos/organisations/coca-cola.svg", scale: "wide" },
  { name: "EY", logo: "/images/logos/organisations/ey.jpg", scale: "tall" },
  { name: "McKinsey & Company", logo: "/images/logos/organisations/mckinsey.svg", scale: "wide" },
  { name: "Boston Consulting Group", logo: "/images/logos/organisations/bcg.png", scale: "standard" },
];

function getLogoScaleClass(scale?: "wide" | "tall" | "standard") {
  switch (scale) {
    case "tall":
      return "scale-tall";
    case "wide":
      return "scale-wide";
    case "standard":
    default:
      return "scale-standard";
  }
}

export default function OrgLogoWall() {
  return (
    <div className="org-logo-wall-wrapper">
      {/* Group 1: Malaysia Ecosystem */}
      <div style={{ marginBottom: "32px" }}>
        <div className="logo-group-header">
          <span className="logo-group-title">Malaysia Ecosystem</span>
          <div className="logo-group-line"></div>
        </div>
        <div className="logo-wall-grid">
          {malaysiaLogos.map((org, i) => (
            <div key={i} className="logo-wall-item" title={org.name}>
              <img
                src={org.logo}
                alt={org.name}
                loading="lazy"
                decoding="async"
                className={`org-logo-img ${getLogoScaleClass(org.scale)}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Group 2: Regional Ecosystem */}
      <div>
        <div className="logo-group-header">
          <span className="logo-group-title">Regional Ecosystem</span>
          <div className="logo-group-line"></div>
        </div>
        <div className="logo-wall-grid">
          {regionalLogos.map((org, i) => (
            <div key={i} className="logo-wall-item" title={org.name}>
              <img
                src={org.logo}
                alt={org.name}
                loading="lazy"
                decoding="async"
                className={`org-logo-img ${getLogoScaleClass(org.scale)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}