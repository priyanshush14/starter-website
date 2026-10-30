import { SiteConfig } from './site';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavItem[];
  requiresPage?: keyof SiteConfig['pages'];
}

export interface NavigationConfig {
  mainNav: NavItem[];
  footerNav: {
    title: string;
    items: NavItem[];
  }[];
  ctaButton?: {
    label: string;
    href: string;
  };
}
