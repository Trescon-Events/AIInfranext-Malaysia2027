import React from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

export default function ConstituencyStack() {
  const groups = [
    {
      num: "GROUP 01",
      title: "Enterprise and public-sector workload owners",
      desc: "CIOs, CTOs, CISOs, Chief Data and AI Officers, heads of infrastructure, cloud, and platform engineering from banking, energy, telecoms and advanced manufacturing.",
      image: "/images/constituencies/constituency-01-enterprise-buyers.webp",
      alt: "Enterprise and public-sector workload owners",
    },
    {
      num: "GROUP 02",
      title: "Hyperscalers, AI cloud and compute providers",
      desc: "The global and domestic platforms providing GPU capacity, model hosting and accelerated computing infrastructure.",
      image: "/images/constituencies/constituency-02-hyperscalers-cloud.webp",
      alt: "Hyperscalers, AI cloud and compute providers",
    },
    {
      num: "GROUP 03",
      title: "Data centre, power and connectivity operators",
      desc: "Campus developers, colocation operators, national grid planners, energy stakeholders, subsea cable and telco network leaders.",
      image: "/images/constituencies/constituency-03-datacenter-operators.webp",
      alt: "Data centre, power and connectivity operators",
    },
    {
      num: "GROUP 04",
      title: "Government, agencies and regulators",
      desc: "The policy leadership shaping Malaysia's AI Nation 2030 roadmap, digital regulations, cybersecurity laws and energy frameworks.",
      image: "/images/constituencies/constituency-04-government-regulators.webp",
      alt: "Government, agencies and regulators",
    },
    {
      num: "GROUP 05",
      title: "Infrastructure capital and investment",
      desc: "Sovereign wealth funds, private equity, infrastructure project finance, green capital and institutional investors backing the build.",
      image: "/images/constituencies/constituency-05-infrastructure-capital.webp",
      alt: "Infrastructure capital and investment",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
      {groups.map((g, idx) => (
        <div
          key={idx}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            alignItems: "center",
            padding: "32px",
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(0, 180, 197, 0.4)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
            transition: "all 0.25s ease",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(0, 180, 197, 0.08)",
                  border: "1px solid rgba(0, 180, 197, 0.25)",
                  color: "#006B88",
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {g.num}
              </span>
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--navy)", marginBottom: "12px", lineHeight: 1.25 }}>
              {g.title}
            </h3>
            <p style={{ fontSize: "15px", color: "var(--grey)", lineHeight: 1.6, margin: 0 }}>
              {g.desc}
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "260px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Image
              src={getAssetPath(g.image)}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
