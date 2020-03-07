import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCMc4ekogjsJNnXXJR0iPwV6tKva4g7fnI",
authDomain: "pokemon-227e9.firebaseapp.com",
databaseURL: "https://pokemon-227e9.firebaseio.com",
projectId: "pokemon-227e9",
storageBucket: "pokemon-227e9.appspot.com",
messagingSenderId: "281111916786",
appId: "1:281111916786:web:9cbe84936897a47f56206b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;