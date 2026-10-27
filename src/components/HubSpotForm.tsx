"use client";

import React, { useEffect, useState } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId: string;
  region?: string;
  title?: string;
  subtitle?: string;
  followUpNote?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
          css?: string;
          onFormReady?: ($form: unknown) => void;
          onFormSubmitted?: ($form: unknown) => void;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm({
  portalId = "2953901",
  formId,
  region = "na1",
  title,
  subtitle,
  followUpNote,
  className = "",
  style = {},
}: HubSpotFormProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const targetId = `hubspot-target-${formId.replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    let isMounted = true;

    const renderForm = () => {
      if (!isMounted) return;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      targetEl.innerHTML = "";

      if (window.hbspt && window.hbspt.forms) {
        try {
          window.hbspt.forms.create({
            portalId,
            formId,
            region,
            target: `#${targetId}`,
            css: "",
            onFormReady: () => {
              if (isMounted) setIsLoaded(true);
            },
          });
          // Fallback in case onFormReady doesn't fire immediately
          setTimeout(() => {
            if (isMounted) setIsLoaded(true);
          }, 800);
        } catch (err) {
          console.error("HubSpot form initialization error:", err);
        }
      }
    };

    if (window.hbspt && window.hbspt.forms) {
      renderForm();
    } else {
      const existingScript = document.querySelector('script[src*="hsforms.net"]');
      if (existingScript) {
        existingScript.addEventListener("load", renderForm);
      } else {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;
        script.onload = renderForm;
        document.body.appendChild(script);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [portalId, formId, region, targetId]);

  return (
    <div
      className={`form-wrapper form-card-dark ${className}`}
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#0B111E",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "16px",
        padding: "36px 32px",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        color: "#F8FAFC",
        ...style,
      }}
    >
      {title && (
        <h2 style={{ color: "#FFFFFF", marginBottom: "8px", fontSize: "22px", fontWeight: 700 }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p style={{ color: "#94A3B8", fontSize: "14px", marginBottom: "24px", lineHeight: 1.5 }}>
          {subtitle}
        </p>
      )}

      {!isLoaded && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 0",
            color: "#94A3B8",
            fontFamily: "var(--mono)",
            fontSize: "12px",
            gap: "12px",
          }}
        >
          <svg
            style={{
              width: "24px",
              height: "24px",
              color: "var(--cyan)",
              animation: "spin 1s linear infinite",
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading secure form...</span>
        </div>
      )}

      <div id={targetId} className="hs-form-target min-h-[250px]" />

      {followUpNote && (
        <div style={{ textAlign: "center", fontSize: "12px", color: "#64748B", marginTop: "18px" }}>
          {followUpNote}
        </div>
      )}
    </div>
  );
}
