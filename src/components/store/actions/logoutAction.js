import firebase from "../../../config/fbConfig"
export const logoutAction = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB

    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Log out success!!!")
        },
        (error) => {
          console.log("Error:", error)
        }
      )
  }
}
