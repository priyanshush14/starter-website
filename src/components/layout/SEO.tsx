import React, { useEffect } from 'react';
import { usePreset } from '../../hooks';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
}) => {
  const { preset } = usePreset();
  const siteName = preset.siteConfig.name;
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} – ${preset.siteConfig.description}`;
  const metaDescription = description || preset.siteConfig.description;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', metaDescription);

    // Update OpenGraph Title
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (!ogTitleEl) {
      ogTitleEl = document.createElement('meta');
      ogTitleEl.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleEl);
    }
    ogTitleEl.setAttribute('content', fullTitle);

    // Update OpenGraph Description
    let ogDescEl = document.querySelector('meta[property="og:description"]');
    if (!ogDescEl) {
      ogDescEl = document.createElement('meta');
      ogDescEl.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescEl);
    }
    ogDescEl.setAttribute('content', metaDescription);

    // Update OpenGraph Type
    let ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (!ogTypeEl) {
      ogTypeEl = document.createElement('meta');
      ogTypeEl.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeEl);
    }
    ogTypeEl.setAttribute('content', ogType);

    // Update Canonical URL if provided
    if (canonical) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonical);
    }
  }, [fullTitle, metaDescription, ogType, canonical]);

  return null;
};
