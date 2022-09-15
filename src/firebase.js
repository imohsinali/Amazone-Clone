// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoZ9A6l0gtuGqerPns_hQiQh6a-B01yl4",
  authDomain: "e-clone-e3d69.firebaseapp.com",
  projectId: "e-clone-e3d69",
  storageBucket: "e-clone-e3d69.appspot.com",
  messagingSenderId: "367282126914",
  appId: "1:367282126914:web:a4132adcb139a779fbeddb",
  measurementId: "G-Q0T15K5XDL",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
console.warn("db", db);
const auth = firebase.auth();
export { db, auth };
