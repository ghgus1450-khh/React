// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgLtNOMV5m0_b7gYGuTwcBab7cZB_RkI8",
  authDomain: "reactfirebase-51d25.firebaseapp.com",
  projectId: "reactfirebase-51d25",
  storageBucket: "reactfirebase-51d25.firebasestorage.app",
  messagingSenderId: "797077719060",
  appId: "1:797077719060:web:e21862683261fe45457f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // 파이어스토어 데이터베이스 사용하기 위하여
export const auth = getAuth(app); // 파이어베이스 인증기능 사용위해

// 로그인 유지를 위해
setPersistence(auth, browserLocalPersistence).catch(console.error);

// browserLocalPersistence - 브라우저 종료해도 유지