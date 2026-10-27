import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeakerCarousel from "@/components/SpeakerCarousel";
import HubSpotForm from "@/components/HubSpotForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
  description: "The leaders putting AI into production. Enterprise, government and infrastructure leaders taking the stage at AI InfraNext | Malaysia 2027.",
};

export default function SpeakersPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark dark-grid stage-spotlight" style={{ overflow: "hidden" }}>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="eyebrow">Speakers</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "16px" }}>The leaders putting AI into production</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              Enterprise, government and infrastructure leaders taking the stage at AI InfraNext | Malaysia 2027.
            </p>

            <div style={{ background: "rgba(0,180,197,0.1)", borderLeft: "4px solid var(--cyan)", padding: "16px 20px", borderRadius: "0 6px 6px 0", marginBottom: "28px", maxWidth: "720px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 700, color: "var(--aqua)", textTransform: "uppercase", marginBottom: "4px" }}>
                Official Notice
              </div>
              <p style={{ fontSize: "14.5px", color: "#FFFFFF", margin: 0 }}>
                Speakers for the Malaysia edition will be announced shortly.
              </p>
            </div>

            <a href="#speaker-onboarding" className="btn btn-primary">
              Speaker onboarding →
            </a>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Stage Lineage Preview</div>
            <h2>Verified speaker faculty architecture</h2>
            <p style={{ marginBottom: "28px" }}>
              Leaders who have addressed Trescon&apos;s summit series in Malaysia, demonstrating the level of seniority convened on our stages.
            </p>

            <SpeakerCarousel />
          </div>
        </section>

        <section id="speaker-onboarding" className="section section-dark">
          <div className="container-narrow">
            <div className="eyebrow" style={{ textAlign: "center", marginBottom: "8px" }}>Speaker Faculty</div>
            <h2 style={{ color: "#FFFFFF", textAlign: "center", marginBottom: "12px" }}>Speaker onboarding</h2>
            <p style={{ textAlign: "center", color: "#94A3B8", maxWidth: "600px", margin: "0 auto 32px" }}>
              Join the distinguished faculty of AI InfraNext | Malaysia 2027. Submit your speaker onboarding details below.
            </p>
            <HubSpotForm
              portalId="2953901"
              formId="c0ca2495-3e0a-4f16-a57a-ee58008d414d"
              region="na1"
              title="Speaker Onboarding"
              subtitle="Please provide your faculty details and bio for inclusion in the official summit programme."
              followUpNote="Our speaker operations team will coordinate stage logistics and briefing sessions."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
