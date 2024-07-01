import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase";

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
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    }
  };

  const logOutUser = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
