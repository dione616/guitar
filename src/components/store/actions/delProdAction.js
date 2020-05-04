import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"
export const delProd = (id, products) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const prod = getState().product

    const firestore = getFirestore()
    firestore
      .collection("products")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE", prod })
      })
      .catch((err) => {
        dispatch({ type: "DELETE_ERROR", err })
      })
  }
}
