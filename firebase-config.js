// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxwgtbrA2RVCwEwbn5_FDRJ20cN-IYAl0",
  authDomain: "cif225.firebaseapp.com",
  projectId: "cif225",
  storageBucket: "cif225.firebasestorage.app",
  messagingSenderId: "852933662256",
  appId: "1:852933662256:web:e9ba1b9911f3b2e1ed3ff5",
  measurementId: "G-J9WTSQ00YL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
