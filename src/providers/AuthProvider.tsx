// AuthProvider.tsx
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    type User,
    type UserCredential,
    type UserProfile
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { AuthContext, type AuthContextType } from "../contexts/AuthContext";

type AuthProviderProps = {
    children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    // Firebase Auth instance
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // State for current user & loading
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Sign up with email/password
    const signUpUser = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in with email/password
    const signInUser = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google popup
    const signInUserWithGoogle = (): Promise<UserCredential> => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign out
    const signOutUser = (): Promise<void> => {
        setLoading(true);
        return signOut(auth);
    };

    // Update user profile
    const updateUserInfo = (updatedData: UserProfile): Promise<void> => {
        if (!auth.currentUser) return Promise.reject();
        return updateProfile(auth.currentUser, updatedData);
    };

    // Listen to auth state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [auth]);

    // Context value
    const userInfo: AuthContextType = {
        user,
        setUser,
        loading,
        signUpUser,
        signInUser,
        signInUserWithGoogle,
        signOutUser,
        updateUserInfo,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
