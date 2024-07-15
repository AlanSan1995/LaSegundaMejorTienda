import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth, githubProvider, googleProvider } from "../firebase/firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      return error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      return error;
    }
  };
  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      setUser(result.user);
    } catch (error) {
      return error;
    }
  };

  const githubAuth = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("Hola");
      setUser(result.user);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const logOutUser = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        logOutUser,
        googleAuth,
        githubAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
