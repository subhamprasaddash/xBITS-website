import { firebase } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  query,
  collection,
  where,
  googleProvider,
  getDocs,
  addDoc,
} from "firebase/firestore";
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
const auth = getAuth(firebase);
const db = firebase.firestore();
const provider = new GoogleAuthProvider();

//***ADD THIS AFTER ENABLIGING GOOGLE AUTH***

// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const getquery = query(
//       collection(db, "users"),
//       where("uid", "==", user.uid)
//     );
//     const docs = await getDocs(getquery);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent! Check your email.");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

export default firebase;
export {
  auth,
  db,
  provider,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
