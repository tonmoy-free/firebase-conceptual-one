// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5kH9D1F2FBm0DphOGmbAgVTT_d89AOZA",
    authDomain: "fir-conceptual-one-98a38.firebaseapp.com",
    projectId: "fir-conceptual-one-98a38",
    storageBucket: "fir-conceptual-one-98a38.firebasestorage.app",
    messagingSenderId: "540846041588",
    appId: "1:540846041588:web:4b3ca4056f7d773bf871a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);