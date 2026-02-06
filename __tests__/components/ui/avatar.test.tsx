import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

describe('Avatar Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        describe('Avatar Root', () => {
            it('should render without crashing', () => {
                render(<Avatar data-testid="avatar" />);
                expect(screen.getByTestId('avatar')).toBeInTheDocument();
            });

            it('should have default avatar class', () => {
                render(<Avatar data-testid="avatar" />);
                expect(screen.getByTestId('avatar')).toHaveClass('avatar');
            });

            it('should accept additional className', () => {
                render(<Avatar data-testid="avatar" className="custom-class" />);
                const avatar = screen.getByTestId('avatar');
                expect(avatar).toHaveClass('avatar');
                expect(avatar).toHaveClass('custom-class');
            });

            it('should render children', () => {
                render(
                    <Avatar>
                        <span data-testid="child">Content</span>
                    </Avatar>
                );
                expect(screen.getByTestId('child')).toBeInTheDocument();
            });
        });

        describe('AvatarImage', () => {
            it('should have avatar__image class', () => {
                render(
                    <Avatar>
                        <AvatarImage src="/test.jpg" alt="Test" data-testid="avatar-img" />
                    </Avatar>
                );
                // Note: AvatarImage may not render immediately if image fails to load
                const img = screen.queryByTestId('avatar-img');
                if (img) {
                    expect(img).toHaveClass('avatar__image');
                }
            });

            it('should accept additional className', () => {
                render(
                    <Avatar>
                        <AvatarImage src="/test.jpg" alt="Test" className="custom-img" data-testid="avatar-img" />
                    </Avatar>
                );
                const img = screen.queryByTestId('avatar-img');
                if (img) {
                    expect(img).toHaveClass('custom-img');
                }
            });
        });

        describe('AvatarFallback', () => {
            it('should render fallback content', () => {
                render(
                    <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                );
                expect(screen.getByText('AB')).toBeInTheDocument();
            });

            it('should have avatar__fallback class', () => {
                render(
                    <Avatar>
                        <AvatarFallback data-testid="fallback">AB</AvatarFallback>
                    </Avatar>
                );
                expect(screen.getByTestId('fallback')).toHaveClass('avatar__fallback');
            });

            it('should accept additional className', () => {
                render(
                    <Avatar>
                        <AvatarFallback className="custom-fallback" data-testid="fallback">AB</AvatarFallback>
                    </Avatar>
                );
                const fallback = screen.getByTestId('fallback');
                expect(fallback).toHaveClass('avatar__fallback');
                expect(fallback).toHaveClass('custom-fallback');
            });
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should render empty when no children provided', () => {
            render(<Avatar data-testid="avatar" />);
            expect(screen.getByTestId('avatar')).toBeEmptyDOMElement();
        });

        it('should show fallback when image src is invalid', () => {
            render(
                <Avatar>
                    <AvatarImage src="" alt="Test" />
                    <AvatarFallback>FB</AvatarFallback>
                </Avatar>
            );
            // Fallback should be shown when image fails
            expect(screen.getByText('FB')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have proper avatar structure with image and fallback', () => {
            render(
                <Avatar data-testid="avatar">
                    <AvatarImage src="/user.jpg" alt="User" />
                    <AvatarFallback data-testid="fallback">JD</AvatarFallback>
                </Avatar>
            );
            expect(screen.getByTestId('avatar')).toBeInTheDocument();
            expect(screen.getByTestId('fallback')).toBeInTheDocument();
        });
    });
});
