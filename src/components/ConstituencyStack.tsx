"use client";

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
      tags: ["Enterprise AI Demand", "Workload Profiling", "Mission-Critical Systems"],
    },
    {
      num: "GROUP 02",
      title: "Hyperscalers, AI cloud and compute providers",
      desc: "The global and domestic platforms providing GPU capacity, model hosting and accelerated computing infrastructure.",
      image: "/images/constituencies/constituency-02-hyperscalers-cloud.webp",
      alt: "Hyperscalers, AI cloud and compute providers",
      tags: ["GPU Fabrics", "Accelerated Compute", "Cloud Platforms"],
    },
    {
      num: "GROUP 03",
      title: "Data centre, power and connectivity operators",
      desc: "Campus developers, colocation operators, national grid planners, energy stakeholders, subsea cable and telco network leaders.",
      image: "/images/constituencies/constituency-03-datacenter-operators.webp",
      alt: "Data centre, power and connectivity operators",
      tags: ["High-Density Racks", "Liquid Cooling", "Grid & Power"],
    },
    {
      num: "GROUP 04",
      title: "Government, agencies and regulators",
      desc: "The policy leadership shaping Malaysia's AI Nation 2030 roadmap, digital regulations, cybersecurity laws and energy frameworks.",
      image: "/images/constituencies/constituency-04-government-regulators.webp",
      alt: "Government, agencies and regulators",
      tags: ["AI Nation 2030", "Cyber Security Act 2024", "Sovereign AI"],
    },
    {
      num: "GROUP 05",
      title: "Infrastructure capital and investment",
      desc: "Sovereign wealth funds, private equity, infrastructure project finance, green capital and institutional investors backing the build.",
      image: "/images/constituencies/constituency-05-infrastructure-capital.webp",
      alt: "Infrastructure capital and investment",
      tags: ["Project Finance", "Private Equity", "Green Capital Integration"],
    },
  ];

  return (
    <div className="constituency-stack">
      {groups.map((g, idx) => {
        // Alternating pattern:
        // idx 0, 2, 4 -> Image on left, Content on right (image-left)
        // idx 1, 3    -> Content on left, Image on right (image-right)
        const isImageLeft = idx % 2 === 0;

        return (
          <div
            key={idx}
            className={`constituency-card ${isImageLeft ? "image-left" : "image-right"}`}
          >
            {/* Visual Column */}
            <div className="constituency-img-col">
              <Image
                src={getAssetPath(g.image)}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Editorial / Content Column */}
            <div className="constituency-text-col">
              <span className="constituency-badge">{g.num}</span>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              {g.tags && (
                <div className="constituency-tags">
                  {g.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="constituency-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
