import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialsData, TestimonialsVariant } from '../../types/sections';
import { Badge } from '../../components/ui/Badge';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface TestimonialsSectionProps {
  variant?: TestimonialsVariant | string;
  data?: Partial<TestimonialsData>;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  variant = 'cards',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: TestimonialsData = { ...preset.data.testimonials, ...customData };

  // --- Variant 1: Quote Focused ---
  if (variant === 'quote-focused' && data.items.length > 0) {
    const featured = data.items[0];
    return (
      <section className={cn('py-16 sm:py-24 bg-theme-muted/30 border-y border-theme-border/60', className)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-12 h-12 mx-auto rounded-full bg-theme-primary/10 text-theme-primary flex items-center justify-center">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-theme-foreground leading-relaxed italic">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>

          <div className="pt-4 flex flex-col items-center justify-center space-y-2">
            {featured.avatarUrl && (
              <img
                src={featured.avatarUrl}
                alt={featured.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-theme-primary shadow-sm"
              />
            )}
            <div className="font-bold text-base text-theme-foreground">{featured.author}</div>
            <div className="text-xs text-theme-muted-foreground">
              {featured.role}, <span className="font-medium text-theme-foreground">{featured.company}</span>
            </div>
            {featured.rating && (
              <div className="flex items-center gap-1 text-amber-500 pt-1">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // --- Default: Variant Cards ---
  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {data.badge && <Badge variant="primary">{data.badge}</Badge>}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-base sm:text-lg text-theme-muted-foreground">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-card border border-theme-border bg-theme-card flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {item.rating && (
                  <div className="flex items-center gap-1 text-amber-500" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                )}
                <p className="text-sm sm:text-base text-theme-foreground leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-theme-border/60">
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-theme-border"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-theme-primary/10 text-theme-primary font-bold flex items-center justify-center text-xs">
                    {item.author.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="text-xs">
                  <div className="font-bold text-theme-foreground">{item.author}</div>
                  <div className="text-theme-muted-foreground">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
