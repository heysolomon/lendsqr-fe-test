import React from 'react';
import { render, screen } from '@testing-library/react';
import { Separator } from '@/components/ui/separator';

describe('Separator Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<Separator data-testid="separator" />);
            expect(screen.getByTestId('separator')).toBeInTheDocument();
        });

        it('should have base separator class', () => {
            render(<Separator data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveClass('separator');
        });

        it('should be horizontal by default', () => {
            render(<Separator data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveClass('separator--horizontal');
        });

        it('should accept vertical orientation', () => {
            render(<Separator orientation="vertical" data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveClass('separator--vertical');
        });

        it('should not have horizontal class when vertical', () => {
            render(<Separator orientation="vertical" data-testid="separator" />);
            expect(screen.getByTestId('separator')).not.toHaveClass('separator--horizontal');
        });

        it('should accept additional className', () => {
            render(<Separator className="custom-class" data-testid="separator" />);
            const separator = screen.getByTestId('separator');
            expect(separator).toHaveClass('separator');
            expect(separator).toHaveClass('custom-class');
        });

        it('should be decorative by default', () => {
            render(<Separator data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
        });

        it('should pass through orientation attribute', () => {
            render(<Separator orientation="horizontal" data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
        });

        it('should pass through vertical orientation attribute', () => {
            render(<Separator orientation="vertical" data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'vertical');
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not have vertical class when horizontal', () => {
            render(<Separator orientation="horizontal" data-testid="separator" />);
            expect(screen.getByTestId('separator')).not.toHaveClass('separator--vertical');
        });

        it('should be empty (no children)', () => {
            render(<Separator data-testid="separator" />);
            expect(screen.getByTestId('separator')).toBeEmptyDOMElement();
        });
    });

    // =========================================================================
    // ACCESSIBILITY
    // =========================================================================
    describe('Accessibility', () => {
        it('should have separator role when not decorative', () => {
            render(<Separator decorative={false} data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveAttribute('role', 'separator');
        });

        it('should have none role when decorative', () => {
            render(<Separator decorative={true} data-testid="separator" />);
            expect(screen.getByTestId('separator')).toHaveAttribute('role', 'none');
        });
    });

    // =========================================================================
    // USE CASES
    // =========================================================================
    describe('Use Cases', () => {
        it('should correctly style horizontal separator', () => {
            render(<Separator data-testid="separator" />);
            const separator = screen.getByTestId('separator');
            expect(separator).toHaveClass('separator');
            expect(separator).toHaveClass('separator--horizontal');
        });

        it('should correctly style vertical separator', () => {
            render(<Separator orientation="vertical" data-testid="separator" />);
            const separator = screen.getByTestId('separator');
            expect(separator).toHaveClass('separator');
            expect(separator).toHaveClass('separator--vertical');
        });
    });
});
