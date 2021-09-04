import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB-NP02CPwETlGx8YaEu_OPDTVcV7PBZ20",
  authDomain: "cart-aa0c7.firebaseapp.com",
  projectId: "cart-aa0c7",
  storageBucket: "cart-aa0c7.appspot.com",
  messagingSenderId: "104390404686",
  appId: "1:104390404686:web:8146be4fc35398bf65b11f"
};


const app = firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
