import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { featuresConfig } from '../../config/features';

export interface BookingEmbedProps {
  url?: string;
  className?: string;
}

export const BookingEmbed: React.FC<BookingEmbedProps> = ({ url, className }) => {
  const embedUrl = url || featuresConfig.booking.embedUrl;

  if (!embedUrl) {
    return (
      <div className={`p-8 border border-dashed border-theme-border rounded-card text-center ${className || ''}`}>
        <Calendar className="w-10 h-10 mx-auto text-theme-muted-foreground mb-3" />
        <h4 className="font-heading font-semibold text-base text-theme-foreground">Schedule a Consultation</h4>
        <p className="text-sm text-theme-muted-foreground mt-1 max-w-sm mx-auto">
          Online calendar booking is available by appointment. Contact our office directly to arrange a session.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className || ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-theme-foreground">
          <Calendar className="w-4 h-4 text-theme-primary" />
          <span>Interactive Calendar</span>
        </div>
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-theme-primary hover:underline flex items-center gap-1"
        >
          Open full screen <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="w-full h-[600px] border border-theme-border rounded-card overflow-hidden bg-white shadow-sm">
        <iframe
          src={embedUrl}
          title="Schedule Appointment"
          className="w-full h-full border-0"
        />
      </div>

      <div className="text-center sm:hidden">
        <a href={embedUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" rightIcon={<ExternalLink className="w-3 h-3" />}>
            Open Booking in New Tab
          </Button>
        </a>
      </div>
    </div>
  );
};
