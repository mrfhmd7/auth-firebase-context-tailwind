import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const signIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     const signInWithGoogle = () => {
          return signInWithPopup(auth, googleAuthProvider)
     }

     const logOut = () => {
          return signOut(auth);
     };

     //observe auth state changes

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
               // console.log('auth state changed', currentUser);
               setUser(currentUser);
               setLoading(false);
          });
          return () => {
               unsubscribe();
          }
     }, [])

     const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          signInWithGoogle,
          logOut
     }

     // const user = {displayName: 'Sagor Nodi'}

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProviders;