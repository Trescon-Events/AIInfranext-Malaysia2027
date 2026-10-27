import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CXO Boardroom Partner",
  description: "A keynote reaches a room. A boardroom reaches an account list. Closed-door executive session with up to 15 qualified enterprise decision-makers.",
};

export default function CxoBoardroomPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow">CXO Boardroom Partner</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "18px" }}>
              A keynote reaches a room.<br />
              A boardroom reaches an account list.
            </h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              A closed-door session with up to 15 senior enterprise and government decision-makers, selected against your target industries, organisations and seniority levels. You open it. You moderate it.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#boardroom-form" className="btn btn-primary">
                Book a conversation →
              </a>
              <span className="meta-line" style={{ color: "var(--aqua)" }}>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>The room where the deal moves</h2>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              Fifteen of the people you are trying to reach, in a private room, for a discussion you set the agenda for. No competing tracks, no general audience, no queue afterwards.
            </p>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              This is where technical objections are addressed, where enterprise buying committees meet your engineering and executive leaders, and where target accounts turn into active procurement engagements.
            </p>
            <p style={{ fontSize: "16px", maxWidth: "76ch", color: "var(--grey)" }}>
              Our strongest partners take both: the main stage establishes category authority across 800+ delegates, while the boardroom converts that authority into fifteen direct conversations with priority accounts.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <h2>Four things happen in that room</h2>
            <p style={{ marginBottom: "28px" }}>A structured, Chatham House environment built for high-stakes enterprise alignment.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "32px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">01 Context</span>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>You set the context</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  A senior executive from your organisation delivers the opening address inside the session. This takes place within the boardroom, not on the main stage.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">02 Discussion</span>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>You moderate</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Partner-moderated peer discussion rather than a vendor pitch. The format is tailored to the architectural questions you need answered.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">03 Curation</span>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>We curate the table</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Attendees selected against your preferred target sectors, organisations and seniority levels, drawn from the verified delegate base.
                </p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "24px" }}>
                <span className="eyebrow eyebrow-dark">04 Intelligence</span>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>You keep the room</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>
                  Post-event delegate details for every participant: name, designation and organisation.
                </p>
              </div>
            </div>

            <div style={{ background: "var(--paper)", borderLeft: "4px solid var(--cobalt)", padding: "18px 24px", borderRadius: "0 6px 6px 0" }}>
              <p style={{ fontSize: "14px", color: "var(--navy)", margin: 0 }}>
                <strong>Package Inclusions:</strong> Full branding across session signage and programme agenda. Name, logo and company description on the summit website. Logo on infopacks and the post-event report. Inclusion in official event press releases. Dedicated social announcement. Eight conference passes.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light" id="boardroom-form">
          <div className="container-narrow">
            <FormCard
              title="Send us your target list"
              subtitle="Tell us about the target enterprise accounts and discussion objectives you want to convene. Our team will review and respond within one working day."
              submitText="Book a conversation"
              followUpNote="We will follow up within one working day."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Jason Lim" />
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
                  <input type="text" className="form-control" required placeholder="e.g. Head of Enterprise Sales" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input type="tel" className="form-control" required placeholder="+60 12-345 6789" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Target organisations / industry sectors</label>
                <textarea className="form-control" required placeholder="List target accounts (e.g. Tier 1 banks, energy producers, telcos) or specific roles you wish to convene..."></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Core discussion objective</label>
                <input type="text" className="form-control" required placeholder="e.g. Addressing sovereign data residency constraints in hybrid AI architectures" />
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
