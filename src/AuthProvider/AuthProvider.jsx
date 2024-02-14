import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContextCine = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerGoogle = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, providerGoogle)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const emailVerification = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (stateUser) => {
            // console.log("i'm spying on", stateUser);
            setUser(stateUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const allAuth ={ 
        user, 
        createUser, 
        loginUser, 
        googlePopupLogin, 
        logOut, 
        updateUser, 
        emailVerification,
        resetPassword,
        loading }
    return (
        <AuthContextCine.Provider value={allAuth}>
            {children}
        </AuthContextCine.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;