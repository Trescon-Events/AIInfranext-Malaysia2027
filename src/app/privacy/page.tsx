import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and Malaysian PDPA 2010 compliance statement for AI InfraNext | Malaysia 2027.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="section section-light" style={{ padding: "64px 0" }}>
        <div className="container-narrow">
          <div className="eyebrow eyebrow-dark">Compliance &amp; Data Governance</div>
          <h1 style={{ marginBottom: "24px" }}>Privacy Policy &amp; PDPA Compliance</h1>

          <p>
            AI InfraNext | Malaysia 2027 is organised by Trescon. We are committed to safeguarding personal data in accordance with the Malaysian Personal Data Protection Act 2010 (PDPA 2010) and international data governance principles.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "32px" }}>1. Collection of Personal Data</h2>
          <p>
            We collect personal information provided during delegate registration, sponsorship enquiries, speaker submissions, and accreditation applications. This may include your name, business email, telephone number, job title, organisation, and professional background.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "32px" }}>2. Explicit Consent &amp; Third-Party Sharing</h2>
          <p>In accordance with Malaysian data protection law and our event governance rules:</p>
          <ul>
            <li>Your organizational details (name, job title, and company) are shared with summit sponsors only when you provide explicit consent during registration.</li>
            <li>Your direct contact details (email address and phone number) require separate, unbundled consent. We never bundle contact consent with general registration.</li>
          </ul>

          <h2 style={{ fontSize: "20px", marginTop: "32px" }}>3. Data Security and Retention</h2>
          <p>
            All delegate and commercial information is stored within secured database environments equipped with strict access controls, encryption, and continuous monitoring. Data is retained solely for the period required to service summit participation and post-event deliverables.
          </p>

          <h2 style={{ fontSize: "20px", marginTop: "32px" }}>4. Access, Correction, and Opt-Out</h2>
          <p>
            You have the right to request access to your personal data, make corrections, or withdraw your consent at any time by contacting our data protection officer at <Link href="/contact/">our contact desk</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
