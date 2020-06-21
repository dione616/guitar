import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"

export const showProd = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let products = []
    let prodData
    let prodId
    const firestore = getFirestore()
    firestore
      .collection("products")
      .limit(50)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          prodData = doc.data()
          prodData.id = doc.id
          prodId = doc.id
          products.push({ prodData })
        })
        dispatch({ type: "SHOW", products })
      })
      .catch((err) => {
        dispatch({ type: "SHOW_ERROR", err })
      })
  }
}
