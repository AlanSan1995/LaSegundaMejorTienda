import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth, db, githubProvider, googleProvider } from "../firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

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

      const user = userCredential.user;
      const cartId = null;
      const userInfo = {
        email: user.email,
        cartId,
        id: user.uid,
      };
      await setDoc(doc(db, "users", user.uid), { email: user.email, cartId });

      localStorage.setItem("userLoggedIn", JSON.stringify(userInfo));

      setUser(userInfo);
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
      const user = userCredential.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const userInfo = { id: user.uid, ...docSnap.data() };
      localStorage.setItem("userLoggedIn", JSON.stringify(userInfo));
      setUser(userInfo);
    } catch (error) {
      return error;
    }
  };
  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const docRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(docRef);
      let userInfo;

      if (docSnap.exists()) {
        userInfo = { id: result.user.uid, ...docSnap.data() };
      } else {
        const cartId = null;
        userInfo = {
          email: result.user.email,
          cartId,
          id: result.user.uid,
        };
        await setDoc(doc(db, "users", result.user.uid), {
          email: result.user.email,
          cartId,
        });
      }
      localStorage.setItem("userLoggedIn", JSON.stringify(userInfo));

      setUser(userInfo);
    } catch (error) {
      return error;
    }
  };

  const githubAuth = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const docRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(docRef);
      let userInfo;

      if (docSnap.exists()) {
        userInfo = { id: result.user.uid, ...docSnap.data() };
      } else {
        const cartId = null;
        userInfo = {
          email: result.user.email,
          cartId,
          id: result.user.uid,
        };
        await setDoc(doc(db, "users", result.user.uid), {
          email: result.user.email,
          cartId,
        });
      }
      localStorage.setItem("userLoggedIn", JSON.stringify(userInfo));

      setUser(userInfo);
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

  const updateLoggedInUser = async (newData) => {
    try {
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, newData);
      setUser({ ...user, ...newData });
    } catch (error) {
      console.log(error);
      return error;
    }
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
        updateLoggedInUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
