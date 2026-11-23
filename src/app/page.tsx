import React from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatRow from "@/components/StatRow";
import MarketRealityTelemetry from "@/components/MarketRealityTelemetry";
import WhatThisIsSection from "@/components/WhatThisIsSection";
import VirtualStageExperience from "@/components/VirtualStageExperience";
import ConstituencyStack from "@/components/ConstituencyStack";
import TwoDoorAttendance from "@/components/TwoDoorAttendance";
import SpeakerCarousel from "@/components/SpeakerCarousel";
import OrgLogoWall from "@/components/OrgLogoWall";
import CtaTwinBands from "@/components/CtaTwinBands";
import FaqAccordion from "@/components/FaqAccordion";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI InfraNext | Malaysia 2027?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI InfraNext is an executive summit connecting enterprise AI workload demand with the compute, cloud, data centre, power, connectivity, security and capital required for production AI.",
        },
      },
      {
        "@type": "Question",
        name: "Who should attend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Enterprise and public-sector workload owners (CIOs, CTOs, CISOs, CDAOs), hyperscale and cloud platforms, data centre operators, power and utility planners, government regulators, and infrastructure investors.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from a data centre conference or an AI summit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is narrower than an AI adoption summit by focusing exclusively on physical and digital infrastructure constraints, and broader than a data centre event by connecting facilities directly to enterprise AI workload requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What does the programme cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Four central decisions: 01 Enterprise AI demand, compute and AI factories; 02 AI-ready data centres, power and thermal infrastructure; 03 Trusted cloud, data, connectivity and sovereign capability; 04 Secure and production-scale enterprise AI.",
        },
      },
      {
        "@type": "Question",
        name: "How do I attend, and what does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Senior enterprise, government and infrastructure leaders attend on a complimentary Delegate Pass by invitation and application. Technology providers and consultancies may purchase a Business Pass for USD 499.",
        },
      },
      {
        "@type": "Question",
        name: "Where and when is it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "20–21 July 2027 in Kuala Lumpur, Malaysia.",
        },
      },
      {
        "@type": "Question",
        name: "Can my company sponsor or exhibit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sponsorship, CXO Boardroom partnerships and exhibition packages are available for qualifying technology and infrastructure providers.",
        },
      },
      {
        "@type": "Question",
        name: "Who organises AI InfraNext?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI InfraNext is organised by Trescon, the global business events team behind World AI Show – the world's longest-running AI summit series, with 48 editions completed across four continents.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* S1 · Hero */}
        <section className="hero-section dark-grid">
          {/* Full-bleed background with kinetic infrastructure telemetry video */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }} aria-hidden="true">
            <video
              id="hero-video"
              src={getAssetPath("/video/hero-reel.mp4")}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={getAssetPath("/images/hero-video-poster.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.40) contrast(1.15)",
                transform: "scale(1.08)",
                transformOrigin: "center center",
              }}
            >
              <source src="/video/hero-reel.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <div className="eyebrow" style={{ marginBottom: "16px" }}>
              <span className="eyebrow-beacon"></span>
              <span>Executive AI infrastructure summit</span>
            </div>
            <h1 className="hero-h1">Where AI infrastructure meets enterprise demand</h1>
            <div className="meta-line" style={{ marginBottom: "28px" }}>
              <span className="eyebrow-beacon"></span>
              <span>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            </div>
            <p className="hero-sub">
              The executive summit connecting enterprise AI workload demand with the compute, cloud, data centre, power, connectivity, security and capital required for production AI.
            </p>

            <div className="hero-cta-group">
              <Link href="/register/" className="btn btn-primary">
                Register
              </Link>
              <Link href="/sponsor/" className="btn btn-outline-white">
                Sponsor
              </Link>
              <Link href="/infopack/" className="btn btn-link">
                Request the infopack →
              </Link>
            </div>

            <div className="hero-grounding-line" aria-hidden="true">
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--cyan)" }}></span>
              <span style={{ height: "1px", flex: 1, background: "linear-gradient(to right, rgba(255,255,255,0.2), transparent)" }}></span>
            </div>
          </div>
        </section>

        {/* S2 · Stat Strip (Updated to 500+ Delegates, 40+ Speakers, 4 Content Pillars, 2 Days) */}
        <StatRow overlap={true} />

        {/* S3 · Market Reality Telemetry HUD Frame */}
        <section className="section section-wash" style={{ padding: "48px 0" }}>
          <div className="container">
            <MarketRealityTelemetry />
          </div>
        </section>

        {/* S4 · What this is (With Ambient Stage Video Background & 3-Column Institutional Triptych) */}
        <WhatThisIsSection />

        {/* S5 · The four pillars (Theatrical Stage Presentation from AI Infra Indonesia) */}
        <section className="section section-dark" style={{ padding: "64px 0" }}>
          <div className="container">
            <VirtualStageExperience />
          </div>
        </section>

        {/* S6 · Stage Faculty / Speakers (Placed directly after the Agenda / Pillars as instructed) */}
        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow">Track record</div>
            <h2>Previously on our stages</h2>
            <p style={{ marginBottom: "28px" }}>Leaders who have taken the stage across Trescon&apos;s summit series in Malaysia.</p>

            <SpeakerCarousel />

            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/speakers/" className="btn btn-outline" style={{ marginRight: "12px" }}>
                View all speakers →
              </Link>
              <Link href="/speak/" className="btn btn-primary">
                Apply to speak →
              </Link>
            </div>
          </div>
        </section>

        {/* S7 · Who is in the room ("Five groups. One shared build.") */}
        <section className="section section-light">
          <div className="container">
            <h2>Five groups. One shared build.</h2>
            <p>The summit convenes the interlocking ecosystem that decides, operates and funds production AI infrastructure in Malaysia.</p>

            <ConstituencyStack />
          </div>
        </section>

        {/* S8 · How to attend ("Built for High-Level Collaboration, Not Crowds") */}
        <section className="section section-wash">
          <div className="container">
            <h2>Built for High-Level Collaboration, Not Crowds</h2>
            <p>AI InfraNext is intentionally capped to bring together genuine decision-makers across enterprise AI, utilities, and digital infrastructure.</p>

            <TwoDoorAttendance />
          </div>
        </section>

        {/* Note: Standalone old S8 Sponsor Band removed as requested */}

        {/* S9a · Credibility */}
        <section className="section section-wash">
          <div className="container">
            <h2>A dedicated infrastructure platform. Backed by proven convening power.</h2>
            <p style={{ marginBottom: "32px" }}>
              AI InfraNext is organised by Trescon, the team behind World AI Show – the world&apos;s longest-running AI summit series, with 48 editions completed across four continents and more than 42,000 C-level executives convened.
            </p>

            <div className="stat-grid" style={{ boxShadow: "none" }}>
              <div className="stat-card">
                <div className="stat-number">48</div>
                <div className="stat-label">World AI Show editions completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">42,000+</div>
                <div className="stat-label">C-level executives convened</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2,600+</div>
                <div className="stat-label">Speakers hosted</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Continents</div>
              </div>
            </div>
          </div>
        </section>

        {/* S9b · Organisation logo band */}
        <section className="section section-light">
          <div className="container">
            <div style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 700, color: "var(--grey)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
              Convening Record
            </div>
            <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: "28px" }}>
              Leaders from these organisations have taken the stage across Trescon&apos;s summit series in Malaysia and the wider region
            </p>

            <OrgLogoWall />
          </div>
        </section>

        {/* S10 · Twin closing CTA bands */}
        <CtaTwinBands />

        {/* S11 · Speak at the summit */}
        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow">Speaking</div>
            <h2>If you are putting AI into production, we want you on the stage</h2>
            <p style={{ maxWidth: "72ch", marginBottom: "24px" }}>
              We are looking for leaders running live infrastructure deployments: named enterprise builds, accelerated compute architectures, grid constraints, and decisions that required hard trade-offs.
            </p>
            <Link href="/speak/" className="btn btn-outline">
              Apply to speak →
            </Link>
          </div>
        </section>

        {/* S12 · Stay updated */}
        <section className="section section-light">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Executive Briefing</div>
            <h2>Follow the build</h2>
            <p style={{ maxWidth: "72ch", marginBottom: "28px" }}>
              Executive briefings and market analysis on the infrastructure decisions moving Malaysia&apos;s AI deployment from announced to operational.
            </p>

            <form style={{ display: "flex", flexWrap: "wrap", gap: "12px", maxWidth: "600px", marginBottom: "20px" }}>
              <input type="email" className="form-control" placeholder="Work email" required style={{ flex: 1, minWidth: "240px" }} />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <div style={{ fontSize: "12px", color: "var(--grey)" }}>
              No marketing noise. Unsubscribe at any time. Read our{" "}
              <Link href="/privacy/" style={{ color: "var(--cobalt)", textDecoration: "underline" }}>
                privacy policy
              </Link>
              .
            </div>
          </div>
        </section>

        {/* S13 · FAQ */}
        <section className="section section-wash" id="faq">
          <div className="container">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently asked questions</h2>
            <p style={{ marginBottom: "32px" }}>Direct answers on participation, programme scope and qualifications.</p>

            <FaqAccordion />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
