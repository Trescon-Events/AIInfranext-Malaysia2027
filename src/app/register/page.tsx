import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TwoDoorAttendance from "@/components/TwoDoorAttendance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attend",
  description: "Two ways into the room. Apply for a complimentary Delegate Pass or purchase a Business Pass for AI InfraNext | Malaysia 2027.",
};

export default function RegisterPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-dark" style={{ padding: "72px 0" }}>
          <div className="container">
            <div className="eyebrow">Attend</div>
            <h1 style={{ color: "#FFFFFF", marginBottom: "16px" }}>Two ways into the room</h1>
            <p style={{ fontSize: "18px", color: "#C9DCEC", maxWidth: "76ch", lineHeight: 1.6 }}>
              Senior enterprise, government and infrastructure-investor leaders attend on a complimentary Delegate Pass by invitation and application. Business Passes are available to purchase.
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
