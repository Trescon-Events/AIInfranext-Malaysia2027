import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeakerCarousel from "@/components/SpeakerCarousel";
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

            <Link href="/speak/" className="btn btn-primary">
              Apply to speak →
            </Link>
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

        <section className="section section-light" style={{ textAlign: "center" }}>
          <div className="container-narrow">
            <div className="eyebrow eyebrow-dark">Call For Speakers</div>
            <h2>Speak at the summit</h2>
            <p style={{ maxWidth: "68ch", margin: "0 auto 24px" }}>
              If you are leading production AI infrastructure deployments, managing accelerated compute clusters, or solving power and cooling constraints in Malaysia, we invite you to share your insights.
            </p>
            <Link href="/speak/" className="btn btn-primary">
              Apply to speak →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
