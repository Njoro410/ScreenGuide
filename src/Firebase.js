
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClZf3hJyf96FWA3H330pauaCXHa7nsvb0",
  authDomain: "movie-guide-ca6d1.firebaseapp.com",
  projectId: "movie-guide-ca6d1",
  storageBucket: "movie-guide-ca6d1.appspot.com",
  messagingSenderId: "226030852085",
  appId: "1:226030852085:web:41adb8e6b6a95d2c81b2bc"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);