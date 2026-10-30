import React from 'react';
import { usePreset } from '../hooks';
import { ServicesSection } from '../sections/services/ServicesSection';
import { PricingSection } from '../sections/pricing/PricingSection';
import { FAQSection } from '../sections/faq/FAQSection';
import { CTASection } from '../sections/cta/CTASection';
import { SEO } from '../components/layout/SEO';

export const ServicesPage: React.FC = () => {
  const { preset } = usePreset();

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Services & Capabilities"
        description={`Explore full-spectrum offerings, capabilities, and pricing from ${preset.siteConfig.name}.`}
      />

      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-theme-muted/40 border-b border-theme-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-primary">
            Capabilities & Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-theme-foreground">
            Our Core Services
          </h1>
          <p className="text-lg text-theme-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {preset.data.services.description || 'Comprehensive solutions tailored to your unique requirements.'}
          </p>
        </div>
      </section>

      {/* Services breakdown - alternating rows */}
      <ServicesSection variant="alternating" />

      {/* Pricing / Engagement packages */}
      <PricingSection variant="cards" />

      {/* FAQ */}
      <FAQSection variant="accordion" />

      {/* CTA */}
      <CTASection variant="split" />
    </div>
  );
};
