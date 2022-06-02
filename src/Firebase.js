
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXOijp_OrGVo55xh6YXG2t_93xVANJi7I",
  authDomain: "netflix-guide-2c8cc.firebaseapp.com",
  projectId: "netflix-guide-2c8cc",
  storageBucket: "netflix-guide-2c8cc.appspot.com",
  messagingSenderId: "117581114055",
  appId: "1:117581114055:web:dec68cb6cbc9623c156ce2"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);