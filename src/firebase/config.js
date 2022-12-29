import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJK1Lj-7aXlLbHEiq4XmaVw0zEF3vUAHc",
  authDomain: "mymoney-f037b.firebaseapp.com",
  projectId: "mymoney-f037b",
  storageBucket: "mymoney-f037b.appspot.com",
  messagingSenderId: "731144137541",
  appId: "1:731144137541:web:bde42368c1b0114bffec2c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }