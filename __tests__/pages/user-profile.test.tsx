import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
import UserProfilePage from '@/app/dashboard/users/[user_profile]/page';
import { UserProvider } from '@/components/pages/dashboard/users/user-context';
import { User } from '@/lib/api';

const mockUser: User = {
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
    guarantors: [
        {
            full_name: 'Debby Ogana',
            phone_number: '+234(708) 555-1234',
            relationship: 'Sister',
            email: 'debby@gmail.com',
        },
    ],
};

const mockUserWithTwoGuarantors: User = {
    ...mockUser,
    guarantors: [
        {
            full_name: 'Debby Ogana',
            phone_number: '+234(708) 555-1234',
            relationship: 'Sister',
            email: 'debby@gmail.com',
        },
        {
            full_name: 'John Smith',
            phone_number: '+234(709) 555-5678',
            relationship: 'Friend',
            email: 'john@gmail.com',
        },
    ],
};

const mockUserWithNoGuarantors: User = {
    ...mockUser,
    guarantors: [],
};

// Wrapper component to provide user context
const renderWithUserContext = (user: User) => {
    return render(
        <UserProvider user={user}>
            <UserProfilePage />
        </UserProvider>
    );
};

describe('User Profile Page', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should have no accessibility violations', async () => {
            const { container } = renderWithUserContext(mockUser);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should render without crashing', () => {
            renderWithUserContext(mockUser);
            expect(document.querySelector('.user-profile')).toBeInTheDocument();
        });

        it('should display Personal Information section', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Personal Information')).toBeInTheDocument();
        });

        it('should display Education and Employment section', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Education and Employment')).toBeInTheDocument();
        });

        it('should display Socials section', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Socials')).toBeInTheDocument();
        });

        it('should display Guarantor section', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Guarantor')).toBeInTheDocument();
        });

        it('should display user full name', () => {
            renderWithUserContext(mockUser);
            // Full name appears in Personal Info and Facebook value
            expect(screen.getAllByText('Grace Effiom')[0]).toBeInTheDocument();
        });

        it('should display user phone number', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('+234(789) 123-4567')).toBeInTheDocument();
        });

        it('should display user email', () => {
            renderWithUserContext(mockUser);
            // Email appears in Personal Info and Office Email
            expect(screen.getAllByText('grace@lendsqr.com').length).toBeGreaterThan(0);
        });

        it('should display user BVN', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('1234567890')).toBeInTheDocument();
        });

        it('should display user gender', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Female')).toBeInTheDocument();
        });

        it('should display user marital status', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Single')).toBeInTheDocument();
        });

        it('should display residence type', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText("Parent's Apartment")).toBeInTheDocument();
        });

        it('should display education level', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('B.Sc')).toBeInTheDocument();
        });

        it('should display employment status', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Employed')).toBeInTheDocument();
        });

        it('should display sector of employment', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('FinTech')).toBeInTheDocument();
        });

        it('should display monthly income', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('₦200,000.00 - ₦400,000.00')).toBeInTheDocument();
        });

        it('should display Twitter handle', () => {
            renderWithUserContext(mockUser);
            // Same handle for Twitter and Instagram
            expect(screen.getAllByText('@grace_effiom').length).toBeGreaterThan(0);
        });

        it('should display Facebook name', () => {
            renderWithUserContext(mockUser);
            // Grace Effiom appears multiple times, just verify it exists
            const facebookElements = screen.getAllByText('Grace Effiom');
            expect(facebookElements.length).toBeGreaterThan(0);
        });

        it('should display guarantor information', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Debby Ogana')).toBeInTheDocument();
            expect(screen.getByText('+234(708) 555-1234')).toBeInTheDocument();
            expect(screen.getByText('Sister')).toBeInTheDocument();
        });

        it('should display two guarantors when user has two', () => {
            renderWithUserContext(mockUserWithTwoGuarantors);
            expect(screen.getByText('Debby Ogana')).toBeInTheDocument();
            expect(screen.getByText('John Smith')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should not display guarantor grid when no guarantors', () => {
            renderWithUserContext(mockUserWithNoGuarantors);
            expect(document.querySelector('.user-profile__grid--guarantor')).not.toBeInTheDocument();
        });

        it('should still display Guarantor section title when no guarantors', () => {
            renderWithUserContext(mockUserWithNoGuarantors);
            expect(screen.getByText('Guarantor')).toBeInTheDocument();
        });

        it('should not show second guarantor row when only one guarantor', () => {
            renderWithUserContext(mockUser);
            expect(document.querySelector('.user-profile__grid-row-2')).not.toBeInTheDocument();
        });
    });

    // =========================================================================
    // STRUCTURE VALIDATION
    // =========================================================================
    describe('Structure Validation', () => {
        it('should have four sections', () => {
            renderWithUserContext(mockUser);
            const sections = document.querySelectorAll('.user-profile__section');
            expect(sections.length).toBe(4);
        });

        it('should have section titles', () => {
            renderWithUserContext(mockUser);
            const titles = document.querySelectorAll('.user-profile__title');
            expect(titles.length).toBe(4);
        });

        it('should have profile items with labels and values', () => {
            renderWithUserContext(mockUser);
            const labels = document.querySelectorAll('.user-profile__label');
            const values = document.querySelectorAll('.user-profile__value');
            expect(labels.length).toBeGreaterThan(0);
            expect(values.length).toBeGreaterThan(0);
        });

        it('should have grid layout for personal information', () => {
            renderWithUserContext(mockUser);
            const grids = document.querySelectorAll('.user-profile__grid');
            expect(grids.length).toBeGreaterThan(0);
        });

        it('should have education grid with specific class', () => {
            renderWithUserContext(mockUser);
            expect(document.querySelector('.user-profile__grid--education')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // LABEL VALIDATION
    // =========================================================================
    describe('Label Validation', () => {
        it('should display all personal information labels', () => {
            renderWithUserContext(mockUser);
            expect(screen.getAllByText('full Name')[0]).toBeInTheDocument();
            expect(screen.getAllByText('Phone Number')[0]).toBeInTheDocument();
            expect(screen.getAllByText('Email Address')[0]).toBeInTheDocument();
            expect(screen.getByText('Bvn')).toBeInTheDocument();
            expect(screen.getByText('Gender')).toBeInTheDocument();
            expect(screen.getByText('Marital status')).toBeInTheDocument();
            expect(screen.getByText('Children')).toBeInTheDocument();
            expect(screen.getByText('Type of residence')).toBeInTheDocument();
        });

        it('should display employment labels', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('level of education')).toBeInTheDocument();
            expect(screen.getByText('employment status')).toBeInTheDocument();
            expect(screen.getByText('sector of employment')).toBeInTheDocument();
            expect(screen.getByText('Duration of employment')).toBeInTheDocument();
            expect(screen.getByText('office email')).toBeInTheDocument();
            expect(screen.getByText('Monthly income')).toBeInTheDocument();
            expect(screen.getByText('loan repayment')).toBeInTheDocument();
        });

        it('should display social labels', () => {
            renderWithUserContext(mockUser);
            expect(screen.getByText('Twitter')).toBeInTheDocument();
            expect(screen.getByText('Facebook')).toBeInTheDocument();
            expect(screen.getByText('Instagram')).toBeInTheDocument();
        });
    });
});
