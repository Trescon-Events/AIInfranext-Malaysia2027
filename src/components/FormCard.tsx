"use client";

import React, { useState } from "react";

interface FormCardProps {
  title: string;
  subtitle: string;
  submitText: string;
  children: React.ReactNode;
  followUpNote?: string;
}

export default function FormCard({
  title,
  subtitle,
  submitText,
  children,
  followUpNote,
}: FormCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="form-card" style={{ textAlign: "center", background: "#EAF6F0", border: "1px solid #1F6B45" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#1F6B45", marginBottom: "8px" }}>
          Submission Received
        </div>
        <h3 style={{ color: "#1F6B45", fontSize: "20px", marginBottom: "8px" }}>Thank you for your submission</h3>
        <p style={{ color: "#1F6B45", fontSize: "14px", margin: 0 }}>
          Your details have been securely recorded. Our team will review your enquiry and follow up within the specified timeframe.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      <p style={{ fontSize: "14px", color: "var(--grey)", marginBottom: "28px" }}>{subtitle}</p>

      <form onSubmit={handleSubmit}>
        {children}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", padding: "14px", fontSize: "15px", marginTop: "12px" }}
          disabled={submitting}
        >
          {submitting ? "Submitting..." : submitText}
        </button>
        {followUpNote && (
          <div style={{ textAlign: "center", fontSize: "12px", color: "var(--grey)", marginTop: "12px" }}>
            {followUpNote}
          </div>
        )}
      </form>
    </div>
  );
}
