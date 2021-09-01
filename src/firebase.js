import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6PR1je_Bo2RHF_oZwwXx9_PJFOFk78nY",
    authDomain: "beemail-33db0.firebaseapp.com",
    projectId: "beemail-33db0",
    storageBucket: "beemail-33db0.appspot.com",
    messagingSenderId: "775737635377",
    appId: "1:775737635377:web:e4197a93f05d4a3106db10"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };