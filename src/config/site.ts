import { SiteConfig, SiteConfigSchema } from '../types/site';
import { defaultPresetId, presets } from './presets';

// The default site config is loaded from the default industry preset,
// but can also be overridden directly or switched via PresetContext.
export const siteConfig: SiteConfig = presets[defaultPresetId].siteConfig;

// Runtime validator
export function validateSiteConfig(config: unknown): SiteConfig {
  return SiteConfigSchema.parse(config);
}
