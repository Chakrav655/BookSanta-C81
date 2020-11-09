import firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyAvJ1FjqtpIvktq7XYeQBNKfzcd0Y2O2nk",
  authDomain: "book-santa-v2.firebaseapp.com",
  databaseURL: "https://book-santa-v2.firebaseio.com",
  projectId: "book-santa-v2",
  storageBucket: "book-santa-v2.appspot.com",
  messagingSenderId: "802167536011",
  appId: "1:802167536011:web:6c5d5d313e5d13853a178e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()


  