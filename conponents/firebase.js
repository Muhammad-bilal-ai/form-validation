// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2_Xp6WOoDX4Jy7u9j1pcYwZDLZliCcA0",
  authDomain: "form-validation-7.firebaseapp.com",
  projectId: "form-validation-7",
  storageBucket: "form-validation-7.appspot.com",
  messagingSenderId: "459413661989",
  appId: "1:459413661989:web:431adfad0052ea86dad2cc",
  measurementId: "G-X8LJ51JBED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { doc, setDoc } from "firebase/firestore";

export const saveFormData = async (values) => {
  try {
    const docRef = doc(collection(db, "formData"));
    console.log("above await docRef: " + docRef + " values: " + values);
    await setDoc(docRef, values);
    console.log("Document written  with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Rethrow the error so it can be caught by the calling function
  }
};
