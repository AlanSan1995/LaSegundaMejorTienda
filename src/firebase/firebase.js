import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWWpTpgVG-HdHZqYPhoo2bZBYFgaTRs8U",
  authDomain: "lasegundamejor-73a78.firebaseapp.com",
  projectId: "lasegundamejor-73a78",
  storageBucket: "lasegundamejor-73a78.appspot.com",
  messagingSenderId: "269384298897",
  appId: "1:269384298897:web:2bec4b9232673760942a30",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// apiKey: import.meta.env.API_KEY,
// authDomain: import.meta.env.AUTH_DOMAIN,
// projectId: import.meta.env.PROJECT_ID,
// storageBucket: import.meta.env.STORAGE_BUCKET,
// messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
// appId: import.meta.env.APP_ID,
