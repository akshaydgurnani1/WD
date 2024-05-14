
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDyVVAAMLHo8o-cwPsXzpq938vN36n3yU",
  authDomain: "portfolio-e3dd2.firebaseapp.com",
  projectId: "portfolio-e3dd2",
  storageBucket: "portfolio-e3dd2.appspot.com",
  messagingSenderId: "615571456482",
  appId: "1:615571456482:web:e1f4ecfb4bba5c2e5ef9bb",
  measurementId: "G-3J84WQGP38"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};