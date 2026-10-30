import { describe, it, expect } from 'vitest';
import { SiteConfigSchema } from '../../src/types/site';
import { ThemeConfigSchema } from '../../src/types/theme';
import { presets, getPreset, getAllPresets } from '../../src/config/presets';

describe('Configuration Engine & Schemas', () => {
  it('validates all three industry presets against SiteConfigSchema', () => {
    const allPresets = getAllPresets();
    expect(allPresets).toHaveLength(3);

    allPresets.forEach((preset) => {
      const parsedSite = SiteConfigSchema.safeParse(preset.siteConfig);
      expect(parsedSite.success, `Preset ${preset.id} failed site config validation`).toBe(true);

      const parsedTheme = ThemeConfigSchema.safeParse(preset.themeConfig);
      expect(parsedTheme.success, `Preset ${preset.id} failed theme config validation`).toBe(true);
    });
  });

  it('correctly provides preset by id', () => {
    const agency = getPreset('agency');
    expect(agency.id).toBe('agency');
    expect(agency.label).toBe('Digital Agency');

    const localBusiness = getPreset('local-business');
    expect(localBusiness.id).toBe('local-business');
    expect(localBusiness.label).toBe('Local Business');

    const professional = getPreset('professional');
    expect(professional.id).toBe('professional');
    expect(professional.label).toBe('Professional Services');
  });

  it('falls back to default preset when invalid preset id is requested', () => {
    const fallback = getPreset('non-existent-preset-id');
    expect(fallback.id).toBe('agency');
  });

  it('contains expected navigation and contact info across presets', () => {
    Object.values(presets).forEach((preset) => {
      expect(preset.siteConfig.contact.email).toContain('@');
      expect(preset.navigationConfig.mainNav.length).toBeGreaterThan(0);
      expect(preset.homeSections.length).toBeGreaterThan(0);
    });
  });
});
