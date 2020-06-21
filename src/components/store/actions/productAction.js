import { firebaseProducts } from "../../../config/fbConfig"
import { storage } from "../../../config/fbConfig"
export const createProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB

    const firestore = getFirestore()
    firestore
      .collection("products")
      .add({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.fireBaseUrl,
      })
      .then(() => {
        dispatch({ type: "CREATE_PRODUCT" })
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PRODUCT_ERROR", err })
      })
  }
}
export const editProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
    console.log(product)

    const firestore = getFirestore()
    firestore
      .collection("products")
      .doc(product.id)
      .set({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.fireBaseUrl,
      })
      .then(() => {
        dispatch({
          type: "UPDATE_PRODUCT",
          newProd: {
            prodData: {
              image: product.fireBaseUrl,
              title: product.title,
              description: product.description,
              price: product.price,
              id: product.id,
            },
          },
        })
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_PRODUCT_ERROR", err })
      })
  }
}
