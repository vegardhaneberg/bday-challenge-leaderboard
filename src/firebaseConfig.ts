// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bdaychallenge-da960.firebaseapp.com",
  databaseURL:
    "https://bdaychallenge-da960-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bdaychallenge-da960",
  storageBucket: "bdaychallenge-da960.appspot.com",
  messagingSenderId: "1005972264441",
  appId: "1:1005972264441:web:642a9586fb4804802e9928",
  measurementId: "G-815BW30PNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
