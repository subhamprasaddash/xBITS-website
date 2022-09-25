import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0-Fl11RW-WlcPnmXVlyj6UJRxN_YETEA",
  authDomain: "xbits-clientdb.firebaseapp.com",
  projectId: "xbits-clientdb",
  storageBucket: "xbits-clientdb.appspot.com",
  messagingSenderId: "226862919019",
  appId: "1:226862919019:web:5cf5b3040ef65919bab02e",
  measurementId: "G-S9S1PBYTDE",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
