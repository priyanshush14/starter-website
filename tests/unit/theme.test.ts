import { describe, it, expect } from 'vitest';
import { getThemeVariables, applyThemeVariables } from '../../src/lib/theme';
import { agencyPreset } from '../../src/config/presets/agency';

describe('Theme Variable Injection', () => {
  it('generates expected CSS custom property mappings', () => {
    const vars = getThemeVariables(agencyPreset.themeConfig);

    expect(vars['--color-primary']).toBe(agencyPreset.themeConfig.colors.primary);
    expect(vars['--color-secondary']).toBe(agencyPreset.themeConfig.colors.secondary);
    expect(vars['--color-background']).toBe(agencyPreset.themeConfig.colors.background);
    expect(vars['--radius-button']).toBe(agencyPreset.themeConfig.radius.button);
    expect(vars['--radius-card']).toBe(agencyPreset.themeConfig.radius.card);
  });

  it('injects variables into target DOM element', () => {
    const testElement = document.createElement('div');
    applyThemeVariables(agencyPreset.themeConfig, testElement);

    expect(testElement.style.getPropertyValue('--color-primary')).toBe(
      agencyPreset.themeConfig.colors.primary
    );
    expect(testElement.style.getPropertyValue('--radius-button')).toBe(
      agencyPreset.themeConfig.radius.button
    );
  });
});
