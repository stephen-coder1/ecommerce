// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH0pRTBExmHTtwMGaACUi1D1DHAfLf40Q",
  authDomain: "login-register-2753a.firebaseapp.com",
  projectId: "login-register-2753a",
  storageBucket: "login-register-2753a.appspot.com",
  messagingSenderId: "153588032879",
  appId: "1:153588032879:web:e441b906e4a7417752749a",
  measurementId: "G-G4189LKSGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}