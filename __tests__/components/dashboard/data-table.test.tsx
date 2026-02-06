import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataTable } from '@/components/pages/dashboard/users/user-data-table/data-table';
import { ColumnDef } from '@tanstack/react-table';

// Simple test data type
interface TestData {
    id: string;
    name: string;
    email: string;
}

// Simple columns for testing
const testColumns: ColumnDef<TestData>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
];

const testData: TestData[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Bob Wilson', email: 'bob@example.com' },
];

describe('DataTable Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(document.querySelector('.data-table-wrapper')).toBeInTheDocument();
        });

        it('should render the table element', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(document.querySelector('.data-table')).toBeInTheDocument();
        });

        it('should render column headers', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(screen.getByText('ID')).toBeInTheDocument();
            expect(screen.getByText('Name')).toBeInTheDocument();
            expect(screen.getByText('Email')).toBeInTheDocument();
        });

        it('should render data rows', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(screen.getByText('John Doe')).toBeInTheDocument();
            expect(screen.getByText('Jane Smith')).toBeInTheDocument();
            expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
        });

        it('should render correct number of rows', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            const rows = document.querySelectorAll('.data-table__body-row');
            expect(rows.length).toBe(3);
        });

        it('should render pagination component', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(document.querySelector('.data-table-pagination')).toBeInTheDocument();
        });

        it('should render email data correctly', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(screen.getByText('john@example.com')).toBeInTheDocument();
            expect(screen.getByText('jane@example.com')).toBeInTheDocument();
        });

        it('should render header row', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(document.querySelector('.data-table__header-row')).toBeInTheDocument();
        });

        it('should render table head cells', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            const headCells = document.querySelectorAll('.data-table__head-cell');
            expect(headCells.length).toBe(3);
        });

        it('should render table body cells', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            const bodyCells = document.querySelectorAll('.data-table__body-cell');
            expect(bodyCells.length).toBe(9); // 3 rows x 3 columns
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should display "No records." when data is empty', () => {
            render(<DataTable columns={testColumns} data={[]} />);
            expect(screen.getByText('No records.')).toBeInTheDocument();
        });

        it('should still render headers when data is empty', () => {
            render(<DataTable columns={testColumns} data={[]} />);
            expect(screen.getByText('ID')).toBeInTheDocument();
            expect(screen.getByText('Name')).toBeInTheDocument();
        });

        it('should render empty cell with correct colspan when no data', () => {
            render(<DataTable columns={testColumns} data={[]} />);
            const emptyCell = document.querySelector('.data-table__empty-cell');
            expect(emptyCell).toBeInTheDocument();
            expect(emptyCell).toHaveAttribute('colspan', '3');
        });

        it('should not render body rows when data is empty', () => {
            render(<DataTable columns={testColumns} data={[]} />);
            const bodyRows = document.querySelectorAll('.data-table__body-row');
            expect(bodyRows.length).toBe(0);
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have wrapper container', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(document.querySelector('.data-table-wrapper')).toBeInTheDocument();
        });

        it('should have table inside wrapper', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            const wrapper = document.querySelector('.data-table-wrapper');
            expect(wrapper?.querySelector('.data-table')).toBeInTheDocument();
        });

        it('should have pagination outside wrapper', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            const pagination = document.querySelector('.data-table-pagination');
            const wrapper = document.querySelector('.data-table-wrapper');
            expect(pagination?.parentElement).toBe(wrapper?.parentElement);
        });
    });

    // =========================================================================
    // PAGINATION INTEGRATION
    // =========================================================================
    describe('Pagination Integration', () => {
        it('should render pagination with navigation buttons', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            const navButtons = document.querySelectorAll('.data-table-pagination__nav-btn');
            expect(navButtons.length).toBe(2);
        });

        it('should render "Showing" text in pagination', () => {
            render(<DataTable columns={testColumns} data={testData} />);
            expect(screen.getByText('Showing')).toBeInTheDocument();
        });
    });
});
