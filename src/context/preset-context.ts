import { createContext } from 'react';
import { IndustryPreset, PresetId } from '../types/preset';

export interface PresetContextType {
  activePresetId: PresetId;
  preset: IndustryPreset;
  setPresetId: (id: PresetId) => void;
  availablePresets: IndustryPreset[];
}

export const PresetContext = createContext<PresetContextType | null>(null);
