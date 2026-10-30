export interface FeaturesConfig {
  contactForm: {
    enabled: boolean;
    provider: 'mock' | 'formspree' | 'web3forms' | 'custom';
    endpoint?: string;
  };
  newsletter: {
    enabled: boolean;
    provider: 'mock' | 'mailchimp' | 'convertkit';
    endpoint?: string;
  };
  booking: {
    enabled: boolean;
    provider: 'calendly' | 'custom';
    embedUrl?: string;
  };
  analytics: {
    enabled: boolean;
    provider: 'plausible' | 'google-analytics';
    trackingId?: string;
  };
}

export const featuresConfig: FeaturesConfig = {
  contactForm: {
    enabled: true,
    provider: (import.meta.env.VITE_CONTACT_FORM_PROVIDER as FeaturesConfig['contactForm']['provider']) || 'mock',
    endpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '',
  },
  newsletter: {
    enabled: false, // Disabled by default per specification
    provider: 'mock',
    endpoint: '',
  },
  booking: {
    enabled: false, // Disabled by default per specification
    provider: 'calendly',
    embedUrl: import.meta.env.VITE_BOOKING_CALENDLY_URL || '',
  },
  analytics: {
    enabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true', // Disabled by default
    provider: 'plausible',
    trackingId: import.meta.env.VITE_ANALYTICS_ID || '',
  },
};
