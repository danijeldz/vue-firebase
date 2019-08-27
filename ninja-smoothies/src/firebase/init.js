import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbisxdGyAPlhiCmnG5grzZwYxAD4wf7Sk",
  authDomain: "ninja-smoothies-dzankic.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-dzankic.firebaseio.com",
  projectId: "ninja-smoothies-dzankic",
  storageBucket: "ninja-smoothies-dzankic.appspot.com",
  messagingSenderId: "390678782168"
};
const firebaseApp = firebase.initializeApp(config);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true });

//Export Firebase database
export default firebaseApp.firestore();
