import React from 'react';
import { usePreset } from '../hooks';
import { PortfolioSection } from '../sections/portfolio/PortfolioSection';
import { TestimonialsSection } from '../sections/testimonials/TestimonialsSection';
import { CTASection } from '../sections/cta/CTASection';
import { SEO } from '../components/layout/SEO';

export const PortfolioPage: React.FC = () => {
  const { preset } = usePreset();

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Portfolio & Case Studies"
        description={`Browse selected projects, deliverables, and client outcomes delivered by ${preset.siteConfig.name}.`}
      />

      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-theme-muted/40 border-b border-theme-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-primary">
            Proven Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-theme-foreground">
            Featured Engagements & Projects
          </h1>
          <p className="text-lg text-theme-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our recent client deliverables, measurable impact, and craftsmanship.
          </p>
        </div>
      </section>

      {/* Case studies / gallery */}
      <PortfolioSection variant="case-studies" />

      {/* Client reviews */}
      <TestimonialsSection variant="quote-focused" />

      {/* CTA */}
      <CTASection variant="banner" />
    </div>
  );
};
