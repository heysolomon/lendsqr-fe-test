import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import * as api from '@/lib/api';

// Mock React to include `use` for testing environment
jest.mock('react', () => {
    const originalReact = jest.requireActual('react');
    return {
        ...originalReact,
        use: (promise: Promise<any>) => {
            return promise;
        },
    };
});

// Mock the hooks
const mockUsePathname = jest.fn();
const mockBack = jest.fn();
const mockUseRouter = jest.fn(() => ({
    back: mockBack,
}));

jest.mock('next/navigation', () => ({
    usePathname: () => mockUsePathname(),
    useRouter: () => mockUseRouter(),
}));

// Mock the API
jest.mock('@/lib/api', () => ({
    getUserByUsername: jest.fn(),
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

// Import after mocks
import UserProfileLayout from '@/app/dashboard/users/[user_profile]/layout';

const mockUser = {
    _id: 'test-user-123',
    index: 0,
    organization: 'Lendsqr',
    username: 'graceeffiom',
    email: 'grace@lendsqr.com',
    phone_number: '+234(789) 123-4567',
    date_joined: 'May 15, 2020, 10:00 AM',
    status: 'active',
    full_name: 'Grace Effiom',
    bvn: 1234567890,
    gender: 'Female',
    marital_status: 'Single',
    children: 0,
    residence_type: "Parent's Apartment",
    education_level: 'B.Sc',
    employment_status: 'Employed',
    sector_of_employment: 'FinTech',
    duration_of_employment: '2 years',
    office_email: 'grace@lendsqr.com',
    monthly_income: '₦200,000.00 - ₦400,000.00',
    loan_repayment: '40,000',
    twitter: '@grace_effiom',
    facebook: 'Grace Effiom',
    instagram: '@grace_effiom',
    guarantors: [],
};

// We pass a plain object as params for the test, casting it to any/Promise to satisfy TS.
// This works because our mocked `use` simply returns it.
const mockParams = { user_profile: 'graceeffiom' } as unknown as Promise<{ user_profile: string }>;

describe('User Profile Layout', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockUsePathname.mockReturnValue('/dashboard/users/graceeffiom');
    });

    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render loading skeleton initially', () => {
            (api.getUserByUsername as jest.Mock).mockImplementation(() => new Promise(() => { }));
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );
            expect(document.querySelector('.user-profile-skeleton__title')).toBeInTheDocument();
        });

        it('should display User Details title after loading', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('User Details')).toBeInTheDocument();
            });
        });

        it('should display Back to Users button', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('Back to Users')).toBeInTheDocument();
            });
        });

        it('should display Blacklist User button', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('Blacklist User')).toBeInTheDocument();
            });
        });

        it('should display Activate User button', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('Activate User')).toBeInTheDocument();
            });
        });

        it('should display user full name', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('Grace Effiom')).toBeInTheDocument();
            });
        });

        it('should display user ID', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('test-user-123')).toBeInTheDocument();
            });
        });

        it('should display User\'s Tier label', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText("User’s Tier")).toBeInTheDocument();
            });
        });

        it('should display navigation tabs', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('General Details')).toBeInTheDocument();
                expect(screen.getByText('Documents')).toBeInTheDocument();
                expect(screen.getByText('Bank Details')).toBeInTheDocument();
                expect(screen.getByText('Loans')).toBeInTheDocument();
                expect(screen.getByText('Savings')).toBeInTheDocument();
                expect(screen.getByText('App and System')).toBeInTheDocument();
            });
        });

        it('should render children content', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div data-testid="child-content">Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByTestId('child-content')).toBeInTheDocument();
            });
        });

        it('should call getUserByUsername with correct username', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(api.getUserByUsername).toHaveBeenCalledWith('graceeffiom');
            });
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should display User not found when user is not found', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(undefined);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(screen.getByText('User not found')).toBeInTheDocument();
            });
        });

        it('should handle API error gracefully', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
            (api.getUserByUsername as jest.Mock).mockRejectedValue(new Error('API Error'));
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(consoleSpy).toHaveBeenCalled();
            });

            consoleSpy.mockRestore();
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have user-profile-layout container', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(document.querySelector('.user-profile-layout')).toBeInTheDocument();
            });
        });

        it('should have user-header-card element', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(document.querySelector('.user-header-card')).toBeInTheDocument();
            });
        });

        it('should have navigation element', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(document.querySelector('.user-nav')).toBeInTheDocument();
            });
        });

        it('should have six navigation items', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                const navItems = document.querySelectorAll('.user-nav__item');
                expect(navItems.length).toBe(6);
            });
        });

        it('should have avatar element', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(document.querySelector('.user-header-card__avatar')).toBeInTheDocument();
            });
        });

        it('should have action buttons container', async () => {
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(document.querySelector('.user-profile-layout__actions')).toBeInTheDocument();
            });
        });
    });

    // =========================================================================
    // NAVIGATION ACTIVE STATE
    // =========================================================================
    describe('Navigation Active State', () => {
        it('should mark General Details as active when on main profile page', async () => {
            mockUsePathname.mockReturnValue('/dashboard/users/graceeffiom');
            (api.getUserByUsername as jest.Mock).mockResolvedValue(mockUser);
            render(
                <UserProfileLayout params={mockParams}>
                    <div>Child Content</div>
                </UserProfileLayout>
            );

            await waitFor(() => {
                expect(document.querySelector('.user-nav__item--active')).toBeInTheDocument();
            });
        });
    });
});
