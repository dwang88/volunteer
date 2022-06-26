// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQakOPy9i0OZzxpuXk8Dma85-SxlZBi8",
  authDomain: "volunteer-connect-e5e6c.firebaseapp.com",
  projectId: "volunteer-connect-e5e6c",
  storageBucket: "volunteer-connect-e5e6c.appspot.com",
  messagingSenderId: "81672738942",
  appId: "1:81672738942:web:be18a2bc1f74aacee9202f",
  measurementId: "G-BGMCFY24X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);