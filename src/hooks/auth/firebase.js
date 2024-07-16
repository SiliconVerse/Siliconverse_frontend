// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUaS6Wek0c7x5RhKfFmDplTNA0ZxQhG2I',
  authDomain: 'siliconverse-login-signup.firebaseapp.com',
  projectId: 'siliconverse-login-signup',
  storageBucket: 'siliconverse-login-signup.appspot.com',
  messagingSenderId: '623639703725',
  appId: '1:623639703725:web:539d9b81c0239906c8d624',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
