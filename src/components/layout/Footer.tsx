import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Twitter, Facebook, Github } from 'lucide-react';
import { usePreset } from '../../hooks';

export const Footer: React.FC = () => {
  const { preset } = usePreset();
  const { siteConfig, navigationConfig } = preset;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-theme-muted/40 border-t border-theme-border text-theme-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 font-heading font-extrabold text-xl tracking-tight text-theme-foreground"
            >
              <span className="w-8 h-8 rounded-button bg-theme-primary text-white flex items-center justify-center font-black text-sm">
                {siteConfig.brand?.logoText ? siteConfig.brand.logoText.slice(0, 2) : siteConfig.name.slice(0, 2).toUpperCase()}
              </span>
              <span>{siteConfig.name}</span>
            </Link>

            <p className="text-sm text-theme-muted-foreground leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2" aria-label="Social media channels">
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-button border border-theme-border flex items-center justify-center text-theme-muted-foreground hover:text-theme-primary hover:border-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-button border border-theme-border flex items-center justify-center text-theme-muted-foreground hover:text-theme-primary hover:border-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.twitter && (
                <a
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-button border border-theme-border flex items-center justify-center text-theme-muted-foreground hover:text-theme-primary hover:border-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-button border border-theme-border flex items-center justify-center text-theme-muted-foreground hover:text-theme-primary hover:border-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.github && (
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-button border border-theme-border flex items-center justify-center text-theme-muted-foreground hover:text-theme-primary hover:border-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          {navigationConfig.footerNav.map((column, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-theme-foreground">
                {column.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-muted-foreground hover:text-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary rounded"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-theme-muted-foreground hover:text-theme-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary rounded"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-theme-foreground">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-theme-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-theme-primary mt-0.5" />
                <span>
                  {siteConfig.contact.address.street && `${siteConfig.contact.address.street}, `}
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.region}{' '}
                  {siteConfig.contact.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-theme-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-theme-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-theme-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}
                  className="hover:text-theme-primary transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              {/* Business Hours if configured */}
              {siteConfig.contact.hours && siteConfig.contact.hours.length > 0 && (
                <div className="pt-2 border-t border-theme-border space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-theme-foreground">
                    <Clock className="w-3.5 h-3.5 text-theme-primary" />
                    <span>Operating Hours</span>
                  </div>
                  {siteConfig.contact.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-2 text-[11px]">
                      <span>{h.days}:</span>
                      <span className="font-medium text-theme-foreground">{h.hours}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-theme-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted-foreground">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Powered by BridgeTech Website Starter Kit.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-theme-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-theme-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-theme-foreground transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
