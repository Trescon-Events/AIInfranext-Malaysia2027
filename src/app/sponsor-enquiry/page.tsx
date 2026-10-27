import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Us About Sponsorship",
  description: "Tell us who you are trying to reach at AI InfraNext | Malaysia 2027 and we will come back within one working day.",
};

export default function SponsorEnquiryPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Sponsorship</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Talk to us about sponsorship</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Tell us who you are trying to reach at AI InfraNext | Malaysia 2027 and we will come back within one working day with the options that fit your objectives.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Sponsorship Consultation"
              subtitle="Tell us about your target accounts and commercial priorities."
              submitText="Send enquiry"
              followUpNote="We will review your objectives and follow up within one working day."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Jason Lee" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email</label>
                  <input type="email" className="form-control" required placeholder="name@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation / Enterprise name</label>
                  <input type="text" className="form-control" required placeholder="Company name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Job title</label>
                  <input type="text" className="form-control" required placeholder="e.g. Regional VP" />
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" required placeholder="e.g. Malaysia, Singapore" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Participation interest</label>
                <select className="form-control" required defaultValue="">
                  <option value="">Select an interest...</option>
                  <option value="Lead Sponsorship">Lead Sponsorship (Exclusive position)</option>
                  <option value="Platinum / Gold">Platinum / Gold Sponsorship (Keynote &amp; stage authority)</option>
                  <option value="Silver / Bronze">Silver / Bronze Sponsorship (Panel &amp; showcase)</option>
                  <option value="CXO Boardroom">CXO Boardroom Partnership (15 curated chairs)</option>
                  <option value="Exhibition">Exhibition Showcase</option>
                  <option value="Discussion">General discussion on custom package</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Which enterprise buyers are you trying to reach?</label>
                <textarea className="form-control" required placeholder="Specify the enterprise personas, industry sectors or procurement mandates you wish to target..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
