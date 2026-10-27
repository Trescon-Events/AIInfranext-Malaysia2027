import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";
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
            <HubSpotForm
              portalId="2953901"
              formId="5f89c49a-7284-41b7-bf5a-eceeb529ead4"
              region="na1"
              title="Sponsor Inquiry"
              subtitle="Tell us about your target accounts and commercial priorities."
              followUpNote="We will review your objectives and follow up within one working day."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
