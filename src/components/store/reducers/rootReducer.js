import { combineReducers } from "redux"
import authReducer from "./authReducer"
import productReducer from "./productReducer"
import logoutReducer from "./logoutReducer"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"
import cardReducer from "./cardReducer"

import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
  auth: authReducer,
  logout: logoutReducer,
  product: productReducer,
  form: formReducer,
  firestore: firestoreReducer,
  card: cardReducer,
})

export default rootReducer
