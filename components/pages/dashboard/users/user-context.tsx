"use client";

import { User } from "@/lib/api";
import { createContext, useContext } from "react";

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider = ({
    children,
    user,
}: {
    children: React.ReactNode;
    user: User | undefined;
}) => {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
