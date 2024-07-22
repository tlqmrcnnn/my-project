// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGi17k5209QvnsPsIU6u3MCANnA6LbbTs",
    authDomain: "my-project-25d9d.firebaseapp.com",
    projectId: "my-project-25d9d",
    storageBucket: "my-project-25d9d.appspot.com",
    messagingSenderId: "526579837029",
    appId: "1:526579837029:web:90ec1a137ec13f9098fe8c"
  };

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firebase Authentication ve Firestore hizmetlerini alın
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
