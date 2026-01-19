// AuthProvider.jsx
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserInfo = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // get current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [auth])

    const userInfo = {
        user,
        setUser,
        loading,
        signUpUser,
        signInUser,
        signInUserWithGoogle,
        signOutUser,
        updateUserInfo
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;