// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_6p9FWV362ekLKDcX_trlOaui9aqafUI",
  authDomain: "awv9-f3e14.firebaseapp.com",
  projectId: "awv9-f3e14",
  storageBucket: "awv9-f3e14.firebasestorage.app",
  messagingSenderId: "328161624199",
  appId: "1:328161624199:web:8b6eb4c39d14b16fd67822",
  measurementId: "G-3FNC0DXRG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
