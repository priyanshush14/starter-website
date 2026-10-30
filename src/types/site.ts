import { z } from 'zod';

export const SiteContactAddressSchema = z.object({
  street: z.string().optional(),
  city: z.string(),
  region: z.string(),
  country: z.string(),
  postalCode: z.string().optional(),
});

export const BusinessHoursSchema = z.object({
  days: z.string(),
  hours: z.string(),
});

export const SiteConfigSchema = z.object({
  name: z.string().min(1, 'Site name is required'),
  description: z.string(),
  contact: z.object({
    email: z.string().email('Invalid email address'),
    phone: z.string(),
    address: SiteContactAddressSchema,
    hours: z.array(BusinessHoursSchema).optional(),
  }),
  socialLinks: z.object({
    instagram: z.string().url().optional().or(z.literal('')),
    linkedin: z.string().url().optional().or(z.literal('')),
    facebook: z.string().url().optional().or(z.literal('')),
    twitter: z.string().url().optional().or(z.literal('')),
    github: z.string().url().optional().or(z.literal('')),
    youtube: z.string().url().optional().or(z.literal('')),
  }),
  pages: z.object({
    about: z.boolean(),
    services: z.boolean(),
    portfolio: z.boolean(),
    testimonials: z.boolean(),
    blog: z.boolean(),
    contact: z.boolean(),
  }),
  brand: z.object({
    tagline: z.string().optional(),
    foundedYear: z.number().optional(),
    logoText: z.string().optional(),
    badgeText: z.string().optional(),
  }).optional(),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
