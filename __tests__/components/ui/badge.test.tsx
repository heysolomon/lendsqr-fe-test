import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/ui/badge';

describe('Badge Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<Badge>Status</Badge>);
            expect(screen.getByText('Status')).toBeInTheDocument();
        });

        it('should have default badge class', () => {
            render(<Badge data-testid="badge">Status</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge');
        });

        it('should apply default variant class', () => {
            render(<Badge data-testid="badge">Status</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--default');
        });

        it('should apply secondary variant', () => {
            render(<Badge variant="secondary" data-testid="badge">Secondary</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--secondary');
        });

        it('should apply destructive variant', () => {
            render(<Badge variant="destructive" data-testid="badge">Destructive</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--destructive');
        });

        it('should apply outline variant', () => {
            render(<Badge variant="outline" data-testid="badge">Outline</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--outline');
        });

        it('should apply active variant', () => {
            render(<Badge variant="active" data-testid="badge">Active</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--active');
        });

        it('should apply pending variant', () => {
            render(<Badge variant="pending" data-testid="badge">Pending</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--pending');
        });

        it('should apply blacklisted variant', () => {
            render(<Badge variant="blacklisted" data-testid="badge">Blacklisted</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--blacklisted');
        });

        it('should apply inactive variant', () => {
            render(<Badge variant="inactive" data-testid="badge">Inactive</Badge>);
            expect(screen.getByTestId('badge')).toHaveClass('badge--inactive');
        });

        it('should accept additional className', () => {
            render(<Badge className="custom-class" data-testid="badge">Status</Badge>);
            const badge = screen.getByTestId('badge');
            expect(badge).toHaveClass('badge');
            expect(badge).toHaveClass('custom-class');
        });

        it('should render as a div element', () => {
            render(<Badge data-testid="badge">Status</Badge>);
            expect(screen.getByTestId('badge').tagName).toBe('DIV');
        });

        it('should pass through HTML attributes', () => {
            render(<Badge id="my-badge" data-testid="badge">Status</Badge>);
            expect(screen.getByTestId('badge')).toHaveAttribute('id', 'my-badge');
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not have any role by default', () => {
            render(<Badge data-testid="badge">Status</Badge>);
            expect(screen.getByTestId('badge')).not.toHaveAttribute('role');
        });

        it('should not be clickable by default', () => {
            render(<Badge data-testid="badge">Status</Badge>);
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
        });
    });

    // =========================================================================
    // STATUS BADGE USE CASES
    // =========================================================================
    describe('Status Badge Use Cases', () => {
        it('should display Active status correctly', () => {
            render(<Badge variant="active">Active</Badge>);
            const badge = screen.getByText('Active');
            expect(badge).toHaveClass('badge--active');
        });

        it('should display Pending status correctly', () => {
            render(<Badge variant="pending">Pending</Badge>);
            const badge = screen.getByText('Pending');
            expect(badge).toHaveClass('badge--pending');
        });

        it('should display Blacklisted status correctly', () => {
            render(<Badge variant="blacklisted">Blacklisted</Badge>);
            const badge = screen.getByText('Blacklisted');
            expect(badge).toHaveClass('badge--blacklisted');
        });

        it('should display Inactive status correctly', () => {
            render(<Badge variant="inactive">Inactive</Badge>);
            const badge = screen.getByText('Inactive');
            expect(badge).toHaveClass('badge--inactive');
        });
    });

    // =========================================================================
    // ACCESSIBILITY
    // =========================================================================
    describe('Accessibility', () => {
        it('should accept role attribute', () => {
            render(<Badge role="status" data-testid="badge">Status</Badge>);
            expect(screen.getByTestId('badge')).toHaveAttribute('role', 'status');
        });

        it('should accept aria-label', () => {
            render(<Badge aria-label="User status: active" data-testid="badge">Active</Badge>);
            expect(screen.getByTestId('badge')).toHaveAttribute('aria-label', 'User status: active');
        });
    });
});
