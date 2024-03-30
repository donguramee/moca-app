// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0JRpmRpirqq_PDEe3kjV5fefx7up_3BI",
  authDomain: "moca-app-3a306.firebaseapp.com",
  projectId: "moca-app-3a306",
  storageBucket: "moca-app-3a306.appspot.com",
  messagingSenderId: "784560070506",
  appId: "1:784560070506:web:652392caedc9c8802e4f13",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
// Firebase 인증 가져오기
const auth = getAuth(app);

export { auth };
