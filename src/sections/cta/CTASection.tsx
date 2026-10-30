import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CTAData, CTAVariant } from '../../types/sections';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface CTASectionProps {
  variant?: CTAVariant | string;
  data?: Partial<CTAData>;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  variant = 'banner',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: CTAData = { ...preset.data.cta, ...customData };

  // --- Variant 1: Split CTA ---
  if (variant === 'split') {
    return (
      <section className={cn('py-16 sm:py-20 border-y border-theme-border/60 bg-theme-muted/30', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              {data.badge && <Badge variant="primary">{data.badge}</Badge>}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground">
                {data.title}
              </h2>
              <p className="text-base text-theme-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link to={data.primaryCta.href}>
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {data.primaryCta.label}
                </Button>
              </Link>
              {data.secondaryCta && (
                <Link to={data.secondaryCta.href}>
                  <Button variant="outline" size="lg">
                    {data.secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Default: Variant Full-Width Banner ---
  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-card bg-theme-primary text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            {data.badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur">
                {data.badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {data.title}
            </h2>
            <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to={data.primaryCta.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-theme-foreground hover:bg-slate-100 shadow-md font-bold"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {data.primaryCta.label}
                </Button>
              </Link>
              {data.secondaryCta && (
                <Link to={data.secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    {data.secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
