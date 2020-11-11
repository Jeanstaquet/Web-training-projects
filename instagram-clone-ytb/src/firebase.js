import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyDn0knpCZOAVrmahLXyvkRiQRFlpCRZ9qo",
  authDomain: "ig-clone-ac20a.firebaseapp.com",
  databaseURL: "https://ig-clone-ac20a.firebaseio.com",
  projectId: "ig-clone-ac20a",
  storageBucket: "ig-clone-ac20a.appspot.com",
  messagingSenderId: "892345685900",
  appId: "1:892345685900:web:cfb7435e700e6776e5a8a9",
  measurementId: "G-2JV5NVQNDD"

})


const db = firebaseApp.firestore();
const auth = firebase.auth;
const storage = firebase.storage();

export {db, auth, storage}