// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-XAsx_M1M4Yo622_QO1S-Aczceg3b5KA",
  authDomain: "blog-app-a1bf3.firebaseapp.com",
  projectId: "blog-app-a1bf3",
  storageBucket: "blog-app-a1bf3.appspot.com",
  messagingSenderId: "1074375064052",
  appId: "1:1074375064052:web:5765d666df1fc83e7861a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
