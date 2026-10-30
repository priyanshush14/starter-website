import React from 'react';
import { usePreset } from '../hooks';
import { AboutSection } from '../sections/about/AboutSection';
import { TestimonialsSection } from '../sections/testimonials/TestimonialsSection';
import { CTASection } from '../sections/cta/CTASection';
import { SEO } from '../components/layout/SEO';

export const AboutPage: React.FC = () => {
  const { preset } = usePreset();

  return (
    <div className="animate-fadeIn">
      <SEO
        title="About Us"
        description={`Learn more about ${preset.siteConfig.name}, our background, mission, and team principles.`}
      />

      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-theme-muted/40 border-b border-theme-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-primary">
            Our Story & Values
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-theme-foreground">
            About {preset.siteConfig.name}
          </h1>
          <p className="text-lg text-theme-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {preset.siteConfig.brand?.tagline || preset.siteConfig.description}
          </p>
        </div>
      </section>

      {/* Main About section */}
      <AboutSection variant="image-text" />

      {/* Stats variant */}
      <AboutSection variant="stats" />

      {/* Endorsements */}
      <TestimonialsSection variant="cards" />

      {/* Call to action */}
      <CTASection variant="banner" />
    </div>
  );
};
