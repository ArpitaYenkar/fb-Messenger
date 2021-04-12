import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAKWVRw5v_9NyfsDOYnXxsi5GsMLTnzMSg",
    authDomain: "facebook-messenger-clone-73777.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-73777-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-73777",
    storageBucket: "facebook-messenger-clone-73777.appspot.com",
    messagingSenderId: "1087398607843",
    appId: "1:1087398607843:web:5d35ac841de40c18bdfed6",
    measurementId: "G-SHLFKJQC5X"
  });

  const db = firebaseApp.firestore();

  export default db;