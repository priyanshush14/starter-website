import { IndustryPreset, PresetId } from '../../types/preset';
import { agencyPreset } from './agency';
import { localBusinessPreset } from './local-business';
import { professionalPreset } from './professional';

export const presets: Record<PresetId, IndustryPreset> = {
  agency: agencyPreset,
  'local-business': localBusinessPreset,
  professional: professionalPreset,
};

export const defaultPresetId: PresetId = 'agency';

export function getPreset(id?: string): IndustryPreset {
  if (id && id in presets) {
    return presets[id as PresetId];
  }
  return presets[defaultPresetId];
}

export function getAllPresets(): IndustryPreset[] {
  return Object.values(presets);
}
