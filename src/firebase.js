import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCqVXGXou8HzPKtVZBZxVkVSW2d8NW-3UE",
    authDomain: "facebook-clone1-6a396.firebaseapp.com",
    projectId: "facebook-clone1-6a396",
    storageBucket: "facebook-clone1-6a396.appspot.com",
    messagingSenderId: "1068998830979",
    appId: "1:1068998830979:web:852ab0ef8a5c6c4794e4b6"
  });

  const auth = firebase.auth();
  const provider=new firebase.auth.FacebookAuthProvider();

  const db=firebaseConfig.firestore();
  const storage=firebase.storage();

  export { auth, provider, db, storage}

