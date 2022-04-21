import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../helpers/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        setCurrentUser(false);
      }
    });
  };

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser,login,signup,logout,loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContextProvider;
