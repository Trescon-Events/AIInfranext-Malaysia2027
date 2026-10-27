import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PillarCards from "@/components/PillarCards";
import TwoDoorAttendance from "@/components/TwoDoorAttendance";
import CtaTwinBands from "@/components/CtaTwinBands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "From infrastructure capacity to enterprise value. Malaysia has approved tens of billions in data-centre and cloud investments. AI InfraNext exists for the executive decisions that connect that capacity to enterprise production.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* S1 · Page Intro */}
        <section className="section section-dark dark-grid" style={{ position: "relative", paddingTop: "80px", paddingBottom: "80px", overflow: "hidden" }}>
          {/* Ambient stage video background */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }} aria-hidden="true">
            <video
              id="about-hero-video"
              src="/videos/s4_ambient_stage.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/s4-video-poster.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.35) contrast(1.15)",
                transform: "scale(1.05)",
              }}
            >
              <source src="/videos/s4_ambient_stage.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay" style={{ zIndex: 1 }}></div>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="eyebrow">About</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "18px" }}>From infrastructure capacity to enterprise value</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6 }}>
              Malaysia has approved tens of billions in data-centre and cloud investments. AI InfraNext exists for the executive decisions that connect that capacity to enterprise production.
            </p>
          </div>
        </section>

        {/* S2 · What AI InfraNext is */}
        <section className="section section-light">
          <div className="container">
            <h2>A summit about the layer underneath enterprise AI</h2>
            <p>
              AI InfraNext | Malaysia 2027 is a two-day executive summit connecting the enterprises creating AI workload demand with the cloud, compute, data centre, power, connectivity, security and capital ecosystem required to run AI at scale.
            </p>
            <p>
              Infrastructure on this scale is not decided in silos. It is decided continuously across power availability, thermal architecture, workload portability, sovereign data controls and deployment economics. AI InfraNext convenes that specific leadership group: enterprise workload owners, infrastructure operators, cloud platforms, national regulators and the capital underwriting the build.
            </p>
          </div>
        </section>

        {/* S3 · Why a dedicated platform */}
        <section className="section section-wash">
          <div className="container">
            <h2>Infrastructure is now the constraint, not the ambition</h2>
            <p>
              As Malaysian enterprises move from pilot projects to operational production, physical and digital infrastructure becomes the binding constraint on AI deployment. Production AI demands high-density accelerated compute, specialised cooling, grid stability, high-bandwidth interconnectivity, robust data governance and resilient cyber architectures.
            </p>
            <p>
              This reality elevates a distinct executive group: heads of infrastructure, enterprise architects, cloud leaders, CISOs, data centre operators, power utility planners and infrastructure financiers. These roles are rarely the focus of general AI business conferences, yet they determine whether enterprise AI can operate reliably, securely and economically.
            </p>
          </div>
        </section>

        {/* S4 · The market case — four sub-sections */}
        <section className="section section-light">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Market Foundation</div>
            <h2>Why Malaysia, why now</h2>
            <p style={{ marginBottom: "32px" }}>
              Four forces are converging simultaneously: institutionalised national AI policy, hyperscale digital infrastructure approvals, severe power and cooling requirements, and a deep industrial and semiconductor demand base.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "36px" }}>
              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">4.1 Policy Execution</span>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "10px" }}>Policy is moving from ambition to execution</h3>
                <p style={{ fontSize: "13.5px", color: "var(--ink)", margin: 0 }}>
                  With the establishment of AI Malaysia Berhad as the national lead agency and the publication of the National AI Action Plan 2026–2030, Malaysia&apos;s policy framework has shifted toward concrete implementation. Supported by the National Cloud Computing Policy (NCCP) and the Cyber Security Act 2024, governance is being translated into clear operational and procurement rules.
                </p>
              </div>

              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">4.2 Capital Deployment</span>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "10px" }}>Capital and capacity are moving into construction</h3>
                <p style={{ fontSize: "13.5px", color: "var(--ink)", margin: 0 }}>
                  According to MIDA, Malaysia approved approximately RM184.7 billion (US$91.8B equivalent) in data-centre-related investments from 2021 through 1H 2026. In the first half of 2026 alone, data-centre and cloud-computing projects accounted for US$22.8 billion equivalent — representing close to 44% of all approved investments across all sectors.
                </p>
              </div>

              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">4.3 Physical Constraints</span>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "10px" }}>Power and cooling have become strategic priorities</h3>
                <p style={{ fontSize: "13.5px", color: "var(--ink)", margin: 0 }}>
                  At year-end 2025, Tenaga Nasional Berhad (TNB) recorded approximately 850MW of actual connected data centre load utilisation, with 35 projects representing roughly 4.5GW of total maximum demand in the connected pipeline. Securing high-density power supply, expanding renewable energy access, and deploying liquid cooling have become boardroom-level decisions.
                </p>
              </div>

              <div style={{ background: "var(--wash)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">4.4 Industrial Demand</span>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "10px" }}>Industrial and semiconductor depth creates real demand</h3>
                <p style={{ fontSize: "13.5px", color: "var(--ink)", margin: 0 }}>
                  Malaysia&apos;s deep semiconductor, packaging and electronics manufacturing base provides an immediate pool of compute-intensive, real-world AI workloads. Under the National Semiconductor Strategy and smart-factory initiatives targeting 3,000 smart facilities by 2030, production-scale AI is an industrial imperative rather than a theoretical exercise.
                </p>
              </div>
            </div>

            <div style={{ background: "var(--light)", borderLeft: "4px solid var(--cobalt)", padding: "20px 24px", borderRadius: "0 6px 6px 0" }}>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--navy)", margin: 0 }}>
                Malaysia has established the pipeline. The focus must now turn to deployment economics, workload execution and commercial value creation.
              </p>
            </div>
          </div>
        </section>

        {/* S5 · What this is not */}
        <section className="section section-wash">
          <div className="container">
            <h2>The distinction we are drawing</h2>
            <p style={{ marginBottom: "28px" }}>AI InfraNext enforces strict editorial boundaries to preserve actionable executive value.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Not a general AI adoption conference</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  The issue is not whether enterprises should use AI. It is what infrastructure must be engineered, powered and secured to deploy it in production.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Not a data centre real-estate showcase</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Facilities, power and cooling are evaluated strictly as they relate to AI workload density and enterprise demand, not as passive property assets.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Not a policy advocacy lobby</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Government participate as vital ecosystem partners. The summit does not lobby for specific commercial regulatory outcomes.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Not an uncapped vendor exhibition</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Editorial control of the agenda sits strictly with Trescon. Sponsor speaking positions are capped to protect agenda independence.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Not a general consumer crowd</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Delegate qualification is strictly enforced. Verified executive relevance is the only metric.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* S6 · Four Pillars Expanded */}
        <section className="section section-light">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Pillars</div>
            <h2>Programme architecture</h2>
            <p style={{ marginBottom: "28px" }}>Four decisions spanning the entire infrastructure stack, running across two intensive days.</p>

            <PillarCards />
            <p style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--grey)", marginTop: "16px" }}>
              Capital, policy, sustainability, infrastructure economics and talent run across all four.
            </p>
          </div>
        </section>

        {/* S7 & S8 · Questions & Formats */}
        <section className="section section-wash">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px" }}>
              <div>
                <h2>The questions the summit answers</h2>
                <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "var(--ink)", lineHeight: 1.7 }}>
                  <li>Which enterprise AI workloads generate commercial returns and require dedicated compute?</li>
                  <li>How do enterprises benchmark private GPU clusters against hyperscale AI cloud services?</li>
                  <li>What power and thermal solutions unblock high-density deployments in Malaysian climates?</li>
                  <li>How do regulated sectors maintain compliance with the NCCP and Cyber Security Act 2024?</li>
                  <li>How can operators and developers access high-voltage utility allocations reliably?</li>
                </ul>
              </div>
              <div>
                <h2>Programme formats</h2>
                <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "var(--ink)", lineHeight: 1.7 }}>
                  <li><strong>Keynotes:</strong> Unfiltered infrastructure strategic directions from national and global leaders.</li>
                  <li><strong>Executive Panels:</strong> Cross-sector debates addressing commercial, technical and regulatory trade-offs.</li>
                  <li><strong>Fireside Chats:</strong> Frank assessments of live enterprise deployment challenges.</li>
                  <li><strong>Infrastructure Case Studies:</strong> Verified operational blueprints and engineering metrics.</li>
                  <li><strong>Closed-Door CXO Roundtables:</strong> Curated, Chatham House rule sessions for peer alignment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* S9 · Who is in the room */}
        <section className="section section-light">
          <div className="container">
            <h2>Who is in the room</h2>
            <p style={{ marginBottom: "28px" }}>Attendance is balanced across the five core constituencies with priority representation from banking, energy, telecommunications, semiconductor manufacturing and logistics.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div className="card"><b>Banking &amp; Financial Services</b>Core banking AI, fraud modeling, sovereign data residency</div>
              <div className="card"><b>Energy &amp; Utilities</b>Grid capacity, high-voltage substations, green energy tariffs</div>
              <div className="card"><b>Telecommunications</b>Regional transit, dark fibre, edge compute, low latency</div>
              <div className="card"><b>Semiconductors &amp; Electronics</b>Advanced packaging, smart factories, yield analytics</div>
              <div className="card"><b>Government &amp; Regulators</b>AI governance, cybersecurity standards, national roadmaps</div>
            </div>
          </div>
        </section>

        {/* S10 · Attendance Options */}
        <section className="section section-wash">
          <div className="container">
            <h2>How to attend</h2>
            <p>Access is structured around professional qualification and role mandate to preserve executive quality on the floor.</p>
            <TwoDoorAttendance />
          </div>
        </section>

        {/* S11 · What the summit is for */}
        <section className="section section-light">
          <div className="container">
            <h2>What the summit delivers for Malaysia</h2>
            <p style={{ marginBottom: "24px" }}>Seven concrete outcomes designed to convert announced pipeline into productive execution:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>1. Workload Reality</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Clarity on which enterprise AI workloads actually require dedicated high-density capacity.</p>
              </div>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>2. Power &amp; Thermal Feasibility</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Engineering solutions for liquid cooling retrofits and grid connection timelines.</p>
              </div>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>3. Cloud Sovereignty Frameworks</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Navigating data residency, domestic clouds, and national regulatory expectations.</p>
              </div>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>4. Commercial Deal Acceleration</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Direct engagement between enterprise procurement committees and infrastructure leaders.</p>
              </div>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>5. Capital Allocation Confidence</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Providing institutional and project financiers with transparent enterprise demand signals.</p>
              </div>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>6. Cyber Resilience Benchmarks</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Operationalising the Cyber Security Act 2024 across accelerated compute fabrics.</p>
              </div>
              <div style={{ padding: "18px", border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "var(--wash)" }}>
                <strong>7. Industrial AI Integration</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Anchoring AI infrastructure into Malaysia&apos;s national semiconductor and manufacturing base.</p>
              </div>
            </div>
          </div>
        </section>

        {/* S12 · About Trescon */}
        <section className="section section-wash">
          <div className="container">
            <h2>About Trescon</h2>
            <p style={{ maxWidth: "76ch", marginBottom: "28px" }}>
              AI InfraNext is organised by Trescon, the team behind World AI Show – the world&apos;s longest-running AI summit series, with 48 editions completed across four continents and more than 42,000 C-level executives convened.
            </p>

            <div className="stat-grid" style={{ boxShadow: "none" }}>
              <div className="stat-card"><div className="stat-number">48</div><div className="stat-label">Editions completed</div></div>
              <div className="stat-card"><div className="stat-number">42,000+</div><div className="stat-label">C-level executives</div></div>
              <div className="stat-card"><div className="stat-number">2,600+</div><div className="stat-label">Speakers hosted</div></div>
              <div className="stat-card"><div className="stat-number">4</div><div className="stat-label">Continents</div></div>
            </div>
          </div>
        </section>

        {/* S13 · Twin Closing CTA */}
        <CtaTwinBands />
      </main>

      <Footer />
    </>
  );
}
