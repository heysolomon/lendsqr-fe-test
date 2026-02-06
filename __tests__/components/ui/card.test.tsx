import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

describe('Card Components', () => {
    // =========================================================================
    // CARD ROOT
    // =========================================================================
    describe('Card', () => {
        describe('Positive Scenarios', () => {
            it('should render without crashing', () => {
                render(<Card data-testid="card" />);
                expect(screen.getByTestId('card')).toBeInTheDocument();
            });

            it('should have default card class', () => {
                render(<Card data-testid="card" />);
                expect(screen.getByTestId('card')).toHaveClass('card');
            });

            it('should accept additional className', () => {
                render(<Card data-testid="card" className="custom-class" />);
                const card = screen.getByTestId('card');
                expect(card).toHaveClass('card');
                expect(card).toHaveClass('custom-class');
            });

            it('should render children', () => {
                render(
                    <Card>
                        <span data-testid="child">Content</span>
                    </Card>
                );
                expect(screen.getByTestId('child')).toBeInTheDocument();
            });

            it('should render as a div element', () => {
                render(<Card data-testid="card" />);
                expect(screen.getByTestId('card').tagName).toBe('DIV');
            });
        });
    });

    // =========================================================================
    // CARD HEADER
    // =========================================================================
    describe('CardHeader', () => {
        it('should render with card__header class', () => {
            render(<CardHeader data-testid="header" />);
            expect(screen.getByTestId('header')).toHaveClass('card__header');
        });

        it('should accept additional className', () => {
            render(<CardHeader data-testid="header" className="custom-header" />);
            expect(screen.getByTestId('header')).toHaveClass('custom-header');
        });

        it('should render children', () => {
            render(
                <CardHeader>
                    <span>Header Content</span>
                </CardHeader>
            );
            expect(screen.getByText('Header Content')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // CARD TITLE
    // =========================================================================
    describe('CardTitle', () => {
        it('should render with card__title class', () => {
            render(<CardTitle data-testid="title">Title</CardTitle>);
            expect(screen.getByTestId('title')).toHaveClass('card__title');
        });

        it('should render as h3 element', () => {
            render(<CardTitle data-testid="title">Title</CardTitle>);
            expect(screen.getByTestId('title').tagName).toBe('H3');
        });

        it('should render title text', () => {
            render(<CardTitle>My Title</CardTitle>);
            expect(screen.getByText('My Title')).toBeInTheDocument();
        });

        it('should accept additional className', () => {
            render(<CardTitle data-testid="title" className="custom-title">Title</CardTitle>);
            expect(screen.getByTestId('title')).toHaveClass('custom-title');
        });
    });

    // =========================================================================
    // CARD DESCRIPTION
    // =========================================================================
    describe('CardDescription', () => {
        it('should render with card__description class', () => {
            render(<CardDescription data-testid="desc">Description</CardDescription>);
            expect(screen.getByTestId('desc')).toHaveClass('card__description');
        });

        it('should render as p element', () => {
            render(<CardDescription data-testid="desc">Description</CardDescription>);
            expect(screen.getByTestId('desc').tagName).toBe('P');
        });

        it('should render description text', () => {
            render(<CardDescription>My Description</CardDescription>);
            expect(screen.getByText('My Description')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // CARD CONTENT
    // =========================================================================
    describe('CardContent', () => {
        it('should render with card__content class', () => {
            render(<CardContent data-testid="content" />);
            expect(screen.getByTestId('content')).toHaveClass('card__content');
        });

        it('should render children', () => {
            render(
                <CardContent>
                    <span>Content here</span>
                </CardContent>
            );
            expect(screen.getByText('Content here')).toBeInTheDocument();
        });

        it('should accept additional className', () => {
            render(<CardContent data-testid="content" className="custom-content" />);
            expect(screen.getByTestId('content')).toHaveClass('custom-content');
        });
    });

    // =========================================================================
    // CARD FOOTER
    // =========================================================================
    describe('CardFooter', () => {
        it('should render with card__footer class', () => {
            render(<CardFooter data-testid="footer" />);
            expect(screen.getByTestId('footer')).toHaveClass('card__footer');
        });

        it('should render children', () => {
            render(
                <CardFooter>
                    <button>Action</button>
                </CardFooter>
            );
            expect(screen.getByRole('button')).toBeInTheDocument();
        });

        it('should accept additional className', () => {
            render(<CardFooter data-testid="footer" className="custom-footer" />);
            expect(screen.getByTestId('footer')).toHaveClass('custom-footer');
        });
    });

    // =========================================================================
    // COMPLETE CARD STRUCTURE
    // =========================================================================
    describe('Complete Card Structure', () => {
        it('should render a complete card with all subcomponents', () => {
            render(
                <Card data-testid="card">
                    <CardHeader data-testid="header">
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent data-testid="content">
                        <p>Card content goes here</p>
                    </CardContent>
                    <CardFooter data-testid="footer">
                        <button>Save</button>
                    </CardFooter>
                </Card>
            );

            expect(screen.getByTestId('card')).toBeInTheDocument();
            expect(screen.getByTestId('header')).toBeInTheDocument();
            expect(screen.getByText('Card Title')).toBeInTheDocument();
            expect(screen.getByText('Card Description')).toBeInTheDocument();
            expect(screen.getByTestId('content')).toBeInTheDocument();
            expect(screen.getByText('Card content goes here')).toBeInTheDocument();
            expect(screen.getByTestId('footer')).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
        });
    });
});
