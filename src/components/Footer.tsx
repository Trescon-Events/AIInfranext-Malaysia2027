import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Info Column */}
          <div className="footer-brand">
            <Link href="/" className="footer-brand-link" aria-label="AI InfraNext Home">
              <Image
                src="/brand/horizontal-dark-bg.svg"
                alt="AI InfraNext | Malaysia 2027"
                width={173}
                height={28}
                className="footer-brand-logo"
                priority={false}
              />
            </Link>
            <p className="footer-title">
              AI InfraNext | Malaysia 2027
            </p>
            <p className="footer-dates">
              20–21 July 2027 · Kuala Lumpur, Malaysia
            </p>
            <p className="footer-org">
              Organised by Trescon
            </p>

            <div className="footer-social-wrap">
              <a
                href="https://www.linkedin.com/showcase/ai-infranext"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="AI InfraNext LinkedIn Showcase"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.9 0 1.63-.73 1.63-1.63s-.73-1.64-1.63-1.64c-.9 0-1.63.74-1.63 1.64 0 .9.73 1.63 1.63 1.63m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Attend Column */}
          <div className="footer-col">
            <h4>Attend</h4>
            <ul>
              <li><Link href="/apply/">Apply</Link></li>
              <li><Link href="/business-pass/">Business Pass</Link></li>
              <li><Link href="/speakers/">Speakers</Link></li>
              <li><Link href="/agenda/">Agenda</Link></li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div className="footer-col">
            <h4>Get involved</h4>
            <ul>
              <li><Link href="/sponsor/">Sponsor</Link></li>
              <li><Link href="/exhibit/">Exhibit</Link></li>
              <li><Link href="/cxo-boardroom/">CXO Boardroom</Link></li>
              <li><Link href="/media-partnership/">Media partnership</Link></li>
              <li><Link href="/association-partnership/">Association partnership</Link></li>
              <li><Link href="/sponsors-partners/">Sponsors &amp; Partners</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
              <li><Link href="/media-accreditation/">Media accreditation</Link></li>
              <li><Link href="/privacy/">Privacy</Link></li>
              <li><Link href="/terms/">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-copy">
            &copy; 2027 Trescon Events Organizing Ltd. All rights reserved.
          </p>
          <p className="footer-bottom-badge">
            AI InfraNext | Malaysia 2027
          </p>
        </div>
      </div>
    </footer>
  );
}
