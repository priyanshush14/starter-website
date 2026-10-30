import React from 'react';
import { SectionConfig } from '../types/sections';
import { getSectionComponent } from './registry';

export interface SectionRendererProps {
  section: SectionConfig;
  className?: string;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ section, className }) => {
  // Normalize section configuration whether given as string ID or object
  const isDescriptor = typeof section === 'object' && section !== null && 'id' in section;
  const sectionId = isDescriptor ? section.id : section;
  const variant = isDescriptor ? section.variant : undefined;
  const customProps = isDescriptor ? section.customProps : undefined;

  const Component = getSectionComponent(sectionId);

  return <Component variant={variant} className={className} {...customProps} />;
};
