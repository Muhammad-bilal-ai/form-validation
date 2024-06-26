// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
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

export const saveFormData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "formData"), data);
    console.log("docRef id: " + docRef.id);
  } catch (e) {
    console.error("Failed adding doc: " + e + ": " + e.message);
  }
};
