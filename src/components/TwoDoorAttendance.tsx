import React from "react";
import Link from "next/link";

export default function TwoDoorAttendance() {
  return (
    <div className="two-door-grid">
      {/* Door 1: Delegate Pass */}
      <div className="door-card door-card-delegate">
        <div>
          <span className="door-pill door-pill-cyan">By invitation &amp; application</span>
          <div className="door-price" style={{ color: "var(--aqua)" }}>Complimentary</div>
          <h3>Delegate Pass (Complimentary by Invitation)</h3>
          <p className="door-desc">
            Reserved for enterprise and government leaders with active deployment, cloud, or infrastructure budgets.
          </p>
        </div>
        <Link href="/apply/" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: "20px" }}>
          Apply for a Delegate Pass →
        </Link>
      </div>

      {/* Door 2: Business Pass */}
      <div className="door-card door-card-business">
        <div>
          <span className="door-pill door-pill-blue">Commercial access</span>
          <div className="door-price">USD 499</div>
          <h3>Business Pass (USD 499)</h3>
          <p className="door-desc">
            Controlled access for solution providers, consultancies, and technology vendors looking to engage key buyers.
          </p>
        </div>
        <Link href="/business-pass/" className="btn btn-outline" style={{ alignSelf: "flex-start", marginTop: "20px" }}>
          Buy a Business Pass →
        </Link>
      </div>
    </div>
  );
}
