import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwLEGXGjVDQYjjEUtcUBa5usoJpluLcOY",
    authDomain: "facebook-clone-ada22.firebaseapp.com",
    databaseURL: "https://facebook-clone-ada22.firebaseio.com",
    projectId: "facebook-clone-ada22",
    storageBucket: "facebook-clone-ada22.appspot.com",
    messagingSenderId: "643161341586",
    appId: "1:643161341586:web:d3b8d6c04312b986d0304b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;