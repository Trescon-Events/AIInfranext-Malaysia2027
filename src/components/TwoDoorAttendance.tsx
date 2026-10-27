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
          <h3>Delegate Pass</h3>
          <p className="door-desc">
            Senior enterprise, government and selected infrastructure-investor delegates attend by invitation, subject to qualification based on seniority and an active infrastructure mandate.
          </p>
        </div>
        <Link href="/apply/" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
          Apply for a Delegate Pass →
        </Link>
      </div>

      {/* Door 2: Business Pass */}
      <div className="door-card door-card-business">
        <div>
          <span className="door-pill door-pill-blue">Commercial access</span>
          <div className="door-price">USD 499</div>
          <h3>Business Pass</h3>
          <p className="door-desc">
            Paid access for technology vendors, service providers and consultancies, and for enterprise or public-sector professionals outside the invitation criteria. Availability is controlled.
          </p>
        </div>
        <Link href="/business-pass/" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
          Buy a Business Pass →
        </Link>
      </div>
    </div>
  );
}
