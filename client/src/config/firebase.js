import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyADaYsfcuzhvJzMsdC9AFS-NueZTgbwCzo",
  authDomain: "chatmate-3dee4.firebaseapp.com",
  projectId: "chatmate-3dee4",
  storageBucket: "chatmate-3dee4.appspot.com",
  messagingSenderId: "691285408767",
  appId: "1:691285408767:web:cda82889a55afef01705ca",
  measurementId: "G-X4M03MWWXW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
