import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyC-g4-0vb5yaSzEnYu5-wRqLiAXpQbRxSw",
    authDomain: "hometasks-20d1e.firebaseapp.com",
    databaseURL: "https://hometasks-20d1e.firebaseio.com",
    projectId: "hometasks-20d1e",
    storageBucket: "hometasks-20d1e.appspot.com",
    messagingSenderId: "72679120987"
  };


export const firebaseApp = firebase.initializeApp(config);
