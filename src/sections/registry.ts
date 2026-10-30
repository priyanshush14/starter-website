import React from 'react';
import { SectionType, SectionRegistryProps } from '../types/sections';
import { HeroSection } from './hero/HeroSection';
import { ServicesSection } from './services/ServicesSection';
import { AboutSection } from './about/AboutSection';
import { PortfolioSection } from './portfolio/PortfolioSection';
import { TestimonialsSection } from './testimonials/TestimonialsSection';
import { PricingSection } from './pricing/PricingSection';
import { FAQSection } from './faq/FAQSection';
import { ContactSection } from './contact/ContactSection';
import { CTASection } from './cta/CTASection';
import { UnknownSectionFallback } from './UnknownSectionFallback';

export { UnknownSectionFallback };

// Typed Section Registry Map
export const sectionRegistry: Record<
  SectionType,
  React.ComponentType<SectionRegistryProps<any>> // eslint-disable-line @typescript-eslint/no-explicit-any
> = {
  hero: HeroSection,
  services: ServicesSection,
  about: AboutSection,
  portfolio: PortfolioSection,
  testimonials: TestimonialsSection,
  pricing: PricingSection,
  faq: FAQSection,
  contact: ContactSection,
  cta: CTASection,
  footer: () => null,
};

/**
 * Safely looks up a section component from the registry.
 * Gracefully reports unsupported or invalid section identifiers without breaking the application.
 */
export function getSectionComponent(
  sectionId: string
): React.ComponentType<SectionRegistryProps<any>> { // eslint-disable-line @typescript-eslint/no-explicit-any
  const cleanId = sectionId.toLowerCase().trim() as SectionType;

  if (cleanId in sectionRegistry) {
    return sectionRegistry[cleanId];
  }

  // Graceful fallback with developer warning
  console.warn(
    `[BridgeTech Section Registry] Unsupported section "${sectionId}". Available sections: ${Object.keys(
      sectionRegistry
    ).join(', ')}`
  );

  return function MissingSection() {
    return React.createElement(UnknownSectionFallback, {
      sectionId,
      available: Object.keys(sectionRegistry),
    });
  };
}
