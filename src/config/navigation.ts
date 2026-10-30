import { NavigationConfig } from '../types/navigation';
import { defaultPresetId, presets } from './presets';

// The default navigation config is loaded from the default industry preset
export const navigationConfig: NavigationConfig = presets[defaultPresetId].navigationConfig;
