import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
var config = {
   
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()
