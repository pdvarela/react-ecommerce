
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ6wNCL3e5-RQ5HxZlosx_qSU_6rM6moM",
  authDomain: "ecommerce-d4828.firebaseapp.com",
  projectId: "ecommerce-d4828",
  storageBucket: "ecommerce-d4828.appspot.com",
  messagingSenderId: "1003621399632",
  appId: "1:1003621399632:web:cae4aecb6ca2597326e555"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)