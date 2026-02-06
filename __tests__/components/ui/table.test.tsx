import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
    TableCaption,
} from '@/components/ui/table';

describe('Table Components', () => {
    // =========================================================================
    // TABLE ROOT
    // =========================================================================
    describe('Table', () => {
        it('should render without crashing', () => {
            render(<Table data-testid="table" />);
            expect(screen.getByTestId('table')).toBeInTheDocument();
        });

        it('should have base table class', () => {
            render(<Table data-testid="table" />);
            expect(screen.getByTestId('table')).toHaveClass('table');
        });

        it('should be wrapped in table-wrapper div', () => {
            render(<Table data-testid="table" />);
            const wrapper = screen.getByTestId('table').parentElement;
            expect(wrapper).toHaveClass('table-wrapper');
        });

        it('should accept additional className', () => {
            render(<Table data-testid="table" className="custom-table" />);
            expect(screen.getByTestId('table')).toHaveClass('custom-table');
        });

        it('should render as table element', () => {
            render(<Table data-testid="table" />);
            expect(screen.getByTestId('table').tagName).toBe('TABLE');
        });
    });

    // =========================================================================
    // TABLE HEADER
    // =========================================================================
    describe('TableHeader', () => {
        it('should render as thead element', () => {
            render(
                <table>
                    <TableHeader data-testid="thead" />
                </table>
            );
            expect(screen.getByTestId('thead').tagName).toBe('THEAD');
        });

        it('should have table__header class', () => {
            render(
                <table>
                    <TableHeader data-testid="thead" />
                </table>
            );
            expect(screen.getByTestId('thead')).toHaveClass('table__header');
        });

        it('should accept additional className', () => {
            render(
                <table>
                    <TableHeader data-testid="thead" className="custom-header" />
                </table>
            );
            expect(screen.getByTestId('thead')).toHaveClass('custom-header');
        });
    });

    // =========================================================================
    // TABLE BODY
    // =========================================================================
    describe('TableBody', () => {
        it('should render as tbody element', () => {
            render(
                <table>
                    <TableBody data-testid="tbody" />
                </table>
            );
            expect(screen.getByTestId('tbody').tagName).toBe('TBODY');
        });

        it('should have table__body class', () => {
            render(
                <table>
                    <TableBody data-testid="tbody" />
                </table>
            );
            expect(screen.getByTestId('tbody')).toHaveClass('table__body');
        });
    });

    // =========================================================================
    // TABLE FOOTER
    // =========================================================================
    describe('TableFooter', () => {
        it('should render as tfoot element', () => {
            render(
                <table>
                    <TableFooter data-testid="tfoot" />
                </table>
            );
            expect(screen.getByTestId('tfoot').tagName).toBe('TFOOT');
        });

        it('should have table__footer class', () => {
            render(
                <table>
                    <TableFooter data-testid="tfoot" />
                </table>
            );
            expect(screen.getByTestId('tfoot')).toHaveClass('table__footer');
        });
    });

    // =========================================================================
    // TABLE ROW
    // =========================================================================
    describe('TableRow', () => {
        it('should render as tr element', () => {
            render(
                <table>
                    <tbody>
                        <TableRow data-testid="row" />
                    </tbody>
                </table>
            );
            expect(screen.getByTestId('row').tagName).toBe('TR');
        });

        it('should have table__row class', () => {
            render(
                <table>
                    <tbody>
                        <TableRow data-testid="row" />
                    </tbody>
                </table>
            );
            expect(screen.getByTestId('row')).toHaveClass('table__row');
        });

        it('should accept additional className', () => {
            render(
                <table>
                    <tbody>
                        <TableRow data-testid="row" className="custom-row" />
                    </tbody>
                </table>
            );
            expect(screen.getByTestId('row')).toHaveClass('custom-row');
        });
    });

    // =========================================================================
    // TABLE HEAD CELL
    // =========================================================================
    describe('TableHead', () => {
        it('should render as th element', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <TableHead data-testid="th">Header</TableHead>
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('th').tagName).toBe('TH');
        });

        it('should have table__head class', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <TableHead data-testid="th">Header</TableHead>
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('th')).toHaveClass('table__head');
        });

        it('should render content', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <TableHead>Name</TableHead>
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByText('Name')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // TABLE CELL
    // =========================================================================
    describe('TableCell', () => {
        it('should render as td element', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <TableCell data-testid="td">Cell</TableCell>
                        </tr>
                    </tbody>
                </table>
            );
            expect(screen.getByTestId('td').tagName).toBe('TD');
        });

        it('should have table__cell class', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <TableCell data-testid="td">Cell</TableCell>
                        </tr>
                    </tbody>
                </table>
            );
            expect(screen.getByTestId('td')).toHaveClass('table__cell');
        });

        it('should render content', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <TableCell>John Doe</TableCell>
                        </tr>
                    </tbody>
                </table>
            );
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // TABLE CAPTION
    // =========================================================================
    describe('TableCaption', () => {
        it('should render as caption element', () => {
            render(
                <table>
                    <TableCaption data-testid="caption">Caption</TableCaption>
                </table>
            );
            expect(screen.getByTestId('caption').tagName).toBe('CAPTION');
        });

        it('should have table__caption class', () => {
            render(
                <table>
                    <TableCaption data-testid="caption">Caption</TableCaption>
                </table>
            );
            expect(screen.getByTestId('caption')).toHaveClass('table__caption');
        });

        it('should render caption text', () => {
            render(
                <table>
                    <TableCaption>User Data Table</TableCaption>
                </table>
            );
            expect(screen.getByText('User Data Table')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // COMPLETE TABLE STRUCTURE
    // =========================================================================
    describe('Complete Table Structure', () => {
        it('should render a complete table with all components', () => {
            render(
                <Table data-testid="table">
                    <TableCaption>User List</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john@example.com</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={2}>Total: 1 user</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            );

            expect(screen.getByTestId('table')).toBeInTheDocument();
            expect(screen.getByText('User List')).toBeInTheDocument();
            expect(screen.getByText('Name')).toBeInTheDocument();
            expect(screen.getByText('Email')).toBeInTheDocument();
            expect(screen.getByText('John Doe')).toBeInTheDocument();
            expect(screen.getByText('john@example.com')).toBeInTheDocument();
            expect(screen.getByText('Total: 1 user')).toBeInTheDocument();
        });
    });
});
