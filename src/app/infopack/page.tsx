import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";
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
            <HubSpotForm
              portalId="2953901"
              formId="066a8991-ccc7-4140-8447-7d3ca5cdc5d8"
              region="na1"
              title="Download Infopack - Sponsor"
              subtitle="Enter your business details to receive the comprehensive sponsorship prospectus and commercial infopack."
              followUpNote="The infopack will be dispatched immediately to your corporate email."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
