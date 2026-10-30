import React from 'react';
import { FAQData, FAQVariant } from '../../types/sections';
import { Badge } from '../../components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/Accordion';
import { usePreset } from '../../hooks';
import { cn } from '../../lib/utils';

export interface FAQSectionProps {
  variant?: FAQVariant | string;
  data?: Partial<FAQData>;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  variant = 'accordion',
  data: customData,
  className,
}) => {
  const { preset } = usePreset();
  const data: FAQData = { ...preset.data.faq, ...customData };

  // --- Variant 1: Grouped Questions ---
  if (variant === 'grouped') {
    // Group questions by category or split in two columns
    const half = Math.ceil(data.items.length / 2);
    const col1 = data.items.slice(0, half);
    const col2 = data.items.slice(half);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {col1.map((item, idx) => (
                <div key={idx} className="p-6 rounded-card border border-theme-border bg-theme-card space-y-2">
                  <h3 className="font-bold text-base text-theme-foreground">{item.question}</h3>
                  <p className="text-sm text-theme-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {col2.map((item, idx) => (
                <div key={idx} className="p-6 rounded-card border border-theme-border bg-theme-card space-y-2">
                  <h3 className="font-bold text-base text-theme-foreground">{item.question}</h3>
                  <p className="text-sm text-theme-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Default: Variant Accordion ---
  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
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

        <Accordion allowMultiple={false} defaultOpen={['faq-0']}>
          {data.items.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
