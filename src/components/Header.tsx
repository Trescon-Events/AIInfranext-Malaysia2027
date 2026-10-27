"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isCondensed, setIsCondensed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsCondensed(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={`site-header ${isCondensed ? "condensed" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand-link" aria-label="AI InfraNext Home">
          <Image
            src="/images/logo/logo-horizontal.svg"
            alt="AI InfraNext | Malaysia 2027"
            width={280}
            height={42}
            className="brand-logo-img"
            priority
          />
        </Link>

        {/* Desktop & Mobile Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${pathname?.startsWith("/about") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
            <button
              className="nav-link nav-dropdown-btn"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Get involved
              <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="/sponsor" onClick={() => setMobileMenuOpen(false)}>
                  <span>Sponsor</span> <span className="dest-label">LP1</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/exhibit" onClick={() => setMobileMenuOpen(false)}>
                  <span>Exhibit</span> <span className="dest-label">LP4</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                  <span>Delegate</span> <span className="dest-label">Apply</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/media-partnership" onClick={() => setMobileMenuOpen(false)}>
                  <span>Media partner</span> <span className="dest-label">Partner</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/association-partnership" onClick={() => setMobileMenuOpen(false)}>
                  <span>Association partner</span> <span className="dest-label">Partner</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/speakers"
              className={`nav-link ${pathname?.startsWith("/speakers") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              href="/agenda"
              className={`nav-link ${pathname?.startsWith("/agenda") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Agenda
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <Link href="/business-pass/" className="btn btn-header-pass">
            Business Pass
          </Link>
          <Link href="/exhibit/" className="btn btn-header-exhibit">
            Exhibit
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
