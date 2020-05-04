import firebase from "../../../config/fbConfig"
export const auth = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        //use react-router
        dispatch({ type: "AUTH", user })
      })
      .catch((err) => {
        dispatch({ type: "AUTH_ERROR", err })
      })
  }
}
