import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgXpYnsAav6F_qhSYkuK4BP6k8vL4aAFY",
  authDomain: "abyawebsite-277a2.firebaseapp.com",
  projectId: "abyawebsite-277a2",
  storageBucket: "abyawebsite-277a2.appspot.com",
  messagingSenderId: "281324164256",
  appId: "1:281324164256:web:eda5663aa24ad401b7e5c5",
  measurementId: "G-3QSXB65LJN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);