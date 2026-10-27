import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description: "The organisations backing Malaysia's AI infrastructure. Technology providers, operators and institutions supporting AI InfraNext | Malaysia 2027.",
};

export default function SponsorsPartnersPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow">Sponsors and partners</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "16px" }}>The organisations backing Malaysia&apos;s AI infrastructure</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6, marginBottom: "28px" }}>
              Technology providers, operators and institutions supporting AI InfraNext | Malaysia 2027.
            </p>

            <div style={{ background: "rgba(0,180,197,0.1)", borderLeft: "4px solid var(--cyan)", padding: "16px 20px", borderRadius: "0 6px 6px 0", marginBottom: "28px", maxWidth: "720px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 700, color: "var(--aqua)", textTransform: "uppercase", marginBottom: "4px" }}>
                Announcement Status
              </div>
              <p style={{ fontSize: "14.5px", color: "#FFFFFF", margin: 0 }}>
                Partner announcements for the Malaysia edition are underway.
              </p>
            </div>

            <Link href="/sponsor-enquiry/" className="btn btn-primary">
              Talk to us about sponsorship →
            </Link>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <div className="eyebrow eyebrow-dark">Partnership Framework</div>
            <h2>Summit partner tiers</h2>
            <p style={{ marginBottom: "32px" }}>Structured tiers aligning category leaders with Malaysia&apos;s enterprise workload procurement committees.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "4px solid var(--cyan)", padding: "24px", borderRadius: "var(--radius)" }}>
                <div className="eyebrow" style={{ color: "var(--cyan)", marginBottom: "6px" }}>Tier 01</div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>Lead Partner</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Sole principal summit partner. Exclusive CXO Boardroom and dominant stage presence.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "4px solid var(--cobalt)", padding: "24px", borderRadius: "var(--radius)" }}>
                <div className="eyebrow eyebrow-dark" style={{ marginBottom: "6px" }}>Tier 02</div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>Platinum Partners</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Keynote address, executive panel seats, and advance delegate registration visibility.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "4px solid var(--grey)", padding: "24px", borderRadius: "var(--radius)" }}>
                <div className="eyebrow eyebrow-dark" style={{ marginBottom: "6px" }}>Tier 03</div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>Gold Partners</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Plenary keynote presentation and curated target account acquisition.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "4px solid var(--line)", padding: "24px", borderRadius: "var(--radius)" }}>
                <div className="eyebrow eyebrow-dark" style={{ marginBottom: "6px" }}>Tier 04</div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>Silver &amp; Bronze</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Panel authority, exhibition showcase and brand integration across all materials.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "4px solid var(--cyan)", padding: "24px", borderRadius: "var(--radius)" }}>
                <div className="eyebrow" style={{ color: "var(--cyan)", marginBottom: "6px" }}>Dedicated Session</div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>CXO Boardroom Partners</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Closed-door roundtable with up to 15 qualified enterprise decision-makers.</p>
              </div>

              <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderTop: "4px solid var(--grey)", padding: "24px", borderRadius: "var(--radius)" }}>
                <div className="eyebrow eyebrow-dark" style={{ marginBottom: "6px" }}>Exhibition</div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "8px" }}>Exhibitors</h3>
                <p style={{ fontSize: "13.5px", color: "var(--grey)", margin: 0 }}>Direct floor presence connecting hardware, software and services to 800+ delegates.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" style={{ textAlign: "center" }}>
          <div className="container-narrow">
            <div className="eyebrow eyebrow-dark">Commercial Engagement</div>
            <h2>Join Malaysia&apos;s AI infrastructure ecosystem</h2>
            <p style={{ maxWidth: "68ch", margin: "0 auto 24px" }}>
              Explore how partnership packages place your infrastructure solutions directly in front of the executives specifying enterprise compute and cloud in Malaysia.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/sponsor/" className="btn btn-primary">
                Explore sponsorship options →
              </Link>
              <Link href="/sponsor-enquiry/" className="btn btn-outline">
                Enquire about sponsorship →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
