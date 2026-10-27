import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Speak",
  description: "We are looking for leaders running live infrastructure deployments: named builds, power constraints, compute architectures and production trade-offs.",
};

export default function SpeakPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Speaking</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Apply to speak</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              We are looking for leaders running live infrastructure deployments: named builds, power constraints, compute architectures and production trade-offs. Tell us what you would bring to the stage.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <HubSpotForm
              portalId="2953901"
              formId="ee641f21-7410-42b0-85d1-5d9f7c28f26b"
              region="na1"
              title="Speaker Proposal"
              subtitle="Please provide summary details of your operational deployment experience."
              followUpNote="Editorial selection is handled exclusively by Trescon's content committee."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
