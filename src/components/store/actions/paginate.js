import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"

export const paginate = (prodCount) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let products = []
    const firestore = getFirestore()
    firestore
      .collection("products")
      .limit((prodCount += 5))
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          let prodData = doc.data()
          let prodId = doc.id
          products.push({ prodData, prodId })
        })
        dispatch({ type: "MORE", products })
      })
      .catch((err) => {
        dispatch({ type: "MORE_ERROR", err })
      })
  }
}
