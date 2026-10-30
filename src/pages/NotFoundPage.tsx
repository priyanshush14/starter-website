import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/layout/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 text-center">
      <SEO title="Page Not Found" description="The requested page could not be located." />

      <div className="max-w-md mx-auto space-y-6">
        <div className="text-7xl font-black text-theme-primary">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-theme-foreground">
          Page Not Found
        </h1>
        <p className="text-sm text-theme-muted-foreground leading-relaxed">
          The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link to="/">
            <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
          <button type="button" onClick={() => window.history.back()}>
            <Button variant="outline" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Go Back
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
};
