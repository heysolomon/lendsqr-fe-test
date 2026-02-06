import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProvider, useUser } from '@/components/pages/dashboard/users/user-context';
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
    guarantors: [],
};

const TestComponent = () => {
    const user = useUser();
    return <div>{user.full_name}</div>;
};

describe('UserContext', () => {
    it('should provide user data to children', () => {
        render(
            <UserProvider user={mockUser}>
                <TestComponent />
            </UserProvider>
        );
        expect(screen.getByText('Grace Effiom')).toBeInTheDocument();
    });

    it('should throw error when useUser is used outside UserProvider', () => {
        // Prevent console.error from cluttering the output
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        expect(() => {
            render(<TestComponent />);
        }).toThrow('useUser must be used within a UserProvider');

        consoleSpy.mockRestore();
    });

    it('should handle undefined user gracefully in provider', () => {
        const EmptyTestComponent = () => {
            const user = useUser();
            return <div>{user ? 'User exists' : 'User is undefined'}</div>;
        };

        // Prevent console.error from cluttering the output
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        // Even if user is undefined in prop, the provider provides it.
        // But our useUser throws if the context value is undefined.
        // Let's test that specifically.
        expect(() => {
            render(
                <UserProvider user={undefined}>
                    <EmptyTestComponent />
                </UserProvider>
            );
        }).toThrow('useUser must be used within a UserProvider');

        consoleSpy.mockRestore();
    });
});
