// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYRVTbfl5goWwdlCPpBIZgSYa824O30Tk",
  authDomain: "fir-project-admin-panel.firebaseapp.com",
  projectId: "fir-project-admin-panel",
  storageBucket: "fir-project-admin-panel.appspot.com",
  messagingSenderId: "891960399590",
  appId: "1:891960399590:web:4ef87d8fbd6a02a8c44d27",
  measurementId: "G-DYKRYPZ88N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)


