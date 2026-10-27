"use client";

import React, { useState } from "react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is AI InfraNext | Malaysia 2027?",
      a: "AI InfraNext | Malaysia 2027 is a two-day executive summit connecting the enterprise workloads creating AI demand with the compute, cloud, data centre, power, connectivity, security and capital required for production AI.",
    },
    {
      q: "Who should attend?",
      a: "The summit convenes five core constituencies: enterprise and public-sector workload owners (CIOs, CTOs, CISOs, CDAOs, heads of infrastructure), hyperscalers and AI cloud providers, data centre and utility operators, government policy leaders, and infrastructure project financiers.",
    },
    {
      q: "How is this different from a data centre conference or an AI summit?",
      a: "It is narrower than a general AI summit because it ignores high-level awareness to focus on physical and architectural constraints. It is broader than a data centre event because facilities and power are evaluated specifically around the demands of enterprise AI workloads rather than as isolated real estate assets.",
    },
    {
      q: "What does the programme cover?",
      a: "The programme is organized into four core pillars: 01 Enterprise AI demand, compute and AI factories; 02 AI-ready data centres, power and thermal infrastructure; 03 Trusted cloud, data, connectivity and sovereign capability; and 04 Secure and production-scale enterprise AI.",
    },
    {
      q: "How do I attend, and what does it cost?",
      a: "Senior enterprise, government and infrastructure leaders attend on a complimentary Delegate Pass by invitation and subject to steering committee qualification. Technology providers and consultancies can purchase a Business Pass for USD 499.",
    },
    {
      q: "Where and when is it?",
      a: "The summit takes place on 20–21 July 2027 in Kuala Lumpur, Malaysia.",
    },
    {
      q: "Can my company sponsor or exhibit?",
      a: "Yes. Sponsorship packages (Lead, Platinum, Gold, Silver, Bronze), standalone closed-door CXO Boardrooms, and exhibition spaces are available for qualified technology and infrastructure providers. Enquire directly via our sponsorship page.",
    },
    {
      q: "Who organises AI InfraNext?",
      a: "AI InfraNext is organised by Trescon, the global business events team behind World AI Show – the world's longest-running AI summit series, with 48 editions completed across four continents.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button className="faq-question" type="button" onClick={() => toggle(idx)}>
              <span>{faq.q}</span>
              <span className="faq-icon">{isOpen ? "×" : "+"}</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">{faq.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
