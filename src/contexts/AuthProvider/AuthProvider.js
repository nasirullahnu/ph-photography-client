import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // google login 
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
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

    const authInfo = {user, googleLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;