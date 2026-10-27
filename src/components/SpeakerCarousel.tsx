import React from "react";
import Image from "next/image";

export default function SpeakerCarousel() {
  const speakers = [
    {
      name: "Shamsul Izhan Bin Abdul Majid",
      title: "Head, National AI Office, Malaysia",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/shamsul-izhan-bin-abdul-majid.webp",
    },
    {
      name: "Dato' Ts. Dr. Haji Amirudin Bin Abdul Wahab",
      title: "CEO, CyberSecurity Malaysia",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/dato-ts-dr-haji-amirudin-bin-abdul-wahab.webp",
    },
    {
      name: "Suresh Sankaransrinivasan",
      title: "Group Head, Cyber Security & Data Privacy, Axiata Group Berhad",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/suresh-sankaransrinivasan.webp",
    },
    {
      name: "Stephanie Liew",
      title: "CISO, APMEA, British American Tobacco",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/stephanie-liew.webp",
    },
    {
      name: "Dr. Karl Ng",
      title: "VP, Data and AI Ecosystem, MDEC",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/dr-dedy-permadi.webp",
    },
    {
      name: "Mohd Fadzil Harun",
      title: "Head of Digital & Technology Infrastructure, Bursa Malaysia",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/felix-jingga.webp",
    },
    {
      name: "Ahmad Taufiq",
      title: "Head of Enterprise Architecture and Cloud, Pos Malaysia",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/wilbertus-darmadi.webp",
    },
    {
      name: "Farhan Lee",
      title: "Head of Data and Analytics, CIMB",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/dr-irvan-bastian-arief.webp",
    },
    {
      name: "Hazlina Mansor",
      title: "Head of Technology Risk Management, Maybank",
      attr: "World AI Show Malaysia 2025",
      image: "/images/speakers/vivi-yulaswati.webp",
    },
    {
      name: "Ts. Mahadhir Aziz",
      title: "Former CEO, MDEC",
      attr: "World AI Show Malaysia 2024",
      image: "/images/speakers/anindio-daneswara.webp",
    },
    {
      name: "Kalyani Nair",
      title: "Head of Digital and Virtual Banking, Maybank",
      attr: "World AI Show Malaysia 2024",
      image: "/images/speakers/restu-kresnadi.webp",
    },
    {
      name: "Prof. Hammam Riza",
      title: "President, KORIKA",
      attr: "World AI Show Indonesia 2025",
      image: "/images/speakers/prof-hammam-riza.webp",
    },
  ];

  return (
    <div className="speaker-carousel-wrap">
      <div className="speaker-carousel">
        {speakers.map((s, idx) => (
          <div key={idx} className="speaker-card">
            {/* Layer 1: Stage Ambient Glow */}
            <div className="speaker-plane-bg"></div>

            {/* Layer 2: Transparent Cutout Portrait */}
            <div className="speaker-plane-silhouette" style={{ width: "100%", height: "260px", top: "10px", left: "0", transform: "none" }}>
              {s.image ? (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="290px"
                    style={{ objectFit: "contain", objectPosition: "bottom" }}
                  />
                </div>
              ) : (
                <svg viewBox="0 0 100 120" fill="none" width="100%" height="100%">
                  <circle cx="50" cy="40" r="28" fill="#1E3154" />
                  <path d="M10 115 C10 80, 90 80, 90 115 Z" fill="#1E3154" />
                </svg>
              )}
            </div>

            {/* Layer 3: Spline & Parabolic Stage Horizon Torso Dissolve */}
            <div className="speaker-plane-spline"></div>
            <svg
              style={{ position: "absolute", bottom: "90px", left: 0, right: 0, width: "100%", height: "36px", zIndex: 4, pointerEvents: "none" }}
              viewBox="0 0 290 36"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={`spk-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0045C8" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#0045C8" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#00B4C5" stopOpacity="1" />
                  <stop offset="75%" stopColor="#2EE8D1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00B4C5" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M0 36 Q 145 4 290 36" stroke={`url(#spk-grad-${idx})`} strokeWidth="1.5" />
            </svg>

            {/* Layer 4: Live Telemetry Pill */}
            <div className="speaker-plane-telemetry">
              <span className="telemetry-pill">STAGE FACULTY</span>
            </div>

            {/* Layer 5: Meta Content */}
            <div className="speaker-meta-content">
              <div className="speaker-name">{s.name}</div>
              <div className="speaker-title">{s.title}</div>
              <div className="speaker-attr">{s.attr}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
