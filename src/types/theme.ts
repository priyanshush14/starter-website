import { z } from 'zod';

export const ThemeColorsSchema = z.object({
  primary: z.string(),
  primaryHover: z.string().optional(),
  secondary: z.string(),
  secondaryHover: z.string().optional(),
  background: z.string(),
  foreground: z.string(),
  muted: z.string(),
  mutedForeground: z.string().optional(),
  accent: z.string(),
  accentForeground: z.string().optional(),
  card: z.string().optional(),
  cardForeground: z.string().optional(),
  border: z.string().optional(),
});

export const ThemeTypographySchema = z.object({
  headingFont: z.string(),
  bodyFont: z.string(),
});

export const ThemeRadiusSchema = z.object({
  button: z.string(),
  card: z.string(),
});

export const ThemeConfigSchema = z.object({
  colors: ThemeColorsSchema,
  typography: ThemeTypographySchema,
  radius: ThemeRadiusSchema,
});

export type ThemeConfig = z.infer<typeof ThemeConfigSchema>;
