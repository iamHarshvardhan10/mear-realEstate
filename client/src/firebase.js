// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTWwk_5V_BwqZY9vvgaYLKuwlo7Aamhf8",
  authDomain: "mern-estate-194dd.firebaseapp.com",
  projectId: "mern-estate-194dd",
  storageBucket: "mern-estate-194dd.appspot.com",
  messagingSenderId: "835452165564",
  appId: "1:835452165564:web:af7306012120f5523edfb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;