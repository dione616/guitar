import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"

export const reset = (productss, paginate) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let products = []
    const firestore = getFirestore()
    firestore
      .collection("products")
      .limit(5)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          let prodData = doc.data()
          let prodId = doc.id
          products.push({ prodData, prodId })
        })
        dispatch({ type: "RESET", products })
      })
      .catch((err) => {
        dispatch({ type: "RESET_ERROR", err })
      })
  }
}
