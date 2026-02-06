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

export const getUsers = async (): Promise<User[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockUsers as User[];
};

export const getUserById = async (id: string): Promise<User | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return (mockUsers as User[]).find((user) => user._id === id);
};

export const getUserByUsername = async (username: string): Promise<User | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return (mockUsers as User[]).find((user) => user.username.toLowerCase() === username.toLowerCase());
};
