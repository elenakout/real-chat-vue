import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhoskJPYjyxn7jHA7RgeX5Za5cigoL3Cw",
    authDomain: "test1-86b27.firebaseapp.com",
    databaseURL: "https://test1-86b27.firebaseio.com",
    projectId: "test1-86b27",
    storageBucket: "test1-86b27.appspot.com",
    messagingSenderId: "613441999790"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()