import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA2KGk9zdVncA8R2gZ1aikQVGsGEhE1a7k",
    authDomain: "geekzone-6c65c.firebaseapp.com",
    databaseURL: "https://geekzone-6c65c-default-rtdb.firebaseio.com",
    projectId: "geekzone-6c65c",
    storageBucket: "geekzone-6c65c.appspot.com",
    messagingSenderId: "1020323203027",
    appId: "1:1020323203027:web:930a58e56a5aa3cc205126"
  };
  

  firebase.initializeApp(firebaseConfig)

  export default firebase