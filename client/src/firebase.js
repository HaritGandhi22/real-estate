// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c39a6.firebaseapp.com",
  projectId: "real-estate-c39a6",
  storageBucket: "real-estate-c39a6.appspot.com",
  messagingSenderId: "485772339222",
  appId: "1:485772339222:web:98aa4dbca1cf8922f66d37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);