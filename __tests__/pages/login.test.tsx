import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/components/pages/auth/login';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Mock next/image
jest.mock('next/image', () => {
    const MockedImage = ({ src, alt, ...props }: { src: string; alt: string;[key: string]: unknown }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} {...props} />
    );
    MockedImage.displayName = 'MockedImage';
    return MockedImage;
});

// Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: mockPush,
        back: jest.fn(),
        forward: jest.fn(),
    }),
}));

describe('LoginPage Component', () => {
    beforeEach(() => {
        mockPush.mockClear();
    });

    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<LoginPage />);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should render without crashing', () => {
            render(<LoginPage />);
            expect(document.querySelector('.login-form')).toBeInTheDocument();
        });

        it('should render the logo', () => {
            render(<LoginPage />);
            expect(document.querySelector('.login-form__logo')).toBeInTheDocument();
        });

        it('should render email input field', () => {
            render(<LoginPage />);
            expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        });

        it('should render password input field', () => {
            render(<LoginPage />);
            expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        });

        it('should render submit button', () => {
            render(<LoginPage />);
            expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
        });

        it('should render "Forgot PASSWORD?" link', () => {
            render(<LoginPage />);
            expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument();
        });

        it('should render welcome message', () => {
            render(<LoginPage />);
            expect(screen.getByText('Welcome!')).toBeInTheDocument();
        });

        it('should render subtitle', () => {
            render(<LoginPage />);
            expect(screen.getByText('Enter details to login.')).toBeInTheDocument();
        });

        it('should allow typing in email field', () => {
            render(<LoginPage />);
            const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            expect(emailInput.value).toBe('test@example.com');
        });

        it('should allow typing in password field', () => {
            render(<LoginPage />);
            const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
            fireEvent.change(passwordInput, { target: { value: 'password123' } });
            expect(passwordInput.value).toBe('password123');
        });

        it('should toggle password visibility', () => {
            render(<LoginPage />);
            const passwordInput = screen.getByPlaceholderText('Password');
            const showButton = screen.getByText('SHOW');

            expect(passwordInput).toHaveAttribute('type', 'password');
            fireEvent.click(showButton);
            expect(passwordInput).toHaveAttribute('type', 'text');
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should have password field hidden by default', () => {
            render(<LoginPage />);
            const passwordInput = screen.getByPlaceholderText('Password');
            expect(passwordInput).toHaveAttribute('type', 'password');
        });

        it('should toggle back to password type when HIDE is clicked', () => {
            render(<LoginPage />);
            const passwordInput = screen.getByPlaceholderText('Password');
            const toggleButton = screen.getByText('SHOW');

            // Show password
            fireEvent.click(toggleButton);
            expect(passwordInput).toHaveAttribute('type', 'text');

            // Hide password
            const hideButton = screen.getByText('HIDE');
            fireEvent.click(hideButton);
            expect(passwordInput).toHaveAttribute('type', 'password');
        });

        it('should render email field with empty value initially', () => {
            render(<LoginPage />);
            const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
            expect(emailInput.value).toBe('');
        });

        it('should render password field with empty value initially', () => {
            render(<LoginPage />);
            const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
            expect(passwordInput.value).toBe('');
        });

        it('should not have any error messages initially', () => {
            render(<LoginPage />);
            expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
        });
    });

    // =========================================================================
    // ACCESSIBILITY
    // =========================================================================
    describe('Accessibility', () => {
        it('should have accessible email input', () => {
            render(<LoginPage />);
            expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        });

        it('should have accessible password input', () => {
            render(<LoginPage />);
            expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        });

        it('should have accessible submit button', () => {
            render(<LoginPage />);
            expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
        });

        it('should have heading element', () => {
            render(<LoginPage />);
            expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument();
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have login form container', () => {
            render(<LoginPage />);
            expect(document.querySelector('.login-form')).toBeInTheDocument();
        });

        it('should have form element', () => {
            render(<LoginPage />);
            expect(document.querySelector('.login-form__form')).toBeInTheDocument();
        });

        it('should have header section', () => {
            render(<LoginPage />);
            expect(document.querySelector('.login-form__header')).toBeInTheDocument();
        });

        it('should have password toggle button', () => {
            render(<LoginPage />);
            expect(document.querySelector('.password-input__toggle')).toBeInTheDocument();
        });
    });
});
