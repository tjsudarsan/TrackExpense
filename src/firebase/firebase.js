import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDZe2eDXSMbtKAYj_ISJaUAeqINr13KyvM",
    authDomain: "trackexpense-eed80.firebaseapp.com",
    databaseURL: "https://trackexpense-eed80.firebaseio.com",
    projectId: "trackexpense-eed80",
    storageBucket: "trackexpense-eed80.appspot.com",
    messagingSenderId: "577885738715"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });

export {firebase , googleAuthProvider, database as default};