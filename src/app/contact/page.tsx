import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubSpotForm from "@/components/HubSpotForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "For anything not covered elsewhere on the site. Tell us what you need and we will connect you with the right team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Contact</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Get in touch</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              For anything not covered elsewhere on the site. Tell us what you need and we will connect you with the right team.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <HubSpotForm
              portalId="2953901"
              formId="22d92da1-2e05-4c72-a2df-4f79b604d7c7"
              region="na1"
              title="General Inquiry"
              subtitle="Our operations and partnership team will route your enquiry directly and follow up."
              followUpNote="For urgent matters, our summit coordination desk responds within one working day."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
