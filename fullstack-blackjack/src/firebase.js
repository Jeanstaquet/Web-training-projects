import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB4-67d3fxF3RHmPoM7NyVPCol61J4TtIQ",
  authDomain: "wtsclone-e95e4.firebaseapp.com",
  databaseURL: "https://wtsclone-e95e4.firebaseio.com",
  projectId: "wtsclone-e95e4",
  storageBucket: "wtsclone-e95e4.appspot.com",
  messagingSenderId: "92290601071",
  appId: "1:92290601071:web:aa530c4f344bf3b69bbd9a",
  measurementId: "G-S9V57272P2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;