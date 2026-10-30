import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactVariant } from '../../types/sections';
import { Badge } from '../../components/ui/Badge';
import { ContactForm } from '../../features/contact/ContactForm';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface ContactSectionProps {
  variant?: ContactVariant | string;
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  variant = 'form',
  className,
}) => {
  const { preset } = usePreset();
  const { siteConfig } = preset;

  // --- Variant 1: Contact Details & Hours ---
  if (variant === 'details') {
    return (
      <section className={cn('py-16 sm:py-24', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="primary">Visit & Connect</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground">
              We&apos;d love to hear from you.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted-foreground">
              Drop by our storefront, reach out by phone, or send an inquiry online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Info cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-card border border-theme-border bg-theme-card space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-button bg-theme-primary/10 text-theme-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-theme-foreground">Physical Address</h3>
                    <p className="text-sm text-theme-muted-foreground mt-1">
                      {siteConfig.contact.address.street && `${siteConfig.contact.address.street}, `}
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.region}{' '}
                      {siteConfig.contact.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-theme-border/60">
                  <div className="w-10 h-10 rounded-button bg-theme-primary/10 text-theme-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-theme-foreground">Direct Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-theme-primary hover:underline mt-1 block"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-theme-border/60">
                  <div className="w-10 h-10 rounded-button bg-theme-primary/10 text-theme-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-theme-foreground">Telephone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}
                      className="text-sm text-theme-primary hover:underline mt-1 block"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              {siteConfig.contact.hours && (
                <div className="p-6 rounded-card border border-theme-border bg-theme-card space-y-3">
                  <div className="flex items-center gap-2 font-bold text-base text-theme-foreground">
                    <Clock className="w-4 h-4 text-theme-primary" />
                    <span>Business Hours</span>
                  </div>
                  <div className="divide-y divide-theme-border/60 text-sm">
                    {siteConfig.contact.hours.map((h, i) => (
                      <div key={i} className="py-2 flex justify-between gap-4">
                        <span className="text-theme-muted-foreground">{h.days}</span>
                        <span className="font-medium text-theme-foreground">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 p-8 rounded-card border border-theme-border bg-theme-card shadow-sm">
              <h3 className="text-xl font-bold text-theme-foreground mb-6">Send an Online Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Variant 2: Map Embed Wrapper ---
  if (variant === 'map') {
    return (
      <section className={cn('py-16 sm:py-24', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-theme-foreground">Our Location</h2>
            <p className="text-sm text-theme-muted-foreground">
              {siteConfig.contact.address.city}, {siteConfig.contact.address.region}
            </p>
          </div>

          {/* Map container */}
          <div className="w-full h-96 rounded-card border border-theme-border overflow-hidden relative bg-theme-muted flex items-center justify-center">
            <div className="text-center p-6 space-y-2">
              <MapPin className="w-10 h-10 mx-auto text-theme-primary" />
              <div className="font-bold text-theme-foreground">{siteConfig.name}</div>
              <div className="text-xs text-theme-muted-foreground max-w-xs">
                {siteConfig.contact.address.street && `${siteConfig.contact.address.street}, `}
                {siteConfig.contact.address.city}, {siteConfig.contact.address.region}{' '}
                {siteConfig.contact.address.country}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Default: Variant Form ---
  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="primary">Get in Touch</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground">
            Let&apos;s start a conversation.
          </h2>
          <p className="text-base text-theme-muted-foreground max-w-xl mx-auto">
            Fill out the form below and our team will get in touch with you within one business day.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-card border border-theme-border bg-theme-card shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
