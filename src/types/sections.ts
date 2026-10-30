import { ReactNode } from 'react';

export type HeroVariant = 'centered' | 'split' | 'image-bg' | 'minimal';
export type ServicesVariant = 'cards' | 'icon-grid' | 'alternating';
export type AboutVariant = 'image-text' | 'story' | 'stats';
export type PortfolioVariant = 'grid' | 'featured' | 'case-studies';
export type TestimonialsVariant = 'cards' | 'quote-focused';
export type PricingVariant = 'cards' | 'comparison-table';
export type FAQVariant = 'accordion' | 'grouped';
export type ContactVariant = 'form' | 'details' | 'map';
export type CTAVariant = 'banner' | 'split';
export type FooterVariant = 'minimal' | 'multi-column';

export type SectionType =
  | 'hero'
  | 'services'
  | 'about'
  | 'portfolio'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'contact'
  | 'cta'
  | 'footer';

export interface SectionDescriptor {
  id: SectionType | string;
  variant?: string;
  customProps?: Record<string, unknown>;
}

export type SectionConfig = SectionType | SectionDescriptor;

// Data models for section contents
export interface HeroData {
  badge?: string;
  title: string;
  highlightedText?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustBadges?: string[];
  imageUrl?: string;
  stats?: { value: string; label: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  link?: string;
  popular?: boolean;
}

export interface ServicesData {
  badge?: string;
  title: string;
  description?: string;
  items: ServiceItem[];
}

export interface StatItem {
  value: string;
  label: string;
  change?: string;
}

export interface AboutData {
  badge?: string;
  title: string;
  story: string[];
  mission?: string;
  vision?: string;
  stats?: StatItem[];
  imageUrl?: string;
  imageAlt?: string;
  values?: { title: string; description: string; iconName?: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  metrics?: { label: string; value: string }[];
  tags?: string[];
  client?: string;
  year?: string;
  link?: string;
}

export interface PortfolioData {
  badge?: string;
  title: string;
  description?: string;
  categories?: string[];
  items: PortfolioItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
}

export interface TestimonialsData {
  badge?: string;
  title: string;
  description?: string;
  items: TestimonialItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  ctaText: string;
  ctaHref: string;
}

export interface PricingData {
  badge?: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQData {
  badge?: string;
  title: string;
  description?: string;
  items: FAQItem[];
}

export interface CTAData {
  badge?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface SectionRegistryProps<T = unknown> {
  variant?: string;
  data?: T;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}
