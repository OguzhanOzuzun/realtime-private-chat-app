import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvX_pidjdb5lEbTlL8zpUb94ZycRlg1Qc",
  authDomain: "oguzhanchat-2c370.firebaseapp.com",
  projectId: "oguzhanchat-2c370",
  storageBucket: "oguzhanchat-2c370.appspot.com",
  messagingSenderId: "226326978689",
  appId: "1:226326978689:web:fdfb0b7de3c060a5756d80",
  measurementId: "G-8J0290ZRQP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
