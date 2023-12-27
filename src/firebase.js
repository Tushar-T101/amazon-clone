import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4VcWNIqUxgbD4GEqyMwdMFJqffofc4zM",
    authDomain: "clone-d18ce.firebaseapp.com",
    projectId: "clone-d18ce",
    storageBucket: "clone-d18ce.appspot.com",
    messagingSenderId: "196315243120",
    appId: "1:196315243120:web:ed89792c8580c1edb64ab5",
    measurementId: "G-F5W3B8MYYM"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const authentication = getAuth(firebaseApp);

export { db, authentication };