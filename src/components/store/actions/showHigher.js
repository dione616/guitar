import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"
export const showHigher = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    /* let newProduct = []
    product.map((el) => {
      let intPrice = parseInt(el.price, 10)
      if (intPrice >= 100) {
        newProduct.push(el)
      }
    })

    dispatch({ type: 'SHOW_HIGHER', newProduct }) */

    let product = []
    const firestore = getFirestore()
    firestore
      .collection("products")
      .limit(15)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          if (parseInt(doc.data().price) > 100) {
            let prodData = doc.data()
            let prodId = doc.id
            product.push({ prodData, prodId })
          }
        })
        dispatch({ type: "SHOW_HIGHER", product })
      })
      .catch((err) => {
        dispatch({ type: "SHOW_ERROR", err })
      })
  }
}
