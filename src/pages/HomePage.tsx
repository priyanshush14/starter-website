import React from 'react';
import { usePreset } from '../hooks';
import { SectionRenderer } from '../sections/SectionRenderer';
import { SEO } from '../components/layout/SEO';

export const HomePage: React.FC = () => {
  const { preset } = usePreset();

  // Dynamic composition array from the active preset
  const sections = preset.homeSections;

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Home"
        description={preset.siteConfig.description}
      />

      {sections.map((sec, idx) => {
        const key = typeof sec === 'string' ? `${sec}-${idx}` : `${sec.id}-${idx}`;
        return <SectionRenderer key={key} section={sec} />;
      })}
    </div>
  );
};
