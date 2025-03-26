// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBR2Lg1f5pNFeNn4qlvYZZB2TisDnQNdTo",
  authDomain: "samara-studios.firebaseapp.com",
  databaseURL: "https://samara-studios-default-rtdb.firebaseio.com",
  projectId: "samara-studios",
  storageBucket: "samara-studios.firebasestorage.app",
  messagingSenderId: "719583695002",
  appId: "1:719583695002:web:acf9125a6a07813ee2cf23",
  measurementId: "G-7JTWCVR1Y7"
};

// Initialize Firebase (client-side)
const app = initializeApp(firebaseConfig);

// Optional: Analytics (only works in browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
