import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select or enter an inquiry topic').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  // Honeypot field: hidden in UI, bot trap. Must remain empty.
  botField: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
