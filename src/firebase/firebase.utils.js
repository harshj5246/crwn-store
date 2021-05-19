import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import { useRef } from 'react';


const config = {
    apiKey: "AIzaSyBpymDXmkiEUEof44EuPGXKKwS-oFo3qsE",
    authDomain: "crw-db-fc3f3.firebaseapp.com",
    projectId: "crw-db-fc3f3",
    storageBucket: "crw-db-fc3f3.appspot.com",
    messagingSenderId: "211931415807",
    appId: "1:211931415807:web:eb45bd2783c24d936678ca",
    measurementId: "G-BD2H05RTTN"
  };
  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

  