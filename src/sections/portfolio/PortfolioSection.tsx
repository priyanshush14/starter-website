import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioData, PortfolioVariant } from '../../types/sections';
import { Badge } from '../../components/ui/Badge';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface PortfolioSectionProps {
  variant?: PortfolioVariant | string;
  data?: Partial<PortfolioData>;
  className?: string;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  variant = 'case-studies',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: PortfolioData = { ...preset.data.portfolio, ...customData };

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = data.categories || ['All'];
  const filteredItems =
    activeCategory === 'All'
      ? data.items
      : data.items.filter((item) => item.category === activeCategory);

  // --- Variant 1: Case Studies ---
  if (variant === 'case-studies') {
    return (
      <section className={cn('py-16 sm:py-24', className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              {data.badge && <Badge variant="primary">{data.badge}</Badge>}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-foreground">
                {data.title}
              </h2>
              {data.description && (
                <p className="text-base sm:text-lg text-theme-muted-foreground max-w-2xl">
                  {data.description}
                </p>
              )}
            </div>

            {/* Filter buttons */}
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'px-3.5 py-1.5 text-xs font-semibold rounded-button transition-colors',
                      activeCategory === cat
                        ? 'bg-theme-primary text-white'
                        : 'bg-theme-muted text-theme-muted-foreground hover:text-theme-foreground'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-card border border-theme-border bg-theme-card overflow-hidden flex flex-col group hover:shadow-xl hover:border-theme-primary/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-theme-muted">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="default" size="sm" className="bg-black/60 text-white backdrop-blur border-none">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {item.client && (
                      <div className="text-xs font-bold uppercase tracking-wider text-theme-primary mb-1">
                        {item.client} {item.year && `• ${item.year}`}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-theme-foreground group-hover:text-theme-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-theme-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="pt-4 border-t border-theme-border/60 grid grid-cols-2 gap-3 bg-theme-muted/30 p-3 rounded-button">
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-base font-bold text-theme-foreground">{m.value}</div>
                          <div className="text-[11px] text-theme-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-theme-muted text-theme-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- Variant 2: Featured Project ---
  if (variant === 'featured' && data.items.length > 0) {
    const featured = data.items[0];
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

          <div className="rounded-card border border-theme-border overflow-hidden bg-theme-card shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8">
            <div className="lg:col-span-7 rounded-card overflow-hidden aspect-video bg-theme-muted">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 space-y-4 text-left">
              <Badge variant="accent">{featured.category}</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-theme-foreground">
                {featured.title}
              </h3>
              <p className="text-base text-theme-muted-foreground leading-relaxed">
                {featured.description}
              </p>

              {featured.metrics && (
                <div className="grid grid-cols-2 gap-4 py-2 border-y border-theme-border/60">
                  {featured.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl font-bold text-theme-primary">{m.value}</div>
                      <div className="text-xs text-theme-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {featured.link && (
                <a
                  href={featured.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-theme-primary hover:underline pt-2"
                >
                  View full case study <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Default: Variant Grid ---
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

          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-3.5 py-1.5 text-xs font-semibold rounded-button transition-colors',
                    activeCategory === cat
                      ? 'bg-theme-primary text-white'
                      : 'bg-theme-muted text-theme-muted-foreground hover:text-theme-foreground'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-card border border-theme-border overflow-hidden bg-theme-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-theme-muted">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-theme-primary">{item.category}</span>
                  {item.year && <span className="text-xs text-theme-muted-foreground">{item.year}</span>}
                </div>
                <h3 className="font-bold text-lg text-theme-foreground">{item.title}</h3>
                <p className="text-xs text-theme-muted-foreground line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
