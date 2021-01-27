import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBc17hpfixkjJ2Yt4Xwa_odjceAjE9jnNA",
    authDomain: "dairy-shop-2987a.firebaseapp.com",
    databaseURL: "https://dairy-shop-2987a-default-rtdb.firebaseio.com",
    projectId: "dairy-shop-2987a",
    storageBucket: "dairy-shop-2987a.appspot.com",
    messagingSenderId: "764161454057",
    appId: "1:764161454057:web:21c9cbc0cbe0a16d522578",
    measurementId: "G-PP7HVCWXEE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }