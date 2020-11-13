import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmhvYiZbaWvXzf0poLYLmSW__qk1G63V8",
    authDomain: "react-burger-app-ffe1a.firebaseapp.com",
    databaseURL: "https://react-burger-app-ffe1a.firebaseio.com",
    projectId: "react-burger-app-ffe1a",
    storageBucket: "react-burger-app-ffe1a.appspot.com",
    messagingSenderId: "1045421883272",
    appId: "1:1045421883272:web:b698a73925bc0e55b5043d",
    measurementId: "G-JJT7S976YP"
 });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}