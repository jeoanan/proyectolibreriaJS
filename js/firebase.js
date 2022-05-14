// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvJOFkAEt4z14B7GeYdCYn_ktBQbQNT-A",
  authDomain: "tiendasabado-9020f.firebaseapp.com",
  projectId: "tiendasabado-9020f",
  storageBucket: "tiendasabado-9020f.appspot.com",
  messagingSenderId: "865937749889",
  appId: "1:865937749889:web:ec9f87b626420524141a80",
  measurementId: "G-GFS0ERMJ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);