import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCard from "@/components/FormCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Speak",
  description: "We are looking for leaders running live infrastructure deployments: named builds, power constraints, compute architectures and production trade-offs.",
};

export default function SpeakPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "56px 0" }}>
          <div className="container-narrow">
            <div className="eyebrow">Speaking</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Apply to speak</h1>
            <p style={{ fontSize: "16px", color: "#C9DCEC", lineHeight: 1.6 }}>
              We are looking for leaders running live infrastructure deployments: named builds, power constraints, compute architectures and production trade-offs. Tell us what you would bring to the stage.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container-narrow">
            <FormCard
              title="Speaker Proposal"
              subtitle="Please provide summary details of your operational deployment experience."
              submitText="Submit speaking proposal"
              followUpNote="Editorial selection is handled exclusively by Trescon's content committee."
            >
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" required placeholder="e.g. Ts. Nurul Huda" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Work email</label>
                  <input type="email" className="form-control" required placeholder="name@organisation.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation / Enterprise name</label>
                  <input type="text" className="form-control" required placeholder="Company name" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">Job title / Designation</label>
                  <input type="text" className="form-control" required placeholder="e.g. Head of AI Architecture" />
                </div>
                <div className="form-group">
                  <label className="form-label">LinkedIn profile URL</label>
                  <input type="url" className="form-control" required placeholder="https://linkedin.com/in/username" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Target programme pillar</label>
                <select className="form-control" required defaultValue="">
                  <option value="">Select pillar...</option>
                  <option value="01 Enterprise AI demand, compute and AI factories">01 Enterprise AI demand, compute and AI factories</option>
                  <option value="02 AI-ready data centres, power and thermal infrastructure">02 AI-ready data centres, power and thermal infrastructure</option>
                  <option value="03 Trusted cloud, data, connectivity and sovereign capability">03 Trusted cloud, data, connectivity and sovereign capability</option>
                  <option value="04 Secure and production-scale enterprise AI">04 Secure and production-scale enterprise AI</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Proposed session title &amp; executive summary</label>
                <textarea className="form-control" required placeholder="Outline the operational deployment, engineering trade-offs, and concrete infrastructure lessons you propose to share..."></textarea>
              </div>
            </FormCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
