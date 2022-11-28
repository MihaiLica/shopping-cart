import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYix1DHEkLD1zK3IOSd2ibI0vOKBeTom4",
  authDomain: "shopping-cart-90ad5.firebaseapp.com",
  projectId: "shopping-cart-90ad5",
  storageBucket: "shopping-cart-90ad5.appspot.com",
  messagingSenderId: "113558861963",
  appId: "1:113558861963:web:f6eb88866cb7af2ba37c8e"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;