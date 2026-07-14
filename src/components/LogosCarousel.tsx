"use client";

import React from "react";
import PartenairesSection, { partnersData } from "./PartenairesSection";

export { partnersData };

/**
 * LogosCarousel — Rendu synchronisé avec PartenairesSection
 * pour afficher les partenaires depuis public/logos_partenaires.
 */
export default function LogosCarousel() {
  return <PartenairesSection />;
}
