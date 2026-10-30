import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../../src/features/contact/ContactForm';
import { contactFormSchema } from '../../src/features/contact/schema';
import { submitContactMessage } from '../../src/features/contact/delivery';

describe('Contact Form Feature & Validation', () => {
  describe('Zod Schema Validation', () => {
    it('validates required fields properly', () => {
      const invalidData = {
        name: '',
        email: 'invalid-email',
        message: 'short',
        botField: '',
      };
      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);

      if (!result.success) {
        const errorMap = result.error.flatten().fieldErrors;
        expect(errorMap.name).toBeDefined();
        expect(errorMap.email).toBeDefined();
        expect(errorMap.message).toBeDefined();
      }
    });

    it('rejects honeypot botField if filled', () => {
      const spamData = {
        name: 'Bot Scraper',
        email: 'bot@spam.com',
        message: 'This is a spam message that is long enough.',
        botField: 'http://spam-link.com',
      };
      const result = contactFormSchema.safeParse(spamData);
      expect(result.success).toBe(false);
    });

    it('passes for complete valid submission data', () => {
      const validData = {
        name: 'Sarah Connor',
        email: 'sarah@resistance.org',
        phone: '+1 555-123-4567',
        subject: 'General Inquiry',
        message: 'We are interested in discussing your enterprise engineering services.',
        botField: '',
      };
      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('ContactForm Component Interactions', () => {
    it('displays client-side validation errors when required fields are empty', async () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/please provide a valid email address/i)).toBeInTheDocument();
        expect(screen.getByText(/message must be at least 10 characters long/i)).toBeInTheDocument();
      });
    });

    it('successfully submits valid form and displays confirmation status', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/full name/i), {
        target: { value: 'Alex Morgan' },
      });
      fireEvent.change(screen.getByLabelText(/email address/i), {
        target: { value: 'alex@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/your message/i), {
        target: { value: 'Hello team, we would love to collaborate on a new website.' },
      });

      const submitButton = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitButton);

      await waitFor(
        () => {
          expect(screen.getByRole('status')).toBeInTheDocument();
          expect(screen.getByText(/message dispatched/i)).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });
  });

  describe('Delivery Service', () => {
    it('silently ignores honeypot spam bot submissions', async () => {
      const response = await submitContactMessage({
        name: 'Spam Bot',
        email: 'spam@bot.com',
        message: 'Long spam message here for test.',
        botField: 'spam content in hidden field',
      });
      expect(response.success).toBe(true);
    });
  });
});
