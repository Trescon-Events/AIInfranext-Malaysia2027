import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import PdpaConsent from "@/components/PdpaConsent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for a Delegate Pass",
  description: "Apply for a complimentary Delegate Pass to AI InfraNext | Malaysia 2027. Subject to steering committee qualification.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow" style={{ color: "var(--aqua)" }}>Delegate Pass · Complimentary</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Apply for a Delegate Pass</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Delegate places are reviewed by the steering committee and confirmed on the strength of your role and infrastructure mandate. Complete the application below and we will follow up within two working days.
            </p>

            <div style={{ background: "rgba(0,180,197,0.1)", borderLeft: "4px solid var(--cyan)", padding: "16px 20px", borderRadius: "0 6px 6px 0", marginTop: "20px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 700, color: "var(--aqua)", textTransform: "uppercase", marginBottom: "4px" }}>
                Built for High-Level Collaboration, Not Crowds
              </div>
              <p style={{ fontSize: "14px", color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
                AI InfraNext is intentionally capped to bring together genuine decision-makers across enterprise AI, utilities, and digital infrastructure.<br />
                <strong>Delegate Pass (Complimentary by Invitation):</strong> Reserved for enterprise and government leaders with active deployment, cloud, or infrastructure budgets.<br />
                <strong>Business Pass (USD 499):</strong> Controlled access for solution providers, consultancies, and technology vendors looking to engage key buyers. (<Link href="/business-pass/" style={{ color: "var(--aqua)", textDecoration: "underline" }}>Buy a Business Pass here →</Link>)
              </p>
            </div>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Delegate Application"
              subtitle="Please provide accurate details to enable committee qualification."
              submitText="Submit application"
              followUpNote="Applications are evaluated by the steering committee. We follow up within two working days."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Ts. Dr. Aminah Abdullah" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email address</label>
                  <input type="email" className="form-control" required placeholder="name@organisation.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation / Enterprise name</label>
                  <input type="text" className="form-control" required placeholder="Organisation name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Job title / Designation</label>
                  <input type="text" className="form-control" required placeholder="e.g. Chief Technology Officer" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile phone number</label>
                  <input type="tel" className="form-control" required placeholder="+60 12-345 6789" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Industry sector</label>
                <select className="form-control" required defaultValue="">
                  <option value="">Select industry...</option>
                  <option value="Banking & Financial Services">Banking &amp; Financial Services</option>
                  <option value="Energy, Utilities & Grid">Energy, Utilities &amp; Grid</option>
                  <option value="Telecommunications & Networks">Telecommunications &amp; Networks</option>
                  <option value="Semiconductors & Manufacturing">Semiconductors &amp; Advanced Manufacturing</option>
                  <option value="Government & Public Agencies">Government &amp; Public Agencies</option>
                  <option value="Data Centre & Colocation">Data Centre &amp; Colocation Operator</option>
                  <option value="Infrastructure Capital & Finance">Infrastructure Capital &amp; Finance</option>
                  <option value="Healthcare & Life Sciences">Healthcare &amp; Life Sciences</option>
                  <option value="Transport & Logistics">Transport &amp; Logistics</option>
                  <option value="Other Enterprise">Other Enterprise</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Describe your active AI infrastructure mandate</label>
                <textarea className="form-control" required placeholder="Briefly specify your role in evaluating, purchasing or deploying accelerated compute, cloud, data centre, power or cybersecurity infrastructure..."></textarea>
              </div>

              <PdpaConsent />
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
