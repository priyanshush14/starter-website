import { SiteConfig } from './site';
import { ThemeConfig } from './theme';
import { NavigationConfig } from './navigation';
import {
  SectionConfig,
  HeroData,
  ServicesData,
  AboutData,
  PortfolioData,
  TestimonialsData,
  PricingData,
  FAQData,
  CTAData,
} from './sections';

export type PresetId = 'agency' | 'local-business' | 'professional';

export interface PresetSectionData {
  hero: HeroData;
  services: ServicesData;
  about: AboutData;
  portfolio: PortfolioData;
  testimonials: TestimonialsData;
  pricing: PricingData;
  faq: FAQData;
  cta: CTAData;
}

export interface IndustryPreset {
  id: PresetId;
  label: string;
  industry: string;
  description: string;
  siteConfig: SiteConfig;
  themeConfig: ThemeConfig;
  navigationConfig: NavigationConfig;
  homeSections: SectionConfig[];
  data: PresetSectionData;
}
