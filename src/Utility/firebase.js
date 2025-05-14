
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCdrhlDoTLEnWfIs972tCF7bU_0DaRRfic",
  authDomain: "clone-94f8c.firebaseapp.com",
  projectId: "clone-94f8c",
  storageBucket: "clone-94f8c.firebasestorage.app",
  messagingSenderId: "820044527891",
  appId: "1:820044527891:web:2aa9a4366e100117f182e6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore;