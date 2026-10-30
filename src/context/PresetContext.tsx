import React, { useState, useEffect } from 'react';
import { PresetId } from '../types/preset';
import { getPreset, presets } from '../config/presets';
import { applyThemeVariables } from '../lib/theme';
import { PresetContext } from './preset-context';

export const PresetProvider: React.FC<{
  children: React.ReactNode;
  initialPresetId?: PresetId;
}> = ({ children, initialPresetId }) => {
  // Check URL query param first, then localStorage, then env variable, then default
  const getInitialPreset = (): PresetId => {
    if (initialPresetId && initialPresetId in presets) {
      return initialPresetId;
    }
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlPreset = urlParams.get('preset') as PresetId;
      if (urlPreset && urlPreset in presets) {
        return urlPreset;
      }
      const savedPreset = localStorage.getItem('bridgetech_preset') as PresetId;
      if (savedPreset && savedPreset in presets) {
        return savedPreset;
      }
    }
    const envDefault = import.meta.env.VITE_DEFAULT_PRESET as PresetId;
    if (envDefault && envDefault in presets) {
      return envDefault;
    }
    return 'agency';
  };

  const [activePresetId, setActivePresetId] = useState<PresetId>(getInitialPreset);
  const preset = getPreset(activePresetId);

  useEffect(() => {
    // Inject CSS variables for the active preset into document.documentElement
    applyThemeVariables(preset.themeConfig);
    if (typeof window !== 'undefined') {
      localStorage.setItem('bridgetech_preset', activePresetId);
    }
  }, [activePresetId, preset]);

  const handleSetPresetId = (id: PresetId) => {
    if (id in presets) {
      setActivePresetId(id);
    }
  };

  return (
    <PresetContext.Provider
      value={{
        activePresetId,
        preset,
        setPresetId: handleSetPresetId,
        availablePresets: Object.values(presets),
      }}
    >
      {children}
    </PresetContext.Provider>
  );
};
