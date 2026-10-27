import React from "react";
import Image from "next/image";

export default function ConstituencyStack() {
  const groups = [
    {
      num: "Group 01",
      title: "Enterprise and public-sector workload owners",
      desc: "CIOs, CTOs, CISOs, Chief Data and AI Officers, heads of infrastructure, cloud, and platform engineering from banking, energy, telecoms and advanced manufacturing.",
      image: "/images/constituencies/constituency-01-enterprise-buyers.webp",
      alt: "Enterprise and public-sector workload owners",
      reverse: false,
    },
    {
      num: "Group 02",
      title: "Hyperscalers, AI cloud and compute providers",
      desc: "The global and domestic platforms providing GPU capacity, model hosting and accelerated computing infrastructure.",
      image: "/images/constituencies/constituency-02-hyperscalers-cloud.webp",
      alt: "Hyperscalers, AI cloud and compute providers",
      reverse: true,
    },
    {
      num: "Group 03",
      title: "Data centre, power and connectivity operators",
      desc: "Campus developers, colocation operators, national grid planners, energy stakeholders, subsea cable and telco network leaders.",
      image: "/images/constituencies/constituency-03-datacenter-operators.webp",
      alt: "Data centre, power and connectivity operators",
      reverse: false,
    },
    {
      num: "Group 04",
      title: "Government, agencies and regulators",
      desc: "The policy leadership shaping Malaysia's AI Nation 2030 roadmap, digital regulations, cybersecurity laws and energy frameworks.",
      image: "/images/constituencies/constituency-04-government-regulators.webp",
      alt: "Government, agencies and regulators",
      reverse: true,
    },
    {
      num: "Group 05",
      title: "Infrastructure capital and investment",
      desc: "Sovereign wealth funds, private equity, infrastructure project finance, green capital and institutional investors backing the build.",
      image: "/images/constituencies/constituency-05-infrastructure-capital.webp",
      alt: "Infrastructure capital and investment",
      reverse: false,
    },
  ];

  return (
    <div className="constituency-stack">
      {groups.map((g, idx) => (
        <div key={idx} className={`constituency-row ${g.reverse ? "reverse" : ""}`}>
          <div className="constituency-content">
            <span className="eyebrow eyebrow-dark">{g.num}</span>
            <h3>{g.title}</h3>
            <p>{g.desc}</p>
          </div>
          <div
            className="constituency-img-box"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              minHeight: "220px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow: "0 12px 32px -8px rgba(11, 15, 42, 0.1)",
            }}
          >
            <Image
              src={g.image}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
