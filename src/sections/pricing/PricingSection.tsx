import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { PricingData, PricingVariant } from '../../types/sections';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface PricingSectionProps {
  variant?: PricingVariant | string;
  data?: Partial<PricingData>;
  className?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  variant = 'cards',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: PricingData = { ...preset.data.pricing, ...customData };

  // --- Variant 1: Comparison Table ---
  if (variant === 'comparison-table') {
    // Extract all unique feature texts across plans
    const allFeatures = Array.from(
      new Set(data.plans.flatMap((plan) => plan.features.map((f) => f.text)))
    );

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

          <div className="overflow-x-auto border border-theme-border rounded-card bg-theme-card">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-theme-border bg-theme-muted/40">
                  <th className="p-4 sm:p-6 text-sm font-bold text-theme-foreground w-1/3">
                    Features & Deliverables
                  </th>
                  {data.plans.map((plan) => (
                    <th key={plan.id} className="p-4 sm:p-6 text-center">
                      <div className="font-bold text-base text-theme-foreground">{plan.name}</div>
                      <div className="text-xl font-extrabold text-theme-primary mt-1">
                        {plan.price}
                      </div>
                      {plan.period && (
                        <div className="text-[11px] text-theme-muted-foreground font-normal">
                          {plan.period}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-theme-border text-sm">
                {allFeatures.map((featText, fIdx) => (
                  <tr key={fIdx} className="hover:bg-theme-muted/20 transition-colors">
                    <td className="p-4 sm:p-6 text-theme-foreground font-medium">{featText}</td>
                    {data.plans.map((plan) => {
                      const match = plan.features.find((f) => f.text === featText);
                      const included = match ? match.included : false;
                      return (
                        <td key={plan.id} className="p-4 sm:p-6 text-center">
                          {included ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-theme-muted-foreground/40 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 sm:p-6"></td>
                  {data.plans.map((plan) => (
                    <td key={plan.id} className="p-4 sm:p-6 text-center">
                      <Link to={plan.ctaHref}>
                        <Button
                          variant={plan.popular ? 'primary' : 'outline'}
                          size="sm"
                          className="w-full"
                        >
                          {plan.ctaText}
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  // --- Default: Variant Simple Cards ---
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {data.plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                'rounded-card border p-8 flex flex-col justify-between transition-all duration-200 relative bg-theme-card',
                plan.popular
                  ? 'border-theme-primary shadow-xl ring-2 ring-theme-primary/30 md:-translate-y-2'
                  : 'border-theme-border hover:shadow-md'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="sm" className="shadow-sm">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-theme-foreground">{plan.name}</h3>
                  <p className="text-xs text-theme-muted-foreground mt-1.5 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-theme-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xs text-theme-muted-foreground">/ {plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 text-xs sm:text-sm pt-4 border-t border-theme-border/60">
                  {plan.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className={cn(
                        'flex items-start gap-2.5',
                        feat.included ? 'text-theme-foreground' : 'text-theme-muted-foreground/50 line-through'
                      )}
                    >
                      {feat.included ? (
                        <Check className="w-4 h-4 text-theme-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-theme-muted-foreground/40 shrink-0 mt-0.5" />
                      )}
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-theme-border/60">
                <Link to={plan.ctaHref} className="block w-full">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
