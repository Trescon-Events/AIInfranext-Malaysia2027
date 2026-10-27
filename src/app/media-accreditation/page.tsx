import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Accreditation",
  description: "Accreditation for working journalists, editors and broadcasters covering AI InfraNext | Malaysia 2027.",
};

export default function MediaAccreditationPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Media</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Apply for media accreditation</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Accreditation for working journalists, editors and broadcasters covering AI InfraNext | Malaysia 2027. Applications are reviewed and confirmed ahead of the summit.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Media Pass Request"
              subtitle="Please provide credentials and media outlet details."
              submitText="Submit accreditation request"
              followUpNote="Accreditation is granted strictly to accredited members of the press."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Faridah Ismail" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Editorial email</label>
                  <input type="email" className="form-control" required placeholder="journalist@publication.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Publication / Media outlet</label>
                  <input type="text" className="form-control" required placeholder="Publication name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Role</label>
                  <input type="text" className="form-control" required placeholder="e.g. Technology Editor" />
                </div>
                <div className="form-group">
                  <label className="form-label">Media outlet URL</label>
                  <input type="url" className="form-control" required placeholder="https://publication.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Proposed coverage focus</label>
                <textarea className="form-control" required placeholder="Detail the areas of Malaysian digital infrastructure, sovereign cloud, or enterprise computing you plan to report on..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
