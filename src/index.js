import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ6wNCL3e5-RQ5HxZlosx_qSU_6rM6moM",
  authDomain: "ecommerce-d4828.firebaseapp.com",
  projectId: "ecommerce-d4828",
  storageBucket: "ecommerce-d4828.appspot.com",
  messagingSenderId: "1003621399632",
  appId: "1:1003621399632:web:cae4aecb6ca2597326e555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
