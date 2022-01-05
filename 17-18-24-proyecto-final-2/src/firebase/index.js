// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Uo1iIzVhVZ9F3PFD0kkLfOgx71uocVY",
  authDomain: "ob-tasklist-firebase.firebaseapp.com",
  projectId: "ob-tasklist-firebase",
  storageBucket: "ob-tasklist-firebase.appspot.com",
  messagingSenderId: "45362721152",
  appId: "1:45362721152:web:eb9a450e4b347e5fcf1165"
};

const developmentFirebaseConfig = {
  apiKey: "AIzaSyAIWlkvSQuVj5SKzWoDX7y0hMbpqnSM9SI",
  authDomain: "dev-ob-tasklist-firebase.firebaseapp.com",
  projectId: "dev-ob-tasklist-firebase",
  storageBucket: "dev-ob-tasklist-firebase.appspot.com",
  messagingSenderId: "321960608896",
  appId: "1:321960608896:web:59d9cb7512a4f934f65265"
};

// Initialize Firebase
let app;
if (process.env.NODE_ENV === 'production') {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(developmentFirebaseConfig);
}
// Inicializar Firestore
const db = getFirestore();

export {
  app,
  db
}
