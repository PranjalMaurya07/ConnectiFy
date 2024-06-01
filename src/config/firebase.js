// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkmuZF8Xmgm2D3sdpiZK647--Ju6mucro",
  authDomain: "connectify-926d6.firebaseapp.com",
  projectId: "connectify-926d6",
  storageBucket: "connectify-926d6.appspot.com",
  messagingSenderId: "912968252224",
  appId: "1:912968252224:web:1130b72502e5ebd28b98a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);