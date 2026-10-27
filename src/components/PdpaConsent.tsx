import React from "react";

export default function PdpaConsent() {
  return (
    <div className="pdpa-consent-group">
      <div className="pdpa-heading">Personal Data Protection Act (PDPA 2010) Consent</div>
      <div className="checkbox-item">
        <input type="checkbox" id="consent_org" name="consent_org" value="1" />
        <label className="checkbox-label" htmlFor="consent_org">
          I agree that my name, job title and organisation may be shared with event partners.
        </label>
      </div>
      <div className="checkbox-item">
        <input type="checkbox" id="consent_contact" name="consent_contact" value="1" />
        <label className="checkbox-label" htmlFor="consent_contact">
          I agree that my contact details may be shared with event partners.
        </label>
      </div>
    </div>
  );
}
