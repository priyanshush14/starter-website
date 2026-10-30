import React from 'react';

export const UnknownSectionFallback: React.FC<{ sectionId: string; available: string[] }> = ({
  sectionId,
  available,
}) => {
  return (
    <div
      role="alert"
      className="max-w-4xl mx-auto my-8 p-6 rounded-card border-2 border-dashed border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200"
    >
      <div className="font-bold text-base flex items-center gap-2">
        <span>⚠️ Unrecognized Section Identifier:</span>
        <code className="px-2 py-0.5 rounded bg-amber-500/20 font-mono text-sm">
          &quot;{sectionId}&quot;
        </code>
      </div>
      <p className="text-xs mt-2">
        This section could not be found in the typed Section Registry. Ensure the section is registered in{' '}
        <code className="font-mono">src/sections/registry.ts</code>.
      </p>
      <div className="mt-3 text-xs">
        <span className="font-semibold">Available Registered Sections: </span>
        <span className="font-mono text-[11px]">{available.join(', ')}</span>
      </div>
    </div>
  );
};
