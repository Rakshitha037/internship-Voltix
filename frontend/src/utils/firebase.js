// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCURtyV7VBnuQYKzU8Ls576Nfg1woh6iyY",
  authDomain: "voltixsolution-58f29.firebaseapp.com",
  projectId: "voltixsolution-58f29",
  storageBucket: "voltixsolution-58f29.appspot.com",
  messagingSenderId: "531377826262",
  appId: "1:531377826262:web:003cd64b6df471082c5c77",
  measurementId: "G-BLME8YERYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);