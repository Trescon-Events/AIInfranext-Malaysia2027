import React from "react";
import FormCard from "@/components/FormCard";
import PdpaConsent from "@/components/PdpaConsent";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Your Reserved Place",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConfirmPage() {
  return (
    <>
      <header className="reduced-header">
        <div className="container reduced-header-wrap">
          <div className="brand-link">
            <Image
              src={getAssetPath("/images/logo/logo-horizontal.svg")}
              alt="AI InfraNext"
              width={260}
              height={38}
              className="brand-logo-img"
            />
          </div>
          <div className="reduced-header-meta">
            <span>20–21 July 2027 · Kuala Lumpur, Malaysia</span>
            <span className="reduced-badge" style={{ background: "#EAF6F0", color: "var(--green)" }}>
              PRE-APPROVED INVITATION
            </span>
          </div>
          <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--aqua)" }}>
            INVITATION CONFIRMED
          </span>
        </div>
      </header>

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow" style={{ color: "var(--aqua)" }}>Delegate Pass · Complimentary</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Confirm your place</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              Your place at AI InfraNext | Malaysia 2027 has been reserved. Complete the details below and your Delegate Pass will be issued directly.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Issue Delegate Pass"
              subtitle="Confirmation details will be sent immediately to your corporate email."
              submitText="Issue my Delegate Pass"
              followUpNote="Your registration confirmation and digital delegate badge will be issued directly to your work email."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Ts. Dr. Aminah Abdullah" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Official work email</label>
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
                  <input type="text" className="form-control" required placeholder="e.g. Head of Infrastructure" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile phone number</label>
                  <input type="tel" className="form-control" required placeholder="+60 12-345 6789" />
                </div>
              </div>

              <PdpaConsent />
            </FormCard>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{ padding: "32px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12.5px" }}>
          <div>&copy; 2027 Trescon Events Organizing Ltd. All rights reserved.</div>
          <div>Confidential Delegate Pass Confirmation</div>
        </div>
      </footer>
    </>
  );
}
