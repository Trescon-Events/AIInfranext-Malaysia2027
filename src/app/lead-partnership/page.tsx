import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Partnership",
  description: "There is one Lead Sponsor at AI InfraNext Malaysia. It has not been taken. The principal infrastructure partnership of the summit.",
};

export default function LeadPartnershipPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow">Lead partnership · One position</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>
              There is one Lead Sponsor at AI InfraNext Malaysia.<br />
              <span style={{ color: "var(--aqua)" }}>It has not been taken.</span>
            </h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              Stage inventory is capped to protect the independence of the agenda. Lead is the only tier that carries a closed-door CXO Boardroom, a dedicated press release, and the front position at the executive summit connecting Malaysia&apos;s AI infrastructure with enterprise demand.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="#conversation-form" className="btn btn-primary">
                Book a conversation →
              </a>
              <span className="meta-line" style={{ color: "var(--aqua)" }}>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>A founding position in the national AI build</h2>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              AI InfraNext is built as a regional series. Following our inaugural Jakarta summit, Malaysia 2027 convenes the country&apos;s most ambitious infrastructure ecosystem.
            </p>
            <p style={{ fontSize: "16px", maxWidth: "76ch" }}>
              The Lead position at an edition of this scale is not available again. Whoever takes it is established as the principal infrastructure partner of the summit, commanding permanent equity across the series.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <h2>Lead and Platinum share the stage. Only one of them is exclusive.</h2>
            <p style={{ marginBottom: "24px" }}>
              Both tiers carry significant stage inventory: a 20-minute keynote or fireside chat, and one executive panel seat. Platinum is a powerful position held by several market leaders. Lead is a single, exclusive position. What it adds is not simply more stage time:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "24px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderLeft: "4px solid var(--cyan)", padding: "20px", borderRadius: "var(--radius)" }}>
                <strong style={{ color: "var(--navy)", fontSize: "16px" }}>Exclusivity</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>One Lead Sponsor. No equivalent tier above or alongside.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderLeft: "4px solid var(--cyan)", padding: "20px", borderRadius: "var(--radius)" }}>
                <strong style={{ color: "var(--navy)", fontSize: "16px" }}>The CXO Boardroom, in full</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>A closed-door session with up to 15 senior enterprise and government decision-makers, curated around your target account list.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderLeft: "4px solid var(--cyan)", padding: "20px", borderRadius: "var(--radius)" }}>
                <strong style={{ color: "var(--navy)", fontSize: "16px" }}>A dedicated press release</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Issued on your participation specifically, not a mention inside a general event release.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderLeft: "4px solid var(--cyan)", padding: "20px", borderRadius: "var(--radius)" }}>
                <strong style={{ color: "var(--navy)", fontSize: "16px" }}>Two dedicated pre-event EDMs</strong>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", marginTop: "6px" }}>Delivered to the registered executive audience ahead of the doors opening.</p>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "var(--grey)" }}>
              Twice the stage advertisement inventory, expanded showcase space, and additional executive passes.
            </p>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px" }}>
              <div>
                <h2>Fifteen chairs, chosen by you</h2>
                <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.65 }}>
                  The CXO Boardroom provides a private, focused environment away from the general summit tracks. You open it with an address inside the session, you set the context, and you moderate the discussion.
                </p>
                <p style={{ fontSize: "14.5px", color: "var(--grey)", lineHeight: 1.65 }}>
                  Our team curates up to 15 qualified enterprise decision-makers based strictly on your target industry sectors, seniority requirements and account targets.
                </p>
              </div>
              <div>
                <h2>Pipeline before the doors open</h2>
                <p style={{ fontSize: "14.5px", color: "var(--ink)", lineHeight: 1.65 }}>
                  As Lead Sponsor, your engagement begins months ahead of the event date. You receive advance registration visibility, direct target account matchmaking, and post-event attendee intelligence (subject to individual PDPA consent).
                </p>
                <p style={{ fontSize: "14.5px", color: "var(--grey)", lineHeight: 1.65 }}>
                  Ensure your solutions are positioned precisely when enterprise infrastructure budgets and RFP frameworks are being drafted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-wash" id="conversation-form">
          <div className="container-narrow">
            <FormCard
              title="Start with a conversation, not a PDF"
              subtitle="Because Lead is limited to a single organisation, discussions are held directly with Trescon's executive leadership. Complete the form below for a confidential consultation."
              submitText="Book a conversation"
              followUpNote="We will follow up directly within one working day."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Rachel Tan" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email</label>
                  <input type="email" className="form-control" required placeholder="rachel@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation</label>
                  <input type="text" className="form-control" required placeholder="Organisation name" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Job title</label>
                  <input type="text" className="form-control" required placeholder="e.g. Managing Director, ASEAN" />
                </div>
                <div className="form-group">
                  <label className="form-label">Direct phone / WhatsApp</label>
                  <input type="tel" className="form-control" required placeholder="+60 12-345 6789" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Key strategic objectives for Malaysia 2027</label>
                <textarea className="form-control" required placeholder="Outline your infrastructure positioning, target market segments and key discussion priorities..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
