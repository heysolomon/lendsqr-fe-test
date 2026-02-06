import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UsersPage from '@/app/dashboard/users/page';
import * as api from '@/lib/api';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Mock the API
jest.mock('@/lib/api', () => ({
    getUsers: jest.fn(),
}));

// Mock next/image
jest.mock('next/image', () => {
    const MockedImage = ({ src, alt, ...props }: { src: string; alt: string;[key: string]: unknown }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={typeof src === 'object' ? '/mock.png' : src} alt={alt} {...props} />
    );
    MockedImage.displayName = 'MockedImage';
    return MockedImage;
});

const mockUsers = [
    {
        _id: 'user-1',
        index: 0,
        organization: 'Lendsqr',
        username: 'johndoe',
        email: 'john@lendsqr.com',
        phone_number: '+234(123) 456-7890',
        date_joined: 'Jan 1 2024, 10:00 AM',
        status: 'active',
        full_name: 'John Doe',
        bvn: 1234567890,
        gender: 'Male',
        marital_status: 'Single',
        children: 0,
        residence_type: 'Own Apartment',
        education_level: 'B.Sc',
        employment_status: 'Employed',
        sector_of_employment: 'Technology',
        duration_of_employment: '2 years',
        office_email: 'john@work.com',
        monthly_income: '₦200,000 - ₦400,000',
        loan_repayment: '50,000.00',
        twitter: '@johndoe',
        facebook: 'John Doe',
        instagram: '@johndoe',
        guarantors: [],
    },
    {
        _id: 'user-2',
        index: 1,
        organization: 'Irorun',
        username: 'janesmith',
        email: 'jane@irorun.com',
        phone_number: '+234(987) 654-3210',
        date_joined: 'Feb 15 2024, 02:30 PM',
        status: 'pending',
        full_name: 'Jane Smith',
        bvn: 9876543210,
        gender: 'Female',
        marital_status: 'Married',
        children: 2,
        residence_type: 'Rented Apartment',
        education_level: 'M.Sc',
        employment_status: 'Self-employed',
        sector_of_employment: 'Finance',
        duration_of_employment: '5 years',
        office_email: 'jane@work.com',
        monthly_income: '₦500,000 - ₦800,000',
        loan_repayment: '100,000.00',
        twitter: '@janesmith',
        facebook: 'Jane Smith',
        instagram: '@janesmith',
        guarantors: [],
    },
];

describe('Users Page', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render loading skeleton initially', () => {
            (api.getUsers as jest.Mock).mockImplementation(() => new Promise(() => { }));
            render(<UsersPage />);
            expect(document.querySelector('.users-page-skeleton__title')).toBeInTheDocument();
        });

        it('should have no accessibility violations after loading', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            const { container } = render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('Users')).toBeInTheDocument();
            });

            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should display page title after loading', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('Users')).toBeInTheDocument();
            });
        });

        it('should render user info cards after loading', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('users')).toBeInTheDocument();
                expect(screen.getByText('Active Users')).toBeInTheDocument();
                expect(screen.getByText('Users with Loans')).toBeInTheDocument();
                expect(screen.getByText('Users with Savings')).toBeInTheDocument();
            });
        });

        it('should display correct user count', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                // There might be multiple '2's (e.g. valid users count, or data in the table)
                // We check that at least one "2" exists which represents the count
                const countElements = screen.getAllByText('2');
                expect(countElements.length).toBeGreaterThan(0);
            });
        });

        it('should render data table after loading', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(document.querySelector('.data-table-wrapper')).toBeInTheDocument();
            });
        });

        it('should render stats grid', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(document.querySelector('.users-stats-grid')).toBeInTheDocument();
            });
        });

        it('should display static loan users count', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('12,453')).toBeInTheDocument();
            });
        });

        it('should display static savings users count', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('102,453')).toBeInTheDocument();
            });
        });

        it('should call getUsers on mount', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(api.getUsers).toHaveBeenCalledTimes(1);
            });
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should handle empty users array', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue([]);
            render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('Users')).toBeInTheDocument();
                // When users array is empty, the user count cards should show "0"
                const zeroElements = screen.getAllByText('0');
                expect(zeroElements.length).toBeGreaterThan(0);
            });
        });

        it('should handle API error gracefully', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
            (api.getUsers as jest.Mock).mockRejectedValue(new Error('API Error'));
            render(<UsersPage />);

            await waitFor(() => {
                expect(consoleSpy).toHaveBeenCalled();
            });

            consoleSpy.mockRestore();
        });

        it('should still render page structure after error', async () => {
            jest.spyOn(console, 'error').mockImplementation(() => { });
            (api.getUsers as jest.Mock).mockRejectedValue(new Error('API Error'));
            render(<UsersPage />);

            await waitFor(() => {
                expect(screen.getByText('Users')).toBeInTheDocument();
            });
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have users-page container', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(document.querySelector('.users-page')).toBeInTheDocument();
            });
        });

        it('should have page title with correct class', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                expect(document.querySelector('.users-page__title')).toBeInTheDocument();
            });
        });

        it('should render four info cards', async () => {
            (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<UsersPage />);

            await waitFor(() => {
                const cards = document.querySelectorAll('.user-info-card');
                expect(cards.length).toBe(4);
            });
        });
    });
});
