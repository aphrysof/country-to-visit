// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider,signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU67OeAseIFQRd-yNCOS0V4DtA1LW2j7g",
  authDomain: "bag-rw.firebaseapp.com",
  projectId: "bag-rw",
  storageBucket: "bag-rw.appspot.com",
  messagingSenderId: "560192833718",
  appId: "1:560192833718:web:d974669f83fdb5a609be17",
  measurementId: "G-C55NK581HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
 
const provider = new GoogleAuthProvider ();

export const SignInWithGoogle = () => {
  signInWithPopup(authentication, provider)
  .then((res) => {
   const name = res.user.displayName;
   const profilePhoto = res.user.photoURL;

   localStorage.setItem('name', name);
   localStorage.setItem('photoImage', profilePhoto);
  })
  .catch((err) => {
    console.log(err);
  })
}

export const signingOut = () => {
  signOut(authentication)
  .then((res) => {
    console.log('logged out');
  })
  .catch((err) => {
    console.log(err);
  })
}
