import { ThemeConfig, ThemeConfigSchema } from '../types/theme';
import { defaultPresetId, presets } from './presets';

// The default theme config is loaded from the default industry preset
export const themeConfig: ThemeConfig = presets[defaultPresetId].themeConfig;

// Runtime validator
export function validateThemeConfig(config: unknown): ThemeConfig {
  return ThemeConfigSchema.parse(config);
}
