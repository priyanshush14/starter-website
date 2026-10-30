import { useContext } from 'react';
import { PresetContext, PresetContextType } from '../context/preset-context';

export function usePreset(): PresetContextType {
  const context = useContext(PresetContext);
  if (!context) {
    throw new Error('usePreset must be used within a PresetProvider');
  }
  return context;
}
