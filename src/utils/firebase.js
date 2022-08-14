import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBbUPqcLiTBlsWNdAUQJux8N4dKmuNuG9s",
  authDomain: "fir-crud-31824.firebaseapp.com",
  projectId: "fir-crud-31824",
  storageBucket: "fir-crud-31824.appspot.com",
  messagingSenderId: "815941135788",
  appId: "1:815941135788:web:447f66fc390272d60bde09",
  measurementId: "G-X6E088ELZK"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;