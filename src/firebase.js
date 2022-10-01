// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyCz2ruWw7K2CBFC4NStH_VQXCTUZTeMYEg',
  authDomain: 'clone-828b7.firebaseapp.com',
  projectId: 'clone-828b7',
  storageBucket: 'clone-828b7.appspot.com',
  messagingSenderId: '1073894709259',
  appId: '1:1073894709259:web:ea1eca3369eb70a6914f0e',
  measurementId: 'G-E54BSPQV2X',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
