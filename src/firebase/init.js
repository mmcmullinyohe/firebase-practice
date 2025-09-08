// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { geyAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07uEA4NE_PTNHbJlFt44BHj_d5g_mXfs",
  authDomain: "fir-practice-56327.firebaseapp.com",
  projectId: "fir-practice-56327",
  storageBucket: "fir-practice-56327.firebasestorage.app",
  messagingSenderId: "582978508406",
  appId: "1:582978508406:web:69ca83c7438cbaa3d2b157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
