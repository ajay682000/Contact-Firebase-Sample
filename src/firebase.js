import firebase from'firebase';

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
 
    apiKey: "AIzaSyBZ9weLeWuwXWPv5_K7VhDoLK4Fcezh8kA",
    authDomain: "contact-form-example.firebaseapp.com",
    databaseURL: "https://contact-form-example.firebaseio.com",
    projectId: "contact-form-example",
    storageBucket: "contact-form-example.appspot.com",
    messagingSenderId: "796355944119",
    appId: "1:796355944119:web:6a04a1615ce9f3418bb732"
 
  
});

var db = firebaseApp.firestore();

export { db };