// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrflddB2Af3mF_3rkpgGfbdDfls0ThTQE",
  authDomain: "the-news-dragon-882e5.firebaseapp.com",
  projectId: "the-news-dragon-882e5",
  storageBucket: "the-news-dragon-882e5.appspot.com",
  messagingSenderId: "361247580479",
  appId: "1:361247580479:web:b61af1f61131bac060738a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;