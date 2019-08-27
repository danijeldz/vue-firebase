import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBc35wbNzzXgekYwBOJkfjsXge1nDH2CAc",
  authDomain: "udemy-ninja-chat-d5ecf.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-d5ecf.firebaseio.com",
  projectId: "udemy-ninja-chat-d5ecf",
  storageBucket: "",
  messagingSenderId: "100556457673",
  appId: "1:100556457673:web:115c33de7c7334b9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
