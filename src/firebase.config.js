
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk_lu5wh-ZF3zEiOLfEIE25apx-fZ9feo",
  authDomain: "bed-and-bunk.firebaseapp.com",
  projectId: "bed-and-bunk",
  storageBucket: "bed-and-bunk.appspot.com",
  messagingSenderId: "1040205152075",
  appId: "1:1040205152075:web:522424da69e81081b632ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);