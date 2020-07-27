// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBuKtZOt1q0pODVfcjJlXYN2st2e71EVyk",
  authDomain: "awesome-todo-e892e.firebaseapp.com",
  databaseURL: "https://awesome-todo-e892e.firebaseio.com",
  projectId: "awesome-todo-e892e",
  storageBucket: "awesome-todo-e892e.appspot.com",
  messagingSenderId: "564419794616",
  appId: "1:564419794616:web:ca5f9e5508fd784133464d",
  measurementId: "G-8DVPDBLJ7D"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {
  firebaseAuth,
  firebaseDb
}