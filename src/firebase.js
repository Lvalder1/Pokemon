import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCKdfjc6HSbdwnvwPCAJTqieymQfQCnNkk",
authDomain: "pokemon-1-6d5d8.firebaseapp.com",
databaseURL: "https://pokemon-1-6d5d8.firebaseio.com",
projectId: "pokemon-1-6d5d8",
storageBucket: "pokemon-1-6d5d8.appspot.com",
messagingSenderId: "111020725330",
appId: "1:111020725330:web:18a96791dc0818d2163b8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;