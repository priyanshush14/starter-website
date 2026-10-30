import React from 'react';
import { usePreset } from '../hooks';
import { ContactSection } from '../sections/contact/ContactSection';
import { FAQSection } from '../sections/faq/FAQSection';
import { BookingEmbed } from '../features/booking/BookingEmbed';
import { featuresConfig } from '../config/features';
import { SEO } from '../components/layout/SEO';

export const ContactPage: React.FC = () => {
  const { preset } = usePreset();

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Contact & Location"
        description={`Get in touch with ${preset.siteConfig.name}. Send an inquiry, book a meeting, or visit our office.`}
      />

      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-theme-muted/40 border-b border-theme-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-primary">
            Start a Conversation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-theme-foreground">
            Contact Our Team
          </h1>
          <p className="text-lg text-theme-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you have a specific project inquiry, need a consultation, or want to drop by, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section with Details & Form */}
      <ContactSection variant="details" />

      {/* Optional Booking Embed if enabled */}
      {featuresConfig.booking.enabled && (
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingEmbed />
        </section>
      )}

      {/* Common FAQ */}
      <FAQSection variant="accordion" />
    </div>
  );
};
