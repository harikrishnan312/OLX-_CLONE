import firebase from 'firebase/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBhfifc6-tHjenyn7YJQARqKazesODX9lc",
    authDomain: "olxdemo-5de2a.firebaseapp.com",
    projectId: "olxdemo-5de2a",
    storageBucket: "olxdemo-5de2a.appspot.com",
    messagingSenderId: "298264149239",
    appId: "1:298264149239:web:67d6d306bdaf21c63f67f2",
    measurementId: "G-3SL3L4RQ3L"
  };

  export  default firebase.initializeApp(firebaseConfig);
//   export const auth = Firebase.auth();
//  export const firestore = Firebase.firestore();
 