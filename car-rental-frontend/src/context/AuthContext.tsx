// act as a backpack 
// Stores User Token, login and logout
import {createContext,useState,type ReactNode,} from "react";

interface User {

    id: string;
    name: string;
    email: string;
}

interface AuthContextType {

    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);