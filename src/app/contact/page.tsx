import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
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
            <FormCard
              title="Direct Enquiry Desk"
              subtitle="Our operations and partnership team will route your enquiry directly."
              submitText="Send message"
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Samuel Lim" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email</label>
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
                  <input type="text" className="form-control" required placeholder="Job title" />
                </div>
                <div className="form-group">
                  <label className="form-label">Enquiry department</label>
                  <select className="form-control" required defaultValue="">
                    <option value="">Select department...</option>
                    <option value="Delegate & Registration">Delegate Operations &amp; Registration</option>
                    <option value="Sponsorship & Exhibition">Commercial Partnerships &amp; Sponsorship</option>
                    <option value="Agenda & Speaking">Editorial Agenda &amp; Speaking</option>
                    <option value="Press & Media">Media Accreditation &amp; Press</option>
                    <option value="General Operations">General Event Operations</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" required placeholder="How can our team assist you?"></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
