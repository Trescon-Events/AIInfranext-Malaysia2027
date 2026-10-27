import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibit",
  description: "Same room. Same enterprise buyers. Entry-level investment. Reserve your exhibition space at AI InfraNext | Malaysia 2027.",
};

export default function ExhibitPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow">Exhibit · AI InfraNext | Malaysia 2027</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "18px" }}>
              Same room. Same enterprise buyers.<br />
              Entry-level investment.
            </h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              800+ senior enterprise, government and infrastructure decision-makers across two days in Kuala Lumpur, with a branded presence on the showcase floor and visibility across summit channels.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#exhibit-form" className="btn btn-primary">
                Reserve your space →
              </a>
              <span className="meta-line" style={{ color: "var(--aqua)" }}>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>The people you came for</h2>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              The delegate base does not change with the tier. For entry-level exhibitors, direct access to the same 800+ senior decision-makers is the primary conversion driver.
            </p>

            <div className="stat-grid" style={{ boxShadow: "none", margin: "28px 0" }}>
              <div className="stat-card"><div className="stat-number">800+</div><div className="stat-label">Enterprise Delegates</div></div>
              <div className="stat-card"><div className="stat-number">40+</div><div className="stat-label">Keynote &amp; Panel Speakers</div></div>
              <div className="stat-card"><div className="stat-number">2</div><div className="stat-label">Full Exhibition Days</div></div>
              <div className="stat-card"><div className="stat-number">5</div><div className="stat-label">Buyer Constituencies</div></div>
            </div>

            <p style={{ fontSize: "14.5px", color: "var(--grey)" }}>
              Delegates include CIOs, CTOs, CISOs, heads of data, platform architects, facility developers and energy planners representing banking, energy, telecommunications, semiconductor fabrication and government agencies.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <h2>Everything in the package</h2>
            <p style={{ marginBottom: "28px" }}>Designed to deliver maximum commercial return with zero unnecessary exhibition overhead.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "6px" }}>4 SQM Raw Space</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Allocated space on the main showcase floor. Booth build not included, framed intentionally to keep entry costs accessible.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "6px" }}>4 Conference Passes</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Full access for your sales, technical and executive team across both summit days.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "6px" }}>Digital &amp; Web Visibility</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Company profile, logo and website link retained on the official summit site for six months.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "6px" }}>On-Site Branding</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Logo featured across exhibition directional signage, event guide and holding screens.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "6px" }}>Infopack &amp; Report Listing</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Exhibitor branding inside the pre-event infopack and the post-summit market report.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "17px", color: "var(--navy)", marginBottom: "6px" }}>Social Announcement</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Combined social media announcement welcoming confirmed exhibitors to summit channels.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="exhibit-form">
          <div className="container-narrow">
            <FormCard
              title="Reserve your space"
              subtitle="Floor space is allocated strictly in order of confirmation. Complete the form below and our exhibition coordinator will follow up within one working day."
              submitText="Reserve your space"
              followUpNote="Floor space is allocated in order of confirmation. We will follow up within one working day."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Kelvin Chen" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email</label>
                  <input type="email" className="form-control" required placeholder="kelvin@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation</label>
                  <input type="text" className="form-control" required placeholder="Company name" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Job title</label>
                  <input type="text" className="form-control" required placeholder="e.g. Sales Manager" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone number</label>
                  <input type="tel" className="form-control" required placeholder="+60 12-345 6789" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Solutions to be exhibited</label>
                <textarea className="form-control" required placeholder="Describe the hardware, software or consulting capabilities you plan to showcase..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
