import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;