import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const NewsletterForm: React.FC<{ className?: string }> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 600));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
        <CheckCircle className="w-4 h-4" />
        <span>Thank you for subscribing to our updates!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted-foreground" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full pl-9 pr-3 py-2 text-sm bg-theme-background border border-theme-border rounded-button outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary text-theme-foreground"
          />
        </div>
        <Button type="submit" variant="primary" size="md" isLoading={isLoading}>
          Subscribe
        </Button>
      </div>
    </form>
  );
};
