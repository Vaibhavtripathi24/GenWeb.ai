// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "websitebuilder-6e882.firebaseapp.com",
  projectId: "websitebuilder-6e882",
  storageBucket: "websitebuilder-6e882.firebasestorage.app",
  messagingSenderId: "408349557461",
  appId: "1:408349557461:web:3addb0ab800cfe6919d85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
