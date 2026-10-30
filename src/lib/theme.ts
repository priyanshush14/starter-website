import { ThemeConfig, ThemeConfigSchema } from '../types/theme';

export function getThemeVariables(theme: ThemeConfig): Record<string, string> {
  // Validate theme with schema; fall back to incoming if parsing fails
  const validation = ThemeConfigSchema.safeParse(theme);
  const validTheme = validation.success ? validation.data : theme;

  const { colors, typography, radius } = validTheme;

  return {
    '--color-primary': colors.primary,
    '--color-primary-hover': colors.primaryHover || colors.primary,
    '--color-secondary': colors.secondary,
    '--color-secondary-hover': colors.secondaryHover || colors.secondary,
    '--color-background': colors.background,
    '--color-foreground': colors.foreground,
    '--color-muted': colors.muted,
    '--color-muted-foreground': colors.mutedForeground || '#64748b',
    '--color-accent': colors.accent,
    '--color-accent-foreground': colors.accentForeground || '#ffffff',
    '--color-card': colors.card || colors.background,
    '--color-card-foreground': colors.cardForeground || colors.foreground,
    '--color-border': colors.border || colors.muted,
    '--font-heading': typography.headingFont,
    '--font-body': typography.bodyFont,
    '--radius-button': radius.button,
    '--radius-card': radius.card,
  };
}

export function applyThemeVariables(
  theme: ThemeConfig,
  targetElement: HTMLElement = document.documentElement
): void {
  if (typeof window === 'undefined' || !targetElement) return;

  const vars = getThemeVariables(theme);
  Object.entries(vars).forEach(([key, value]) => {
    targetElement.style.setProperty(key, value);
  });
}
