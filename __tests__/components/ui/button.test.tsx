import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<Button>Click me</Button>);
            expect(screen.getByRole('button')).toBeInTheDocument();
        });

        it('should render with text content', () => {
            render(<Button>Click me</Button>);
            expect(screen.getByText('Click me')).toBeInTheDocument();
        });

        it('should have default btn class', () => {
            render(<Button>Click</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn');
        });

        it('should apply default variant class', () => {
            render(<Button>Click</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--default');
        });

        it('should apply default size class', () => {
            render(<Button>Click</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--md');
        });

        it('should apply destructive variant', () => {
            render(<Button variant="destructive">Delete</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--destructive');
        });

        it('should apply outline variant', () => {
            render(<Button variant="outline">Outline</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--outline');
        });

        it('should apply secondary variant', () => {
            render(<Button variant="secondary">Secondary</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--secondary');
        });

        it('should apply ghost variant', () => {
            render(<Button variant="ghost">Ghost</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--ghost');
        });

        it('should apply link variant', () => {
            render(<Button variant="link">Link</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--link');
        });

        it('should apply small size', () => {
            render(<Button size="sm">Small</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--sm');
        });

        it('should apply large size', () => {
            render(<Button size="lg">Large</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--lg');
        });

        it('should apply icon size', () => {
            render(<Button size="icon">🔍</Button>);
            expect(screen.getByRole('button')).toHaveClass('btn--icon');
        });

        it('should accept additional className', () => {
            render(<Button className="custom-class">Click</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('btn');
            expect(button).toHaveClass('custom-class');
        });

        it('should handle onClick event', () => {
            const handleClick = jest.fn();
            render(<Button onClick={handleClick}>Click</Button>);
            fireEvent.click(screen.getByRole('button'));
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('should be disabled when disabled prop is true', () => {
            render(<Button disabled>Disabled</Button>);
            expect(screen.getByRole('button')).toBeDisabled();
        });

        it('should accept type attribute', () => {
            render(<Button type="submit">Submit</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
        });

        it('should render as child element when asChild is true', () => {
            render(
                <Button asChild>
                    <a href="/link">Link Button</a>
                </Button>
            );
            expect(screen.getByRole('link')).toBeInTheDocument();
            expect(screen.getByRole('link')).toHaveClass('btn');
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not trigger onClick when disabled', () => {
            const handleClick = jest.fn();
            render(<Button disabled onClick={handleClick}>Disabled</Button>);
            fireEvent.click(screen.getByRole('button'));
            expect(handleClick).not.toHaveBeenCalled();
        });

        it('should not have button role when rendered as link with asChild', () => {
            render(
                <Button asChild>
                    <a href="/link">Link</a>
                </Button>
            );
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
        });
    });

    // =========================================================================
    // ACCESSIBILITY
    // =========================================================================
    describe('Accessibility', () => {
        it('should be focusable', () => {
            render(<Button>Focus me</Button>);
            const button = screen.getByRole('button');
            button.focus();
            expect(button).toHaveFocus();
        });

        it('should accept aria-label', () => {
            render(<Button aria-label="Close dialog">X</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
        });

        it('should accept aria-disabled', () => {
            render(<Button aria-disabled="true">Disabled</Button>);
            expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
        });
    });
});
