import React, { useState } from 'react';
import { Palette, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { usePreset } from '../../hooks';
import { PresetId } from '../../types/preset';
import { cn } from '../../lib/utils';

export const PresetSwitcher: React.FC = () => {
  const { activePresetId, setPresetId, availablePresets } = usePreset();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Preset Switcher"
      className="fixed bottom-4 right-4 z-40 max-w-sm"
    >
      <div className="bg-theme-card text-theme-foreground border border-theme-border rounded-card shadow-2xl overflow-hidden transition-all duration-300">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs font-semibold bg-theme-muted/50 hover:bg-theme-muted transition-colors"
          aria-expanded={isOpen}
          aria-controls="preset-switcher-panel"
        >
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-theme-primary/10 text-theme-primary">
              <Palette className="w-3.5 h-3.5" />
            </span>
            <span>
              Preset:{' '}
              <span className="text-theme-primary font-bold">
                {availablePresets.find((p) => p.id === activePresetId)?.label}
              </span>
            </span>
          </div>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>

        {isOpen && (
          <div id="preset-switcher-panel" className="p-3 space-y-2 text-xs border-t border-theme-border animate-fadeIn">
            <p className="text-[11px] text-theme-muted-foreground">
              Select an industry preset to switch theme tokens, site identity, and page sections instantly:
            </p>
            <div className="space-y-1.5">
              {availablePresets.map((p) => {
                const isActive = p.id === activePresetId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setPresetId(p.id as PresetId);
                    }}
                    className={cn(
                      'w-full flex items-center justify-between p-2 rounded text-left transition-colors',
                      isActive
                        ? 'bg-theme-primary text-white font-semibold'
                        : 'hover:bg-theme-muted text-theme-foreground'
                    )}
                  >
                    <div>
                      <div className="font-medium">{p.label}</div>
                      <div
                        className={cn(
                          'text-[10px]',
                          isActive ? 'text-white/80' : 'text-theme-muted-foreground'
                        )}
                      >
                        {p.industry}
                      </div>
                    </div>
                    {isActive && <Check className="w-4 h-4 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
