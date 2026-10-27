import React from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatRow from "@/components/StatRow";
import DataCards from "@/components/DataCards";
import PillarCards from "@/components/PillarCards";
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

        {/* S2 · Stat Strip */}
        <StatRow overlap={true} />

        {/* S3 · The Argument */}
        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow">Why now</div>
            <h2>
              Malaysia has secured immense infrastructure commitments.<br />
              The challenge now is turning capacity into enterprise value.
            </h2>
            <p>
              With RM184.7 billion (US$91.8B equivalent) approved in data-centre-related investments since 2021 and 44% of 1H 2026 investment approvals concentrated in cloud and data centres, Malaysia&apos;s infrastructure build-out is moving fast. The decisions that matter now are practical: which workloads will run, how enterprises access compute, how power grids adapt, and how infrastructure investments become commercially viable.
            </p>

            <DataCards />

            {/* Asset — Data Visualisation Component */}
            <div className="data-viz-box">
              <div className="data-viz-header">
                <div className="eyebrow" style={{ color: "var(--aqua)" }}>Market Infrastructure Metric</div>
                <h3 style={{ color: "#FFFFFF", marginBottom: "6px" }}>Malaysian Utility Load &amp; Capital Pipeline</h3>
                <p style={{ color: "#C9DCEC", fontSize: "13.5px", margin: 0 }}>
                  Comparison of live connected utilisation against contracted pipeline capacity and 1H 2026 digital infrastructure approvals.
                </p>
              </div>

              <div className="data-viz-bars">
                <div className="bar-row">
                  <div className="bar-labels">
                    <span>Actual Data Centre Load Utilisation (Year-End 2025)</span>
                    <span style={{ color: "var(--cyan)" }}>850MW</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bar-fill-actual">850MW (18.8%)</div>
                  </div>
                  <div className="bar-source-note">Status: Actual operational utilisation · Source: TNB Integrated Annual Report, 2025</div>
                </div>

                <div className="bar-row">
                  <div className="bar-labels">
                    <span>Connected Maximum Demand Pipeline (35 Projects)</span>
                    <span style={{ color: "var(--aqua)" }}>4,500MW (4.5GW)</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bar-fill-pipeline">4.5GW Contracted Pipeline</div>
                  </div>
                  <div className="bar-source-note">Status: Contracted pipeline · Source: TNB Integrated Annual Report, 2025</div>
                </div>
              </div>
            </div>

            <div style={{ background: "var(--paper)", borderLeft: "4px solid var(--cobalt)", padding: "20px 24px", borderRadius: "0 6px 6px 0", marginTop: "28px" }}>
              <p style={{ fontSize: "17px", fontWeight: 600, color: "var(--navy)", margin: 0 }}>
                The next phase of Malaysia&apos;s infrastructure story is not about announcing gigawatts. It is about connecting capacity to production AI.
              </p>
            </div>
          </div>
        </section>

        {/* S4 · What this is */}
        <section className="section section-light">
          <div className="container">
            <h2>Not an AI awareness conference. Not a data centre supply show.</h2>
            <p style={{ marginBottom: "32px" }}>
              AI InfraNext sits directly at the intersection: connecting the enterprise workloads creating demand with the infrastructure required to put AI into production.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "28px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "12px" }}>Narrower than an enterprise AI summit</h3>
                <p style={{ fontSize: "14px", color: "var(--ink)", margin: 0 }}>
                  The question is not whether to adopt AI. It is what compute, networking, power, data architecture and security must exist beneath it.
                </p>
              </div>

              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "28px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "12px" }}>Broader than a data centre event</h3>
                <p style={{ fontSize: "14px", color: "var(--ink)", margin: 0 }}>
                  Data centre capacity, power and cooling matter here because enterprise AI workloads depend on them, not as isolated real estate assets.
                </p>
              </div>

              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "28px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "12px" }}>Built around Malaysian execution</h3>
                <p style={{ fontSize: "14px", color: "var(--ink)", margin: 0 }}>
                  Anchored in Malaysia&apos;s National AI Action Plan 2026–2030, domestic cloud regions, semiconductor engineering depth and enterprise production builds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* S5 · The four pillars */}
        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow">Programme</div>
            <h2>Four decisions. Two days.</h2>
            <p>Each pillar tackles an essential architectural decision required to bring AI into enterprise production.</p>

            <PillarCards />

            <p style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--grey)", marginTop: "16px" }}>
              Capital, policy, sustainability, infrastructure economics and talent run across all four.
            </p>
          </div>
        </section>

        {/* S6 · Who is in the room */}
        <section className="section section-light">
          <div className="container">
            <h2>Five groups. Each one is here for the other four.</h2>
            <p>The summit convenes the interlocking ecosystem that decides, operates and funds production AI infrastructure in Malaysia.</p>

            <ConstituencyStack />
          </div>
        </section>

        {/* S7 · How to attend — two doors */}
        <section className="section section-wash">
          <div className="container">
            <h2>Two ways in. Deliberately.</h2>
            <p>Access is structured around professional qualification and role mandate to preserve executive quality on the floor.</p>

            <TwoDoorAttendance />
          </div>
        </section>

        {/* S8 · Sponsor band */}
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow">Sponsorship</div>
            <h2>Position your infrastructure in front of enterprise workload owners</h2>
            <p style={{ maxWidth: "72ch", marginBottom: "28px" }}>
              Sponsors are not buying crowd volume. They are buying authority on the agenda, access to qualified enterprise buyers specifying compute and cloud, and structured engagement with the organisations scaling AI in Malaysia.
            </p>
            <Link href="/sponsor/" className="btn btn-primary">
              Explore sponsorship →
            </Link>
          </div>
        </section>

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

        {/* S9c · Previously on our stages */}
        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow">Track record</div>
            <h2>Previously on our stages</h2>
            <p style={{ marginBottom: "28px" }}>Leaders who have taken the stage across Trescon&apos;s summit series in Malaysia.</p>

            <SpeakerCarousel />
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
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>

            <div style={{ fontSize: "13.5px", color: "var(--grey)" }}>
              <a href="https://linkedin.com/showcase/ai-infranext" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "var(--cobalt)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Follow AI InfraNext on LinkedIn
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* S13 · FAQ */}
        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently asked questions</h2>
            <p style={{ marginBottom: "28px" }}>Direct answers to core questions regarding participation, qualification and the programme.</p>

            <FaqAccordion />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
