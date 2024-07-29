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
      localStorage.setItem("userLoggedIn", JSON.stringify(userCredential.user));
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
      localStorage.setItem("userLoggedIn", JSON.stringify(userCredential.user));
      setUser(userCredential.user);
    } catch (error) {
      return error;
    }
  };
  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("userLoggedIn", JSON.stringify(result.user));
      setUser(result.user);
    } catch (error) {
      return error;
    }
  };

  const githubAuth = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      localStorage.setItem("userLoggedIn", JSON.stringify(result.user));

      setUser(result.user);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const logOutUser = () => {
    localStorage.removeItem("userLoggedIn");
    setUser(null);
  };

  const getLoggedInUser = () => {
    const userJson = localStorage.getItem("userLoggedIn");
    if (!userJson) {
      return null;
    }
    const user = JSON.parse(userJson);

    setUser(user);
    return user;
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
        getLoggedInUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
