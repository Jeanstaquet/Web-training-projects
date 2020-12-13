import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCmXjwaVbRraK5e8ZLQu-P5d-NuO85ramQ",
  authDomain: "whatsapp-on-steroids.firebaseapp.com",
  projectId: "whatsapp-on-steroids",
  storageBucket: "whatsapp-on-steroids.appspot.com",
  messagingSenderId: "85933631739",
  appId: "1:85933631739:web:9d00bfe7ab5687ccc0685e",
  measurementId: "G-HHK7WJ2Y26"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;