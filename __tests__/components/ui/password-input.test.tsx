import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from '@/components/ui/password-input';

// Create a mock field object
const createMockField = (value = '') => ({
    name: 'password',
    value,
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
});

describe('PasswordInput Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(document.querySelector('.password-input')).toBeInTheDocument();
        });

        it('should render input field', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(document.querySelector('.password-input__field')).toBeInTheDocument();
        });

        it('should render toggle button', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(screen.getByRole('button')).toBeInTheDocument();
        });

        it('should display SHOW text initially', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(screen.getByText('SHOW')).toBeInTheDocument();
        });

        it('should have password type by default', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(document.querySelector('.password-input__field')).toHaveAttribute('type', 'password');
        });

        it('should accept placeholder', () => {
            const field = createMockField();
            render(<PasswordInput field={field} placeholder="Enter password" />);
            expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
        });

        it('should accept additional className', () => {
            const field = createMockField();
            render(<PasswordInput field={field} className="custom-class" />);
            const input = document.querySelector('.password-input__field');
            expect(input).toHaveClass('password-input__field');
            expect(input).toHaveClass('custom-class');
        });

        it('should toggle to text type when SHOW is clicked', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            fireEvent.click(screen.getByText('SHOW'));
            expect(document.querySelector('.password-input__field')).toHaveAttribute('type', 'text');
        });

        it('should display HIDE text after toggling', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            fireEvent.click(screen.getByText('SHOW'));
            expect(screen.getByText('HIDE')).toBeInTheDocument();
        });

        it('should toggle back to password type when HIDE is clicked', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            fireEvent.click(screen.getByText('SHOW'));
            fireEvent.click(screen.getByText('HIDE'));
            expect(document.querySelector('.password-input__field')).toHaveAttribute('type', 'password');
        });

        it('should have toggle button with type button', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not submit form when toggle button is clicked', () => {
            const field = createMockField();
            const handleSubmit = jest.fn();
            render(
                <form onSubmit={handleSubmit}>
                    <PasswordInput field={field} />
                </form>
            );
            fireEvent.click(screen.getByRole('button'));
            expect(handleSubmit).not.toHaveBeenCalled();
        });

        it('should not have placeholder when not provided', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(document.querySelector('.password-input__field')).not.toHaveAttribute('placeholder');
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have container with password-input class', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(document.querySelector('.password-input')).toBeInTheDocument();
        });

        it('should have input and button as siblings', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            const container = document.querySelector('.password-input');
            expect(container?.children.length).toBe(2);
        });

        it('should have toggle button with password-input__toggle class', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            expect(document.querySelector('.password-input__toggle')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // TOGGLE STATE
    // =========================================================================
    describe('Toggle State', () => {
        it('should toggle multiple times correctly', () => {
            const field = createMockField();
            render(<PasswordInput field={field} />);
            const input = document.querySelector('.password-input__field');

            // Initial state
            expect(input).toHaveAttribute('type', 'password');

            // First toggle
            fireEvent.click(screen.getByText('SHOW'));
            expect(input).toHaveAttribute('type', 'text');

            // Second toggle
            fireEvent.click(screen.getByText('HIDE'));
            expect(input).toHaveAttribute('type', 'password');

            // Third toggle
            fireEvent.click(screen.getByText('SHOW'));
            expect(input).toHaveAttribute('type', 'text');
        });
    });
});
