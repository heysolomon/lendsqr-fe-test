import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '@/components/ui/input';

describe('Input Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(<Input data-testid="input" />);
            expect(screen.getByTestId('input')).toBeInTheDocument();
        });

        it('should have default input class', () => {
            render(<Input data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveClass('input');
        });

        it('should accept additional className', () => {
            render(<Input data-testid="input" className="custom-class" />);
            const input = screen.getByTestId('input');
            expect(input).toHaveClass('input');
            expect(input).toHaveClass('custom-class');
        });

        it('should accept placeholder', () => {
            render(<Input placeholder="Enter email" />);
            expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
        });

        it('should accept type attribute', () => {
            render(<Input type="email" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
        });

        it('should accept password type', () => {
            render(<Input type="password" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('type', 'password');
        });

        it('should handle value changes', () => {
            render(<Input data-testid="input" />);
            const input = screen.getByTestId('input') as HTMLInputElement;
            fireEvent.change(input, { target: { value: 'test value' } });
            expect(input.value).toBe('test value');
        });

        it('should handle onChange event', () => {
            const handleChange = jest.fn();
            render(<Input data-testid="input" onChange={handleChange} />);
            fireEvent.change(screen.getByTestId('input'), { target: { value: 'test' } });
            expect(handleChange).toHaveBeenCalledTimes(1);
        });

        it('should be disabled when disabled prop is true', () => {
            render(<Input disabled data-testid="input" />);
            expect(screen.getByTestId('input')).toBeDisabled();
        });

        it('should accept name attribute', () => {
            render(<Input name="email" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('name', 'email');
        });

        it('should accept id attribute', () => {
            render(<Input id="email-input" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('id', 'email-input');
        });

        it('should render as input element', () => {
            render(<Input data-testid="input" />);
            expect(screen.getByTestId('input').tagName).toBe('INPUT');
        });

        it('should accept defaultValue', () => {
            render(<Input defaultValue="default" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveValue('default');
        });

        it('should accept maxLength', () => {
            render(<Input maxLength={10} data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('maxLength', '10');
        });

        it('should accept required attribute', () => {
            render(<Input required data-testid="input" />);
            expect(screen.getByTestId('input')).toBeRequired();
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should have empty value initially', () => {
            render(<Input data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveValue('');
        });

        it('should remain disabled and not respond to user input', () => {
            render(<Input disabled data-testid="input" />);
            const input = screen.getByTestId('input') as HTMLInputElement;
            expect(input).toBeDisabled();
            // Note: fireEvent still fires programmatically, but a disabled input
            // cannot receive user input in a real browser
        });

        it('should not have readonly by default', () => {
            render(<Input data-testid="input" />);
            expect(screen.getByTestId('input')).not.toHaveAttribute('readonly');
        });

        it('should be readonly when readOnly prop is true', () => {
            render(<Input readOnly data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('readonly');
        });
    });

    // =========================================================================
    // ACCESSIBILITY
    // =========================================================================
    describe('Accessibility', () => {
        it('should be focusable', () => {
            render(<Input data-testid="input" />);
            const input = screen.getByTestId('input');
            input.focus();
            expect(input).toHaveFocus();
        });

        it('should accept aria-label', () => {
            render(<Input aria-label="Email address" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('aria-label', 'Email address');
        });

        it('should accept aria-describedby', () => {
            render(<Input aria-describedby="email-help" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('aria-describedby', 'email-help');
        });

        it('should accept aria-invalid', () => {
            render(<Input aria-invalid="true" data-testid="input" />);
            expect(screen.getByTestId('input')).toHaveAttribute('aria-invalid', 'true');
        });
    });
});
