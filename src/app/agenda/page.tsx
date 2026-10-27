import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PillarCards from "@/components/PillarCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Two days, four decisions. The full programme for AI InfraNext | Malaysia 2027 will be published as sessions are confirmed.",
};

export default function AgendaPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark dark-grid stage-spotlight" style={{ overflow: "hidden" }}>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="eyebrow">Agenda</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "16px" }}>Two days, four decisions</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              The full programme for AI InfraNext | Malaysia 2027 will be published as sessions are confirmed.
            </p>

            <div style={{ background: "rgba(0,180,197,0.1)", borderLeft: "4px solid var(--cyan)", padding: "16px 20px", borderRadius: "0 6px 6px 0", maxWidth: "720px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 700, color: "var(--aqua)", textTransform: "uppercase", marginBottom: "4px" }}>
                Programme Notice
              </div>
              <p style={{ fontSize: "14.5px", color: "#FFFFFF", margin: 0 }}>
                The steering committee is finalizing session timings and individual keynote confirmations. Detailed schedules will be published in sequence.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Programme Pillars</div>
            <h2>Core decisions governing the summit</h2>
            <p style={{ marginBottom: "32px" }}>Every session on the agenda maps directly to one of four infrastructure decisions:</p>

            <PillarCards />

            <p style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--grey)", marginTop: "16px" }}>
              Capital, policy, sustainability, infrastructure economics and talent run across all four.
            </p>
          </div>
        </section>

        <section className="section section-light" style={{ textAlign: "center" }}>
          <div className="container-narrow">
            <div className="eyebrow eyebrow-dark">Stay Informed</div>
            <h2>Receive agenda updates directly</h2>
            <p style={{ maxWidth: "68ch", margin: "0 auto 24px" }}>
              Register your interest or apply for a Delegate Pass to receive session publications, speaker additions, and detailed briefing documents.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/apply/" className="btn btn-primary">
                Apply for a Delegate Pass →
              </Link>
              <Link href="/business-pass/" className="btn btn-outline">
                Buy a Business Pass →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
