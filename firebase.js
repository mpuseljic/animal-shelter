// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Rc5nQyZCbBky8HtHysYQRpcp8By8PNs",
  authDomain: "animal-shelter-9091d.firebaseapp.com",
  projectId: "animal-shelter-9091d",
  storageBucket: "animal-shelter-9091d.appspot.com",
  messagingSenderId: "1024982153745",
  appId: "1:1024982153745:web:b1fb5fe755155438b34fb0",
  measurementId: "G-PKHTS2C9JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);