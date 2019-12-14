import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBiY9lNIUsgqMTN4D4lE40xxsW_WKAnN1U",
  authDomain: "mario-plan-da1c5.firebaseapp.com",
  databaseURL: "https://mario-plan-da1c5.firebaseio.com",
  projectId: "mario-plan-da1c5",
  storageBucket: "mario-plan-da1c5.appspot.com",
  messagingSenderId: "49611057777",
  appId: "1:49611057777:web:b62c3ee6be8a738dc509d0"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase