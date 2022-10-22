// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAilIJtNtoangJ7Os_d8JSgAeio4GECcSI",
  authDomain: "single-page-5450e.firebaseapp.com",
  projectId: "single-page-5450e",
  storageBucket: "single-page-5450e.appspot.com",
  messagingSenderId: "130548981401",
  appId: "1:130548981401:web:0df4dc7f9d8438ef202208"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth

