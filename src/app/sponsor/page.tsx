import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FindRowAccordion from "@/components/FindRowAccordion";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship",
  description: "Position your infrastructure in front of enterprise workload owners. Request the sponsorship prospectus for AI InfraNext | Malaysia 2027.",
};

export default function SponsorPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow">Sponsorship · AI InfraNext | Malaysia 2027</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "18px" }}>Be in the room where enterprise infrastructure gets specified</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              Malaysia approved US$22.8B in data-centre and cloud investments in the first half of 2026 alone. The enterprise workloads, compute architectures, power strategies and security frameworks that will define that capacity are being decided now.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#prospectus-form" className="btn btn-primary">
                Request the sponsorship prospectus →
              </a>
              <span className="meta-line" style={{ color: "var(--aqua)" }}>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>You are not buying an audience. You are buying relevance.</h2>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              Sponsors at AI InfraNext are not buying attendance volume. They are buying three things, in this order: authority on the agenda, access to qualified enterprise decision-makers, and structured visibility across Malaysia&apos;s infrastructure ecosystem.
            </p>
            <p style={{ fontSize: "15px", color: "var(--grey)", maxWidth: "76ch" }}>
              Exhibition space is 9 SQM at every tier other than Lead. Floor space is deliberately not the primary product.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <h2>Five groups. Your buyers are across all of them.</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", margin: "28px 0" }}>
              <div className="card"><b>1. Workload Owners</b>CIOs, CTOs, CISOs, Heads of AI &amp; Infrastructure specifying production compute</div>
              <div className="card"><b>2. Compute Providers</b>Hyperscalers, GPU clouds and accelerated infrastructure architects</div>
              <div className="card"><b>3. Facility Operators</b>Campus developers, colocation operators, national grid planners</div>
              <div className="card"><b>4. Government &amp; Agencies</b>National AI Office, CyberSecurity Malaysia, MIDA, digital regulators</div>
              <div className="card"><b>5. Capital Partners</b>Sovereign wealth funds, private equity, infrastructure project finance</div>
            </div>

            <div className="stat-grid" style={{ boxShadow: "none", marginTop: "32px" }}>
              <div className="stat-card"><div className="stat-number">800+</div><div className="stat-label">Delegates</div></div>
              <div className="stat-card"><div className="stat-number">40+</div><div className="stat-label">Speakers</div></div>
              <div className="stat-card"><div className="stat-number">2</div><div className="stat-label">Days</div></div>
              <div className="stat-card"><div className="stat-number">4</div><div className="stat-label">Pillars</div></div>
            </div>

            <div style={{ background: "var(--paper)", borderLeft: "4px solid var(--cyan)", padding: "14px 20px", borderRadius: "0 6px 6px 0", marginTop: "24px" }}>
              <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                Senior enterprise, government and selected infrastructure-investor delegates attend by invitation and qualification. Technology-provider participation is controlled through sponsorship and a limited paid Business Pass.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Target Mapping</div>
            <h2>Find your row</h2>
            <p>Identify your category to see the exact buyer personas and procurement committees you will engage at the summit.</p>

            <FindRowAccordion />
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <h2>Seven ways to participate</h2>
            <p style={{ marginBottom: "28px" }}>Structured tiers designed around agenda authority, target account access, and qualified enterprise visibility.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--cyan)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>Lead</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Own the summit. Dominant stage presence, dedicated press release, and the only tier that includes an exclusive CXO Boardroom built around your target account list.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--cobalt)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>Platinum</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Keynote and panel authority, plus visibility of the delegate list before the doors open.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--grey)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>Gold</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  A keynote slot and the ability to nominate priority target accounts for curated invitation.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>Silver</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  A panel seat and a branded exhibition presence on the showcase floor.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>Bronze</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Ecosystem presence in the room where Malaysia&apos;s AI infrastructure meets enterprise demand.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--cyan)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>CXO Boardroom Partner</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Up to 15 qualified decision-makers, selected by you, in a closed room you moderate. Available standalone or included in Lead.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "3px solid var(--grey)", borderRadius: "var(--radius)", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "6px" }}>Exhibitor</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Branded exhibition space on the floor connecting you directly with 800+ enterprise decision-makers.
                </p>
              </div>
            </div>

            <p style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--grey)", marginTop: "20px" }}>
              Delegate details are shared only where the delegate has consented at registration.
            </p>
          </div>
        </section>

        <section className="section section-wash" id="prospectus-form">
          <div className="container-narrow">
            <FormCard
              title="Tell us who you are trying to reach"
              subtitle="Complete the details below. We will send the comprehensive sponsorship prospectus and follow up within two working days."
              submitText="Request the prospectus"
              followUpNote="We will send the prospectus and follow up within two working days."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. David Wong" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email</label>
                  <input type="email" className="form-control" required placeholder="name@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation</label>
                  <input type="text" className="form-control" required placeholder="Company name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Job title</label>
                  <input type="text" className="form-control" required placeholder="e.g. VP Infrastructure" />
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" required placeholder="e.g. Malaysia, Singapore" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">What you are interested in</label>
                <select className="form-control" required defaultValue="">
                  <option value="">Select an option...</option>
                  <option value="Sponsorship">Sponsorship (Lead, Platinum, Gold, Silver, Bronze)</option>
                  <option value="CXO Boardroom">CXO Boardroom Partner</option>
                  <option value="Exhibition">Exhibition Space (9 SQM / 4 SQM)</option>
                  <option value="Not sure yet">Not sure yet — discuss options</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Which buyers you are trying to reach</label>
                <textarea className="form-control" required placeholder="e.g. Enterprise CIOs in banking specifying high-density compute..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
