import React from "react";
import Link from "next/link";

export default function CtaTwinBands() {
  return (
    <div className="cta-twin-wrap">
      <div className="cta-band cta-band-primary stage-spotlight">
        <div className="container cta-band-inner">
          <div className="cta-band-text">
            <div className="cta-band-meta">Kuala Lumpur · 20–21 July 2027 · 800+ delegates · 40+ speakers</div>
            <h2 className="cta-band-h2">Be in the room where Malaysia&apos;s AI infrastructure meets enterprise demand</h2>
          </div>
          <Link href="/apply/" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Apply for a Delegate Pass →
          </Link>
        </div>
      </div>

      <div className="cta-band cta-band-secondary dark-grid">
        <div className="container cta-band-inner">
          <div className="cta-band-text">
            <div className="cta-band-meta" style={{ color: "var(--cyan)" }}>4 pillars · 5 buyer groups · 2 days</div>
            <h2 className="cta-band-h2">Put your infrastructure solutions in front of the executives specifying</h2>
          </div>
          <Link href="/sponsor-enquiry/" className="btn btn-outline-white" style={{ flexShrink: 0 }}>
            Enquire about sponsorship →
          </Link>
        </div>
      </div>
    </div>
  );
}
