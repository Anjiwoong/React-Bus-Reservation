import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REREACT_APP_FB_STORAGE_BUCKETACT_APP_FB_API_KEY,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

const firestore = firebase.firestore();

export { firestore, db };
