import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { contactFormSchema, ContactFormData } from './schema';
import { submitContactMessage, SubmissionResult } from './delivery';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Select } from '../../components/ui/Select';
import { Button } from '../../components/ui/Button';

export interface ContactFormProps {
  className?: string;
  subjectOptions?: { label: string; value: string }[];
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
  subjectOptions = [
    { label: 'General Inquiry', value: 'general' },
    { label: 'Project / Service Quote', value: 'quote' },
    { label: 'Partnership / Collaboration', value: 'partnership' },
    { label: 'Support & Questions', value: 'support' },
  ],
}) => {
  const [submissionState, setSubmissionState] = useState<SubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      botField: '',
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    setSubmissionState(null);
    try {
      const result = await submitContactMessage(values);
      setSubmissionState(result);
      if (result.success) {
        reset();
      }
    } catch {
      setSubmissionState({
        success: false,
        message: 'Could not send your message. Please check your network and try again.',
      });
    }
  };

  return (
    <div className={className}>
      {/* Success Notification */}
      {submissionState && submissionState.success && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 p-4 rounded-card bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Message Dispatched</p>
            <p className="mt-0.5">{submissionState.message}</p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submissionState && !submissionState.success && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 p-4 rounded-card bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-200 flex items-start gap-3 animate-fadeIn"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Submission Failed</p>
            <p className="mt-0.5">{submissionState.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Anti-spam Honeypot Field (hidden from screen reader and visual view) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-botField">Leave this field blank</label>
          <input
            id="contact-botField"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('botField')}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="Jane Doe"
            required
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="jane@example.com"
            required
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number (Optional)"
            type="tel"
            placeholder="+1 (555) 000-0000"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <Select
            label="Subject / Topic"
            placeholder="Select inquiry type..."
            options={subjectOptions}
            error={errors.subject?.message}
            {...register('subject')}
          />
        </div>

        <Textarea
          label="Your Message"
          placeholder="Please describe your project, timeline, or requirements..."
          required
          rows={5}
          error={errors.message?.message}
          {...register('message')}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};
