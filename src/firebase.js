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
  export const shoppingTaskRef = firebase.database().ref('shoppingTasks');
  export const workTaskRef = firebase.database().ref('workTasks');
  export const schoolTaskRef = firebase.database().ref('schoolTasks');
  export const homeTaskRef = firebase.database().ref('homeTasks');
  export const otherTaskRef = firebase.database().ref('otherTasks');
  export const completeTaskRef = firebase.database().ref('completeTasks');
