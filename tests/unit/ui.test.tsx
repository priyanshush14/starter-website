import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../src/components/ui/Button';
import { Input } from '../../src/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../../src/components/ui/Card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../src/components/ui/Accordion';

describe('UI Primitives', () => {
  describe('Button', () => {
    it('renders text and handles click events', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);

      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disables button when isLoading is true and prevents clicks', () => {
      const handleClick = vi.fn();
      render(
        <Button isLoading onClick={handleClick}>
          Submit
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders with different variants', () => {
      const { rerender } = render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveClass('bg-theme-primary');

      rerender(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole('button')).toHaveClass('border');
    });
  });

  describe('Input', () => {
    it('renders label, input element, and displays error with aria-invalid', () => {
      render(
        <Input
          label="Your Email"
          placeholder="test@example.com"
          error="Email is required"
        />
      );

      expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
      const input = screen.getByPlaceholderText('test@example.com');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
    });
  });

  describe('Card', () => {
    it('renders composite card structure', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>Card body content</CardContent>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card body content')).toBeInTheDocument();
    });
  });

  describe('Accordion', () => {
    it('collapses and expands items upon interaction', () => {
      render(
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is BridgeTech?</AccordionTrigger>
            <AccordionContent>A modular starter kit.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button', { name: /what is bridgetech\?/i });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByText('A modular starter kit.')).not.toBeInTheDocument();

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('A modular starter kit.')).toBeInTheDocument();

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
