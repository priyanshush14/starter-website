import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { usePreset } from '../../hooks';
import { Button } from '../ui/Button';
import { MobileNav } from './MobileNav';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const { preset } = usePreset();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { siteConfig, navigationConfig } = preset;

  // Filter items based on whether the page is enabled in siteConfig
  const visibleNavItems = navigationConfig.mainNav.filter((item) => {
    if (!item.requiresPage) return true;
    return siteConfig.pages[item.requiresPage];
  });

  return (
    <header className="sticky top-0 z-30 w-full border-b border-theme-border/80 bg-theme-background/95 backdrop-blur supports-[backdrop-filter]:bg-theme-background/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo / Text */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-heading font-extrabold text-xl tracking-tight text-theme-foreground hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary rounded-button"
        >
          <span className="w-8 h-8 rounded-button bg-theme-primary text-white flex items-center justify-center font-black text-sm shadow-sm">
            {siteConfig.brand?.logoText ? siteConfig.brand.logoText.slice(0, 2) : siteConfig.name.slice(0, 2).toUpperCase()}
          </span>
          <span className="truncate">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {visibleNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'px-3.5 py-1.5 rounded-button text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary',
                  isActive
                    ? 'text-theme-primary bg-theme-primary/10 font-semibold'
                    : 'text-theme-muted-foreground hover:text-theme-foreground hover:bg-theme-muted'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {navigationConfig.ctaButton && (
            <Link to={navigationConfig.ctaButton.href} className="hidden sm:inline-flex">
              <Button variant="primary" size="sm">
                {navigationConfig.ctaButton.label}
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-theme-foreground hover:bg-theme-muted rounded-button focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={visibleNavItems}
        ctaButton={navigationConfig.ctaButton}
        siteName={siteConfig.name}
      />
    </header>
  );
};
