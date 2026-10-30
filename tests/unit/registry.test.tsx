import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getSectionComponent, sectionRegistry } from '../../src/sections/registry';
import { SectionRenderer } from '../../src/sections/SectionRenderer';
import { PresetProvider } from '../../src/context/PresetContext';

describe('Section Registry and Dynamic Composition', () => {
  it('registers all approved section types from specification', () => {
    const requiredSections = [
      'hero',
      'services',
      'about',
      'portfolio',
      'testimonials',
      'pricing',
      'faq',
      'contact',
      'cta',
    ];

    requiredSections.forEach((sec) => {
      expect(sec in sectionRegistry, `Section "${sec}" must be registered`).toBe(true);
      const Component = getSectionComponent(sec);
      expect(Component).toBeDefined();
    });
  });

  it('safely handles unknown section identifiers with a fallback component without throwing', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const UnknownComp = getSectionComponent('unknown-custom-widget');
    render(<UnknownComp />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/"unknown-custom-widget"/i)).toBeInTheDocument();
    expect(consoleWarnSpy).toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it('SectionRenderer successfully renders valid registered sections', () => {
    render(
      <PresetProvider>
        <BrowserRouter>
          <SectionRenderer section="faq" />
        </BrowserRouter>
      </PresetProvider>
    );

    expect(screen.getByRole('button', { name: /how fast can our project launch\?/i })).toBeInTheDocument();
  });
});
