import React from 'react';
import { AboutData, AboutVariant } from '../../types/sections';
import { Badge } from '../../components/ui/Badge';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface AboutSectionProps {
  variant?: AboutVariant | string;
  data?: Partial<AboutData>;
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  variant = 'stats',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: AboutData = { ...preset.data.about, ...customData };

  // --- Variant 1: Statistics Grid ---
  if (variant === 'stats') {
    return (
      <section className={cn('py-16 sm:py-24 bg-theme-muted/40 border-y border-theme-border/60', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              {data.badge && <Badge variant="primary">{data.badge}</Badge>}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground leading-tight">
                {data.title}
              </h2>
              {data.mission && (
                <p className="text-base text-theme-muted-foreground leading-relaxed pt-2">
                  {data.mission}
                </p>
              )}
            </div>

            <div className="lg:col-span-7">
              {data.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {data.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-card bg-theme-background border border-theme-border text-center space-y-1 shadow-sm"
                    >
                      <div className="text-3xl sm:text-4xl font-black text-theme-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-theme-muted-foreground font-semibold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Story Narrative & Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4 text-theme-muted-foreground leading-relaxed text-sm sm:text-base">
              {data.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {data.values && (
              <div className="space-y-4">
                {data.values.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-card border border-theme-border bg-theme-background/80"
                  >
                    <h4 className="text-sm font-bold text-theme-foreground">{v.title}</h4>
                    <p className="text-xs text-theme-muted-foreground mt-1 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // --- Variant 2: Company Story ---
  if (variant === 'story') {
    return (
      <section className={cn('py-16 sm:py-24', className)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          {data.badge && <Badge variant="outline">{data.badge}</Badge>}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-theme-foreground">
            {data.title}
          </h2>

          <div className="space-y-6 text-left text-base sm:text-lg text-theme-muted-foreground leading-relaxed pt-4 border-t border-theme-border/60">
            {data.story.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {data.mission && (
            <div className="p-8 rounded-card bg-theme-muted/50 border border-theme-border text-left space-y-2 mt-8">
              <span className="text-xs font-bold uppercase tracking-widest text-theme-primary">
                Our Mission
              </span>
              <p className="text-lg font-semibold text-theme-foreground italic">
                &ldquo;{data.mission}&rdquo;
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }

  // --- Default: Variant Image & Text ---
  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            {data.imageUrl ? (
              <div className="rounded-card overflow-hidden shadow-xl border border-theme-border aspect-[4/3]">
                <img
                  src={data.imageUrl}
                  alt={data.imageAlt || data.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] rounded-card bg-theme-muted flex items-center justify-center text-sm text-theme-muted-foreground">
                Image Placeholder
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {data.badge && <Badge variant="primary">{data.badge}</Badge>}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground leading-tight">
              {data.title}
            </h2>

            <div className="space-y-4 text-theme-muted-foreground leading-relaxed text-sm sm:text-base">
              {data.story.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {data.stats && (
              <div className="pt-6 border-t border-theme-border grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-theme-primary">{s.value}</div>
                    <div className="text-xs text-theme-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
