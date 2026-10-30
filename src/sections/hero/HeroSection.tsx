import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroData, HeroVariant } from '../../types/sections';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface HeroSectionProps {
  variant?: HeroVariant | string;
  data?: Partial<HeroData>;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  variant = 'split',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: HeroData = { ...preset.data.hero, ...customData };

  // --- Variant 1: Centered ---
  if (variant === 'centered') {
    return (
      <section className={cn('relative py-20 lg:py-28 overflow-hidden', className)}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {data.badge && (
            <Badge variant="primary" size="md" className="mx-auto">
              {data.badge}
            </Badge>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-foreground leading-[1.15]">
            {data.title}
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-theme-muted-foreground leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {data.primaryCta && (
              <Link to={data.primaryCta.href}>
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {data.primaryCta.label}
                </Button>
              </Link>
            )}
            {data.secondaryCta && (
              <Link to={data.secondaryCta.href}>
                <Button variant="outline" size="lg">
                  {data.secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>

          {/* Trust Badges */}
          {data.trustBadges && data.trustBadges.length > 0 && (
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-theme-muted-foreground border-t border-theme-border/60">
              {data.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          )}

          {/* Hero Visual Image */}
          {data.imageUrl && (
            <div className="pt-8 relative max-w-4xl mx-auto">
              <div className="rounded-card overflow-hidden shadow-2xl border border-theme-border aspect-video">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // --- Variant 2: Image Background ---
  if (variant === 'image-bg') {
    return (
      <section
        className={cn(
          'relative min-h-[550px] lg:min-h-[640px] flex items-center justify-center py-20 overflow-hidden',
          className
        )}
      >
        {data.imageUrl && (
          <div className="absolute inset-0 z-0">
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          {data.badge && (
            <Badge variant="accent" size="md">
              {data.badge}
            </Badge>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {data.title}
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-200 leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {data.primaryCta && (
              <Link to={data.primaryCta.href}>
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {data.primaryCta.label}
                </Button>
              </Link>
            )}
            {data.secondaryCta && (
              <Link to={data.secondaryCta.href}>
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  {data.secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // --- Variant 3: Minimal ---
  if (variant === 'minimal') {
    return (
      <section className={cn('py-16 sm:py-24 border-b border-theme-border/60', className)}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {data.badge && (
            <Badge variant="outline" size="md">
              {data.badge}
            </Badge>
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-theme-foreground leading-tight max-w-4xl">
            {data.title}
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl text-theme-muted-foreground leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {data.primaryCta && (
              <Link to={data.primaryCta.href}>
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {data.primaryCta.label}
                </Button>
              </Link>
            )}
            {data.secondaryCta && (
              <Link to={data.secondaryCta.href}>
                <Button variant="ghost" size="lg">
                  {data.secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>

          {/* Stats Bar */}
          {data.stats && (
            <div className="pt-8 border-t border-theme-border grid grid-cols-2 sm:grid-cols-3 gap-6">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-theme-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  // --- Default: Variant Split ---
  return (
    <section className={cn('relative py-16 sm:py-24 lg:py-28 overflow-hidden', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {data.badge && (
              <Badge variant="primary" size="md">
                {data.badge}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-foreground leading-[1.12]">
              {data.title}
            </h1>

            <p className="text-lg sm:text-xl text-theme-muted-foreground leading-relaxed max-w-2xl">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {data.primaryCta && (
                <Link to={data.primaryCta.href}>
                  <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    {data.primaryCta.label}
                  </Button>
                </Link>
              )}
              {data.secondaryCta && (
                <Link to={data.secondaryCta.href}>
                  <Button variant="outline" size="lg">
                    {data.secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>

            {/* Stats row if available */}
            {data.stats && (
              <div className="pt-8 border-t border-theme-border/60 grid grid-cols-3 gap-4">
                {data.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-theme-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-theme-muted-foreground font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column Visual */}
          <div className="lg:col-span-5 relative">
            {data.imageUrl ? (
              <div className="relative rounded-card overflow-hidden shadow-2xl border border-theme-border aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            ) : (
              <div className="w-full aspect-square rounded-card bg-theme-muted/50 border border-dashed border-theme-border flex items-center justify-center text-theme-muted-foreground text-sm">
                Visual placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
