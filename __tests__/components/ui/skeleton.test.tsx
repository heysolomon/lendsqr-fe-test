import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '@/components/ui/skeleton';

describe('Skeleton Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<Skeleton data-testid="skeleton" />);
            expect(screen.getByTestId('skeleton')).toBeInTheDocument();
        });

        it('should have the skeleton class', () => {
            render(<Skeleton data-testid="skeleton" />);
            expect(screen.getByTestId('skeleton')).toHaveClass('skeleton');
        });

        it('should accept additional className', () => {
            render(<Skeleton data-testid="skeleton" className="custom-class" />);
            const skeleton = screen.getByTestId('skeleton');
            expect(skeleton).toHaveClass('skeleton');
            expect(skeleton).toHaveClass('custom-class');
        });

        it('should accept skeleton modifier classes', () => {
            render(<Skeleton data-testid="skeleton" className="skeleton--circle" />);
            expect(screen.getByTestId('skeleton')).toHaveClass('skeleton--circle');
        });

        it('should pass through HTML attributes', () => {
            render(<Skeleton data-testid="skeleton" id="my-skeleton" aria-label="Loading" />);
            const skeleton = screen.getByTestId('skeleton');
            expect(skeleton).toHaveAttribute('id', 'my-skeleton');
            expect(skeleton).toHaveAttribute('aria-label', 'Loading');
        });

        it('should render as a div element', () => {
            render(<Skeleton data-testid="skeleton" />);
            const skeleton = screen.getByTestId('skeleton');
            expect(skeleton.tagName).toBe('DIV');
        });

        it('should accept style prop', () => {
            render(<Skeleton data-testid="skeleton" style={{ width: '100px', height: '20px' }} />);
            const skeleton = screen.getByTestId('skeleton');
            expect(skeleton).toHaveStyle({ width: '100px', height: '20px' });
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not have any text content by default', () => {
            render(<Skeleton data-testid="skeleton" />);
            expect(screen.getByTestId('skeleton')).toBeEmptyDOMElement();
        });

        it('should not render children (skeleton is self-closing)', () => {
            // Skeleton is designed to be an empty placeholder
            render(<Skeleton data-testid="skeleton" />);
            const skeleton = screen.getByTestId('skeleton');
            expect(skeleton.childNodes.length).toBe(0);
        });

        it('should not have role by default', () => {
            render(<Skeleton data-testid="skeleton" />);
            expect(screen.getByTestId('skeleton')).not.toHaveAttribute('role');
        });
    });

    // =========================================================================
    // ACCESSIBILITY
    // =========================================================================
    describe('Accessibility', () => {
        it('should be able to have aria-hidden for screen readers', () => {
            render(<Skeleton data-testid="skeleton" aria-hidden="true" />);
            expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
        });

        it('should support role attribute', () => {
            render(<Skeleton data-testid="skeleton" role="presentation" />);
            expect(screen.getByTestId('skeleton')).toHaveAttribute('role', 'presentation');
        });
    });
});
