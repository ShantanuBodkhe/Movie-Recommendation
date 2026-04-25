// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmpK0rloFeMR0dNVY17NwuAN-htYv47g",
  authDomain: "movie-recommendation-f92a4.firebaseapp.com",
  projectId: "movie-recommendation-f92a4",
  storageBucket: "movie-recommendation-f92a4.firebasestorage.app",
  messagingSenderId: "755293182432",
  appId: "1:755293182432:web:73d804aabbf0e0a2c6f385",
  measurementId: "G-0NQTNP8KQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();