import firebase from "firebase/app"
import "firebase/app"
import "firebase/firestore"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyCXY96xgaqftE_xkvGphQ-FHUhvGT3C7MA",
  authDomain: "products-2cb52.firebaseapp.com",
  databaseURL: "https://products-2cb52.firebaseio.com",
  projectId: "products-2cb52",
  storageBucket: "products-2cb52.appspot.com",
  messagingSenderId: "741250088063",
  appId: "1:741250088063:web:d00d1d848b136a8f58134a",
  measurementId: "G-00DEW5EBPZ",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const firebaseDB = firebase.database()
const db = firebase.firestore()

const firebaseProducts = firebaseDB.ref("products")

const storage = firebase.storage()

export { firebaseProducts, storage, db }
export default firebase
