import mockUsers from './mock-users.json';

// Define the User type based on the JSON structure
export interface User {
    _id: string;
    index: number;
    organization: string;
    username: string;
    email: string;
    phone_number: string;
    date_joined: string;
    status: string;
    full_name: string;
    bvn: number;
    gender: string;
    marital_status: string;
    children: number | string;
    residence_type: string;
    education_level: string;
    employment_status: string;
    sector_of_employment: string;
    duration_of_employment: string;
    office_email: string;
    monthly_income: string;
    loan_repayment: string;
    twitter: string;
    facebook: string;
    instagram: string;
    guarantors: {
        full_name: string;
        phone_number: string;
        relationship: string;
        email: string;
    }[];
}

const STORAGE_KEY = 'lendsqr_users';

const getLocalUsers = (): User[] => {
    if (typeof window === 'undefined') {
        return mockUsers as User[];
    }

    try {
        const storedUsers = localStorage.getItem(STORAGE_KEY);
        if (storedUsers) {
            return JSON.parse(storedUsers);
        }
        // Seed initial data
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUsers));
        return mockUsers as User[];
    } catch (error) {
        console.error("Error accessing localStorage:", error);
        return mockUsers as User[];
    }
};

export const getUsers = async (): Promise<User[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return getLocalUsers();
};

export const getUserById = async (id: string): Promise<User | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const users = getLocalUsers();
    return users.find((user) => user._id === id);
};

export const getUserByUsername = async (username: string): Promise<User | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const users = getLocalUsers();
    return users.find((user) => user.username.toLowerCase() === username.toLowerCase());
};
