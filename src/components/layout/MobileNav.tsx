import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { NavItem } from '../../types/navigation';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  ctaButton?: {
    label: string;
    href: string;
  };
  siteName: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  items,
  ctaButton,
  siteName,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-theme-background border-l border-theme-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-theme-border">
            <span className="font-heading font-bold text-lg text-theme-foreground">
              {siteName}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-theme-muted-foreground hover:text-theme-foreground rounded-button focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-3" aria-label="Mobile Navigation Links">
            {items.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2.5 rounded-button text-base font-medium transition-colors',
                    isActive
                      ? 'bg-theme-primary/10 text-theme-primary font-semibold'
                      : 'text-theme-foreground hover:bg-theme-muted'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer with CTA */}
        {ctaButton && (
          <div className="pt-6 border-t border-theme-border mt-6">
            <NavLink to={ctaButton.href} onClick={onClose} className="block w-full">
              <Button variant="primary" size="lg" className="w-full">
                {ctaButton.label}
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
