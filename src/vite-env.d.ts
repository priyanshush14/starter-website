/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_DEFAULT_PRESET?: string;
  readonly VITE_CONTACT_FORM_PROVIDER?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
  readonly VITE_ANALYTICS_ENABLED?: string;
  readonly VITE_ANALYTICS_ID?: string;
  readonly VITE_BOOKING_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
