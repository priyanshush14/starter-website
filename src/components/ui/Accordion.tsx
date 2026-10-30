import React, { createContext, useContext, useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (id: string) => void;
  allowMultiple?: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultOpen = [],
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={cn('divide-y divide-theme-border border-y border-theme-border', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemContextType {
  itemId: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

export interface AccordionItemProps {
  value?: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
  className,
}) => {
  const generatedId = useId();
  const itemId = value || generatedId;
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const isOpen = context.openItems.includes(itemId);

  return (
    <AccordionItemContext.Provider value={{ itemId, isOpen }}>
      <div className={cn('overflow-hidden transition-all duration-200', className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error('AccordionTrigger must be used within an AccordionItem');
  }

  const { itemId, isOpen } = item;
  const contentId = `${itemId}-content`;
  const buttonId = `${itemId}-button`;

  return (
    <button
      id={buttonId}
      type="button"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => accordion.toggleItem(itemId)}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left font-medium text-theme-foreground transition-all hover:text-theme-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      <span className="text-base font-semibold">{children}</span>
      <ChevronDown
        className={cn(
          'w-5 h-5 shrink-0 text-theme-muted-foreground transition-transform duration-200',
          isOpen && 'rotate-180 text-theme-primary'
        )}
      />
    </button>
  );
};

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const item = useContext(AccordionItemContext);

  if (!item) {
    throw new Error('AccordionContent must be used within an AccordionItem');
  }

  const { itemId, isOpen } = item;
  const contentId = `${itemId}-content`;
  const buttonId = `${itemId}-button`;

  if (!isOpen) return null;

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={buttonId}
      className={cn('pb-4 pt-1 text-sm text-theme-muted-foreground leading-relaxed', className)}
      {...props}
    >
      {children}
    </div>
  );
};
