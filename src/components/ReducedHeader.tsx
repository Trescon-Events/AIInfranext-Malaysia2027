import React from "react";
import Header from "@/components/Header";

interface ReducedHeaderProps {
  badgeText?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaStyle?: "primary" | "outline";
}

export default function ReducedHeader(_props: ReducedHeaderProps) {
  return <Header />;
}
