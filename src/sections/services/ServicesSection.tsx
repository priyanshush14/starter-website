import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { ServicesData, ServicesVariant } from '../../types/sections';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { DynamicIcon } from '../../lib/icons';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface ServicesSectionProps {
  variant?: ServicesVariant | string;
  data?: Partial<ServicesData>;
  className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  variant = 'cards',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: ServicesData = { ...preset.data.services, ...customData };

  // --- Variant 1: Icon Grid ---
  if (variant === 'icon-grid') {
    return (
      <section className={cn('py-16 sm:py-24 bg-theme-muted/30', className)}>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.items.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-card bg-theme-background border border-theme-border hover:border-theme-primary/50 transition-all duration-200 hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-button bg-theme-primary/10 text-theme-primary flex items-center justify-center mb-4 group-hover:bg-theme-primary group-hover:text-white transition-colors">
                  <DynamicIcon name={item.iconName} size={24} />
                </div>
                <h3 className="text-lg font-bold text-theme-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-theme-muted-foreground leading-relaxed">{item.description}</p>
                {item.features && item.features.length > 0 && (
                  <ul className="mt-4 pt-4 border-t border-theme-border/60 space-y-1.5 text-xs text-theme-muted-foreground">
                    {item.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- Variant 2: Alternating Rows ---
  if (variant === 'alternating') {
    return (
      <section className={cn('py-16 sm:py-24 space-y-16', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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

          <div className="space-y-12">
            {data.items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={cn(
                    'p-8 lg:p-12 rounded-card border border-theme-border bg-theme-card/60 flex flex-col lg:flex-row items-center gap-8 lg:gap-12',
                    !isEven && 'lg:flex-row-reverse'
                  )}
                >
                  <div className="w-full lg:w-1/3 flex items-center justify-center p-8 bg-theme-muted rounded-card border border-theme-border/60">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto rounded-full bg-theme-primary text-white flex items-center justify-center shadow-lg">
                        <DynamicIcon name={item.iconName} size={32} />
                      </div>
                      <div className="text-xs uppercase font-bold tracking-wider text-theme-muted-foreground">
                        Phase 0{idx + 1}
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3 space-y-4 text-left">
                    {item.popular && <Badge variant="accent">Signature Capability</Badge>}
                    <h3 className="text-2xl font-bold text-theme-foreground">{item.title}</h3>
                    <p className="text-base text-theme-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.features && item.features.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm text-theme-foreground">
                            <Check className="w-4 h-4 text-theme-primary shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-theme-primary hover:underline"
                      >
                        Inquire about this service <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => (
            <Card
              key={item.id}
              hoverEffect
              className={cn(
                'flex flex-col justify-between relative',
                item.popular && 'border-theme-primary ring-1 ring-theme-primary/30'
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-button bg-theme-primary/10 text-theme-primary flex items-center justify-center">
                    <DynamicIcon name={item.iconName} size={24} />
                  </div>
                  {item.popular && (
                    <Badge variant="accent" size="sm">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="pt-2">{item.description}</CardDescription>
              </CardHeader>

              {item.features && item.features.length > 0 && (
                <CardContent className="mt-auto">
                  <ul className="space-y-2 text-xs text-theme-muted-foreground pt-4 border-t border-theme-border/60">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-theme-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
