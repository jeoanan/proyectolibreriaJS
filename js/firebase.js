/// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWx54vHTtVuonMscFhahJ4z1UpXSk8iIk",
  authDomain: "libreriaproyectjs.firebaseapp.com",
  projectId: "libreriaproyectjs",
  storageBucket: "libreriaproyectjs.appspot.com",
  messagingSenderId: "330202055594",
  appId: "1:330202055594:web:a225823e30e06e99ae21d3",
  measurementId: "G-WDV4C7VYTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);