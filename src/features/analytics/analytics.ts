import { featuresConfig } from '../../config/features';

export function trackEvent(eventName: string, props?: Record<string, unknown>): void {
  const { enabled, provider, trackingId } = featuresConfig.analytics;
  if (!enabled) return;

  if (typeof window === 'undefined') return;

  if (provider === 'plausible') {
    const windowPlausible = (window as unknown as { plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void }).plausible;
    if (typeof windowPlausible === 'function') {
      windowPlausible(eventName, { props });
    }
  } else if (provider === 'google-analytics') {
    const windowGtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof windowGtag === 'function') {
      windowGtag('event', eventName, { ...props, tracking_id: trackingId });
    }
  }
}
