// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjDl5P0B7mod6E-VsfkT1yQe_Qmx4ISqU",
  authDomain: "tic-nova-5e4ed.firebaseapp.com",
  projectId: "tic-nova-5e4ed",
  storageBucket: "tic-nova-5e4ed.appspot.com",
  messagingSenderId: "217335640936",
  appId: "1:217335640936:web:55f81b51cf6c48a2d11cdd",
  measurementId: "G-WQCSLKVZYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);