import { createContext } from "react";
import type { User, UserCredential, UserProfile } from "firebase/auth";

export type AuthContextType = {
    user: User | null;
    loading: boolean;
    signUpUser: (email: string, password: string) => Promise<UserCredential>;
    signInUser: (email: string, password: string) => Promise<UserCredential>;
    signInUserWithGoogle: () => Promise<UserCredential>;
    signOutUser: () => Promise<void>;
    updateUserInfo: (data: UserProfile) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
