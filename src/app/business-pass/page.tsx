import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy a Business Pass",
  description: "Buy a Business Pass (USD 499) for full two-day access to AI InfraNext | Malaysia 2027. 20–21 July 2027, Kuala Lumpur.",
};

export default function BusinessPassPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Business Pass · USD 499</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Buy a Business Pass</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Full access to both days of AI InfraNext | Malaysia 2027 for technology providers, service partners and consultancies, and for professionals outside the invitation criteria.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--line)", paddingBottom: "16px", marginBottom: "24px" }}>
              <div>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", marginBottom: "4px" }}>Business Pass (2 Days)</h3>
                <p style={{ fontSize: "13px", color: "var(--grey)", margin: 0 }}>Access to keynotes, panels, and the exhibition showcase</p>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "26px", fontWeight: 800, color: "var(--cobalt)" }}>
                USD 499
              </div>
            </div>

            <FormCard
              title="Passholder Information"
              subtitle="Please provide attendee and billing information."
              submitText="Proceed to secure checkout ($499)"
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Marcus Tan" />
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
                  <input type="text" className="form-control" required placeholder="e.g. Senior Director" />
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input type="text" className="form-control" required placeholder="e.g. Malaysia" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Billing address / Tax information (Optional)</label>
                <textarea className="form-control" placeholder="Company address or SST registration number..."></textarea>
              </div>
            </FormCard>

            <div style={{ background: "var(--wash)", border: "1px dashed var(--line)", borderRadius: "var(--radius)", padding: "18px", marginTop: "28px" }}>
              <p style={{ fontSize: "13px", color: "var(--grey)", margin: 0 }}>
                If your organisation is looking to reach enterprise buyers at the summit, sponsorship and exhibition put you in front of them directly.{" "}
                <Link href="/sponsor-enquiry/" style={{ fontWeight: 600, color: "var(--cobalt)" }}>
                  → Talk to us about sponsorship
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
