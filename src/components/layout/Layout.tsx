import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PresetSwitcher } from './PresetSwitcher';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-theme-background text-theme-foreground transition-colors duration-200">
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-theme-primary text-white rounded-button font-medium shadow-lg"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>

      <Footer />

      {/* Interactive preset preview switcher for demo and evaluation */}
      <PresetSwitcher />
    </div>
  );
};
