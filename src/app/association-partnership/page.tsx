import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Association Partnership",
  description: "We work with industry associations, engineering bodies and ecosystem organisations to connect members with decisions shaping Malaysia's AI infrastructure.",
};

export default function AssociationPartnershipPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Association partnership</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Bring your members into the room</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              We work with industry associations, engineering bodies and ecosystem organisations to connect members with the decisions shaping Malaysia&apos;s AI infrastructure. Tell us about yours.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Association Collaboration"
              subtitle="Connect your professional community with the summit."
              submitText="Submit partnership enquiry"
            >
              <div className="form-group">
                <label className="form-label">Contact person name</label>
                <input type="text" className="form-control" required placeholder="e.g. Ts. Ahmad Razif" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Official email</label>
                  <input type="email" className="form-control" required placeholder="name@association.org.my" />
                </div>
                <div className="form-group">
                  <label className="form-label">Association / Institution name</label>
                  <input type="text" className="form-control" required placeholder="Organisation name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Designation</label>
                  <input type="text" className="form-control" required placeholder="e.g. Secretary General" />
                </div>
                <div className="form-group">
                  <label className="form-label">Active member base count</label>
                  <input type="text" className="form-control" required placeholder="e.g. 2,500 enterprise members" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">How would you like to collaborate?</label>
                <textarea className="form-control" required placeholder="Outline member delegation allocations, working group representation, supporting endorsement, or joint executive briefings..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
