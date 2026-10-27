import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Partnership",
  description: "Reach senior enterprise, government and infrastructure leaders across Malaysia and the ASEAN region.",
};

export default function MediaPartnershipPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Media partnership</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Partner with us on coverage</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Reach senior enterprise, government and infrastructure leaders across Malaysia and the ASEAN region. Tell us about your publication and we will come back with a partnership that fits.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Media Partnership Proposal"
              subtitle="Tell us about your audience reach and proposed collaboration."
              submitText="Submit partnership proposal"
            >
              <div className="form-group">
                <label className="form-label">Contact name</label>
                <input type="text" className="form-control" required placeholder="e.g. Melissa Tan" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Business email</label>
                  <input type="email" className="form-control" required placeholder="name@media.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Media house / Platform</label>
                  <input type="text" className="form-control" required placeholder="Outlet name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Media distribution reach</label>
                  <input type="text" className="form-control" required placeholder="e.g. 150k monthly readers" />
                </div>
                <div className="form-group">
                  <label className="form-label">Website URL</label>
                  <input type="url" className="form-control" required placeholder="https://media.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Proposed collaboration</label>
                <textarea className="form-control" required placeholder="Describe editorial coverage, interview distribution, email broadcast or logo exchange proposals..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
