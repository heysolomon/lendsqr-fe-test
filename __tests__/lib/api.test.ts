import { getUsers, getUserById, getUserByUsername, User } from '@/lib/api';

// Mock the JSON data
jest.mock('@/lib/mock-users.json', () => [
    {
        _id: 'test-id-1',
        index: 0,
        organization: 'TestOrg',
        username: 'testuser1',
        email: 'test1@example.com',
        phone_number: '+234(123) 456-7890',
        date_joined: 'Jan 1 2024, 10:00 AM',
        status: 'active',
        full_name: 'Test User One',
        bvn: 1234567890,
        gender: 'Male',
        marital_status: 'Single',
        children: 0,
        residence_type: 'Own Apartment',
        education_level: 'B.Sc',
        employment_status: 'Employed',
        sector_of_employment: 'Technology',
        duration_of_employment: '2 years',
        office_email: 'test1@work.com',
        monthly_income: '₦200,000 - ₦400,000',
        loan_repayment: '50,000.00',
        twitter: '@testuser1',
        facebook: 'Test User One',
        instagram: '@testuser1',
        guarantors: [
            {
                full_name: 'Guarantor One',
                phone_number: '+234(111) 111-1111',
                relationship: 'Friend',
                email: 'guarantor1@example.com',
            },
        ],
    },
    {
        _id: 'test-id-2',
        index: 1,
        organization: 'AnotherOrg',
        username: 'testuser2',
        email: 'test2@example.com',
        phone_number: '+234(987) 654-3210',
        date_joined: 'Feb 15 2024, 02:30 PM',
        status: 'inactive',
        full_name: 'Test User Two',
        bvn: 9876543210,
        gender: 'Female',
        marital_status: 'Married',
        children: 2,
        residence_type: 'Rented Apartment',
        education_level: 'M.Sc',
        employment_status: 'Self-employed',
        sector_of_employment: 'Finance',
        duration_of_employment: '5 years',
        office_email: 'test2@work.com',
        monthly_income: '₦500,000 - ₦800,000',
        loan_repayment: '100,000.00',
        twitter: '@testuser2',
        facebook: 'Test User Two',
        instagram: '@testuser2',
        guarantors: [],
    },
]);

describe('API Utilities', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        describe('getUsers', () => {
            it('should return an array of users', async () => {
                const users = await getUsers();
                expect(Array.isArray(users)).toBe(true);
            });

            it('should return users with correct structure', async () => {
                const users = await getUsers();
                expect(users.length).toBeGreaterThan(0);
                expect(users[0]).toHaveProperty('_id');
                expect(users[0]).toHaveProperty('username');
                expect(users[0]).toHaveProperty('email');
                expect(users[0]).toHaveProperty('full_name');
                expect(users[0]).toHaveProperty('status');
            });

            it('should return all mock users', async () => {
                const users = await getUsers();
                expect(users.length).toBe(2);
            });
        });

        describe('getUserById', () => {
            it('should return a user when valid ID is provided', async () => {
                const user = await getUserById('test-id-1');
                expect(user).toBeDefined();
                expect(user?.username).toBe('testuser1');
            });

            it('should return the correct user data', async () => {
                const user = await getUserById('test-id-1');
                expect(user?.full_name).toBe('Test User One');
                expect(user?.email).toBe('test1@example.com');
                expect(user?.organization).toBe('TestOrg');
            });

            it('should return user with guarantors array', async () => {
                const user = await getUserById('test-id-1');
                expect(user?.guarantors).toBeDefined();
                expect(Array.isArray(user?.guarantors)).toBe(true);
                expect(user?.guarantors?.length).toBe(1);
            });
        });

        describe('getUserByUsername', () => {
            it('should return a user when valid username is provided', async () => {
                const user = await getUserByUsername('testuser1');
                expect(user).toBeDefined();
                expect(user?._id).toBe('test-id-1');
            });

            it('should be case-insensitive', async () => {
                const user = await getUserByUsername('TESTUSER1');
                expect(user).toBeDefined();
                expect(user?.username).toBe('testuser1');
            });

            it('should return correct user with mixed case', async () => {
                const user = await getUserByUsername('TestUser2');
                expect(user).toBeDefined();
                expect(user?.full_name).toBe('Test User Two');
            });
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        describe('getUserById', () => {
            it('should return undefined for non-existent ID', async () => {
                const user = await getUserById('non-existent-id');
                expect(user).toBeUndefined();
            });

            it('should return undefined for empty ID', async () => {
                const user = await getUserById('');
                expect(user).toBeUndefined();
            });

            it('should handle special characters in ID', async () => {
                const user = await getUserById('!@#$%^&*()');
                expect(user).toBeUndefined();
            });

            it('should handle very long ID string', async () => {
                const longId = 'a'.repeat(1000);
                const user = await getUserById(longId);
                expect(user).toBeUndefined();
            });
        });

        describe('getUserByUsername', () => {
            it('should return undefined for non-existent username', async () => {
                const user = await getUserByUsername('nonexistentuser');
                expect(user).toBeUndefined();
            });

            it('should return undefined for empty username', async () => {
                const user = await getUserByUsername('');
                expect(user).toBeUndefined();
            });

            it('should handle special characters in username', async () => {
                const user = await getUserByUsername('user@#$%');
                expect(user).toBeUndefined();
            });

            it('should handle whitespace-only username', async () => {
                const user = await getUserByUsername('   ');
                expect(user).toBeUndefined();
            });

            it('should not find partial username matches', async () => {
                const user = await getUserByUsername('test');
                expect(user).toBeUndefined();
            });
        });

        describe('Edge Cases', () => {
            it('should handle user with empty guarantors array', async () => {
                const user = await getUserById('test-id-2');
                expect(user?.guarantors).toBeDefined();
                expect(user?.guarantors?.length).toBe(0);
            });
        });
    });
});
