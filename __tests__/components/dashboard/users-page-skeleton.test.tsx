import React from 'react';
import { render, screen } from '@testing-library/react';
import { UsersPageSkeleton } from '@/components/pages/dashboard/users/users-page-skeleton';

describe('UsersPageSkeleton Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<UsersPageSkeleton />);
            expect(document.querySelector('.users-page')).toBeInTheDocument();
        });

        it('should render title skeleton', () => {
            render(<UsersPageSkeleton />);
            expect(document.querySelector('.users-page-skeleton__title')).toBeInTheDocument();
        });

        it('should render exactly 4 stat card skeletons', () => {
            render(<UsersPageSkeleton />);
            const cards = document.querySelectorAll('.users-page-skeleton__card');
            expect(cards.length).toBe(4);
        });

        it('should render card with icon, label, and value skeletons', () => {
            render(<UsersPageSkeleton />);
            const cardIcons = document.querySelectorAll('.users-page-skeleton__card-icon');
            const cardLabels = document.querySelectorAll('.users-page-skeleton__card-label');
            const cardValues = document.querySelectorAll('.users-page-skeleton__card-value');

            expect(cardIcons.length).toBe(4);
            expect(cardLabels.length).toBe(4);
            expect(cardValues.length).toBe(4);
        });

        it('should render table skeleton', () => {
            render(<UsersPageSkeleton />);
            expect(document.querySelector('.users-page-skeleton__table')).toBeInTheDocument();
        });

        it('should render table header with 6 columns', () => {
            render(<UsersPageSkeleton />);
            const headerCells = document.querySelectorAll('.users-page-skeleton__table-header-cell');
            expect(headerCells.length).toBe(6);
        });

        it('should render 10 table rows', () => {
            render(<UsersPageSkeleton />);
            const rows = document.querySelectorAll('.users-page-skeleton__table-row');
            expect(rows.length).toBe(10);
        });

        it('should render 6 cells per table row', () => {
            render(<UsersPageSkeleton />);
            const rows = document.querySelectorAll('.users-page-skeleton__table-row');
            rows.forEach((row) => {
                const cells = row.querySelectorAll('.users-page-skeleton__table-cell');
                expect(cells.length).toBe(6);
            });
        });

        it('should use stats grid container', () => {
            render(<UsersPageSkeleton />);
            expect(document.querySelector('.users-stats-grid')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not render any actual user data', () => {
            render(<UsersPageSkeleton />);
            // Check that no real content is rendered
            expect(screen.queryByText(/Users/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/Active/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/@/)).not.toBeInTheDocument();
        });

        it('should not have any interactive elements', () => {
            render(<UsersPageSkeleton />);
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
            expect(screen.queryByRole('link')).not.toBeInTheDocument();
        });

        it('should not have any input elements', () => {
            render(<UsersPageSkeleton />);
            expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        });

        it('should not render pagination', () => {
            render(<UsersPageSkeleton />);
            expect(screen.queryByText(/Next/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/Previous/i)).not.toBeInTheDocument();
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have cards with circle modifier for icons', () => {
            render(<UsersPageSkeleton />);
            const circleIcons = document.querySelectorAll('.skeleton--circle');
            expect(circleIcons.length).toBeGreaterThan(0);
        });

        it('should maintain proper component hierarchy', () => {
            render(<UsersPageSkeleton />);
            const page = document.querySelector('.users-page');
            const statsGrid = page?.querySelector('.users-stats-grid');
            const table = page?.querySelector('.users-page-skeleton__table');

            expect(statsGrid).toBeInTheDocument();
            expect(table).toBeInTheDocument();
        });
    });
});
