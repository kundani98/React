import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

var config ={

  apiKey: "AIzaSyB2bBdv7vO7FzITzmWwxA2v8cbV90vnx84",
  authDomain: "crudproject-50e29.firebaseapp.com",
  projectId: "crudproject-50e29",
  storageBucket: "crudproject-50e29.appspot.com",
  messagingSenderId: "285468579602",
  appId: "1:285468579602:web:b7130f13411a53a33ec5cb",
  measurementId: "G-KJZKT77KM5"
} 

firebase.initializeApp(config);

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
