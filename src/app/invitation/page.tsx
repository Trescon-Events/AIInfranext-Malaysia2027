import React from "react";
import PdpaConsent from "@/components/PdpaConsent";
import FormCard from "@/components/FormCard";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invited Delegate Confirmation",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InvitationPage() {
  return (
    <>
      <header className="reduced-header">
        <div className="container reduced-header-wrap">
          <div className="brand-link">
            <Image
              src={getAssetPath("/images/logo/logo-horizontal.svg")}
              alt="AI InfraNext"
              width={260}
              height={38}
              className="brand-logo-img"
            />
          </div>
          <div className="reduced-header-meta">
            <span>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            <span className="reduced-badge" style={{ background: "#EAF6F0", color: "var(--green)" }}>
              COMPLIMENTARY PASS
            </span>
          </div>
          <a href="#confirm-section" className="btn btn-primary" style={{ padding: "9px 18px", fontSize: "13px" }}>
            Confirm your place
          </a>
        </div>
      </header>

      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow" style={{ color: "var(--aqua)" }}>By invitation</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "18px" }}>
              You have been invited to AI InfraNext | Malaysia 2027
            </h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              A two-day executive summit connecting enterprise AI workload demand with the infrastructure required for production AI. 800+ senior enterprise, government and infrastructure leaders convened in Kuala Lumpur.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#confirm-section" className="btn btn-primary">
                Confirm your place →
              </a>
              <span className="meta-line" style={{ color: "var(--aqua)" }}>
                20–21 July 2027 · Kuala Lumpur, Malaysia · Complimentary Delegate Pass
              </span>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>Why you are on this list</h2>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              Delegate invitations are issued strictly to leaders holding an active mandate across enterprise AI workloads, accelerated compute, cloud architecture, data management, cyber resilience or digital infrastructure.
            </p>
            <p style={{ fontSize: "15px", color: "var(--grey)", maxWidth: "76ch" }}>
              The summit is deliberately senior and focused on execution. The discussions are calibrated for decision-makers who evaluate, specify and operate the systems powering production AI.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <h2>What two days gets you</h2>
            <p style={{ marginBottom: "28px" }}>Actionable clarity across the four binding constraints on enterprise AI deployment:</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Infrastructure Benchmarks</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Independent architectural metrics and hardware trade-offs untangled from vendor marketing claims.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Power &amp; Cooling Solutions</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Direct engineering insights into grid access, high-density racks, and direct-to-chip liquid cooling.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Cloud Sovereignty Clarity</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Practical guidance on National Cloud Computing Policy, PDPA compliance, and domestic model governance.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "8px" }}>Direct Peer Alignment</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Structured, closed-door engagement with fellow infrastructure heads navigating identical deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-wash" id="confirm-section">
          <div className="container-narrow">
            <FormCard
              title="Confirm your reserved place"
              subtitle="Your invitation includes complimentary executive access to all keynotes, panels and the exhibition floor for both summit days."
              submitText="Confirm Delegate Pass"
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Ts. Syahril Azman" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Official work email</label>
                  <input type="email" className="form-control" required placeholder="name@organisation.my" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation / Enterprise</label>
                  <input type="text" className="form-control" required placeholder="Company name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Designation / Job title</label>
                  <input type="text" className="form-control" required placeholder="e.g. Chief Information Officer" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile phone number</label>
                  <input type="tel" className="form-control" required placeholder="+60 12-345 6789" />
                </div>
              </div>

              <PdpaConsent />
            </FormCard>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{ padding: "32px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12.5px" }}>
          <div>&copy; 2027 Trescon Events Organizing Ltd. All rights reserved.</div>
          <div>Confidential &amp; Non-Transferable Invitation</div>
        </div>
      </footer>
    </>
  );
}
