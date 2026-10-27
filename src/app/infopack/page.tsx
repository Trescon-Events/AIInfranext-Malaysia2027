import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request the Infopack",
  description: "Full details on sponsorship, exhibition and boardroom participation at AI InfraNext | Malaysia 2027.",
};

export default function InfopackPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Sponsorship infopack</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Request the infopack</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Full details on sponsorship, exhibition and boardroom participation at AI InfraNext | Malaysia 2027, including inclusions and investment levels. Sent directly to you.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Infopack Request"
              subtitle="Enter your business details to receive the comprehensive package directly."
              submitText="Send the infopack"
              followUpNote="The infopack will be dispatched immediately to your corporate email."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Aaron Teo" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email address</label>
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
                  <input type="text" className="form-control" required placeholder="e.g. Commercial Director" />
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" required placeholder="e.g. Malaysia" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary interest</label>
                <select className="form-control" required defaultValue="">
                  <option value="">Select option...</option>
                  <option value="Sponsorship Prospectus">Comprehensive Sponsorship Prospectus</option>
                  <option value="CXO Boardroom">CXO Boardroom Partnership Details</option>
                  <option value="Exhibition Floorplan">Exhibition Floorplan &amp; Packages</option>
                  <option value="All Commercial Options">All Commercial Options</option>
                </select>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
