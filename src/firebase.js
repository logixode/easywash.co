import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-B_bKiQRMGoFKKAuqE_2ofxyjyL0nUZc",
  authDomain: "easywash-274e9.firebaseapp.com",
  projectId: "easywash-274e9",
  storageBucket: "easywash-274e9.appspot.com",
  messagingSenderId: "727707947533",
  appId: "1:727707947533:web:cd53efa5225f85b779bb44",
  measurementId: "G-P7CNLHWZVD",
};
// Initialize Firebase
let firebaseInit = firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth;
export default firebaseInit;
