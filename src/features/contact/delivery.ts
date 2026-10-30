import { ContactFormData } from './schema';
import { featuresConfig } from '../../config/features';

export interface SubmissionResult {
  success: boolean;
  message: string;
}

export async function submitContactMessage(data: ContactFormData): Promise<SubmissionResult> {
  // 1. Anti-spam honeypot verification
  if (data.botField && data.botField.trim() !== '') {
    // Silently reject or simulate delay to foil scrapers
    return {
      success: true,
      message: 'Your message has been received.',
    };
  }

  const { provider, endpoint } = featuresConfig.contactForm;

  // 2. Mock submission (standard development and test mode)
  if (provider === 'mock' || !endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Thank you! Your message has been received. Our team will get back to you shortly.',
    };
  }

  // 3. Formspree / Web3Forms / Custom Webhook integration
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || 'N/A',
        subject: data.subject || 'General Inquiry',
        message: data.message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with status ${response.status}`);
    }

    return {
      success: true,
      message: 'Thank you! Your message has been dispatched successfully.',
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'An unexpected transmission error occurred. Please try again or reach out by phone.',
    };
  }
}
