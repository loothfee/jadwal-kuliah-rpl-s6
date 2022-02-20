// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmljh84I-DTdviqR3Cd9_fAaQZdq6rWvo",
  authDomain: "jadwal-kuliah-rpl-s6.firebaseapp.com",
  projectId: "jadwal-kuliah-rpl-s6",
  storageBucket: "jadwal-kuliah-rpl-s6.appspot.com",
  messagingSenderId: "232395809817",
  appId: "1:232395809817:web:8a174c60eebdf3f7a6f688",
  measurementId: "G-7PH4C2CXC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);