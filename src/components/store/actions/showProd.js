import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"

export const showProd = () => {
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
        dispatch({ type: "SHOW", products })
      })
      .catch((err) => {
        dispatch({ type: "SHOW_ERROR", err })
      })
  }
}
