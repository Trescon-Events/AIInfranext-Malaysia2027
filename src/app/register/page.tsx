import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TwoDoorAttendance from "@/components/TwoDoorAttendance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attend | AI InfraNext Malaysia 2027",
  description: "Built for High-Level Collaboration, Not Crowds. AI InfraNext is intentionally capped to bring together genuine decision-makers across enterprise AI, utilities, and digital infrastructure.",
};

export default function RegisterPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "72px 0" }}>
          <div className="container">
            <div className="eyebrow" style={{ color: "var(--aqua)" }}>Attend · Registration</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "16px" }}>Built for High-Level Collaboration, Not Crowds</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6 }}>
              AI InfraNext is intentionally capped to bring together genuine decision-makers across enterprise AI, utilities, and digital infrastructure.
            </p>
          </div>
        </section>

        <section className="section section-wash">
          <div className="container">
            <TwoDoorAttendance />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
