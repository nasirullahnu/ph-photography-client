import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // google login 
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // create user with name email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // log in with email and password 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logOut = () => {
        return signOut(auth);
    }

    // observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser)
          setUser(currentUser)
        //   setLoading(false);
        });
        return () => {
          return unsubscribe();
        }
      },[])

    const authInfo = {user, googleLogin, createUser,logIn, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;