// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD9MoXkX3as4_vzwbgZB7vg4DrRHYh_liQ",
  authDomain: "instagram-clone-2a204.firebaseapp.com",
  projectId: "instagram-clone-2a204",
  storageBucket: "instagram-clone-2a204.appspot.com",
  messagingSenderId: "252668398225",
  appId: "1:252668398225:web:517f56417f24eb3c904d30",
  measurementId: "G-TWT7SYVV8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };