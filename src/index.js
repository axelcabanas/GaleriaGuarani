import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvD8G7sx0pJNL0m48iuooHg5DxyyeBuqo",
  authDomain: "vendome-278614.firebaseapp.com",
  projectId: "vendome-278614",
  storageBucket: "vendome-278614.appspot.com",
  messagingSenderId: "599744827855",
  appId: "1:599744827855:web:8a5847191a028d8afc82ba",
  measurementId: "G-F8JYDVMKJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();