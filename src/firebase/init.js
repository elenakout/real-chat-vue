import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()
