// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNiUbyme8CF1jikW7bTO97jc4__sOMdv4",
  authDomain: "netflixlogin-f19bf.firebaseapp.com",
  projectId: "netflixlogin-f19bf",
  storageBucket: "netflixlogin-f19bf.appspot.com",
  messagingSenderId: "33921570808",
  appId: "1:33921570808:web:54f8f03d376f26c4bea80d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database=getAuth(app)