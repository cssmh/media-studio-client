import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContextCine = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerGoogle = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        return signInWithPopup(auth, providerGoogle)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (stateUser) => {
            console.log("i'm spying on", stateUser);
            setUser(stateUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const allAuth ={ user, createUser, loginUser, googlePopupLogin, logOut }
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