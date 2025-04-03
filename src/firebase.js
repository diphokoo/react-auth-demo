// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCEX0bgYWinqPqLltCikywURvOh0tgJ2Js",
  authDomain: "dashboard-d7cdc.firebaseapp.com",
  projectId: "dashboard-d7cdc",
  storageBucket: "dashboard-d7cdc.firebasestorage.app",
  messagingSenderId: "731469749591",
  appId: "1:731469749591:web:02d09da37a51172fe5b212",
  measurementId: "G-7SZRPHGQJ3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);