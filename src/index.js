import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./components/store/reducers/rootReducer"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import thunkMiddleware from "redux-thunk"
import reduxThunk from "redux-thunk"
import { reduxFirestore, getFirestore, createFirestoreInstance, firestoreReducer } from "redux-firestore"
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase"
import fbConfig from "./config/fbConfig"
import firebase from "firebase/app"

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }), thunkMiddleware),
    reduxFirestore(fbConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
const rrfConfig = {
  userProfile: "users",
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App user={user} />
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
  )
})
serviceWorker.unregister()
/* import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { createStore } from "redux"
import rootReducer from "./components/store/reducers/rootReducer"
import { Provider } from "react-redux"

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") 
)
*/
