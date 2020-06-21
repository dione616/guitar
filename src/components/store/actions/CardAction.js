export const showCardAC = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("sdf")
    console.log(getState())

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

    /* const prod = getState().product

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
      }) */
  }
}
export const addToCardAC = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()

    firestore
      .collection("products")
      .doc(id)
      .get()
      .then((snap) => {
        console.log(typeof snap.data())
        let cardProd = snap.data()
        cardProd.id = id
        dispatch({ type: "ADD_TO_CARD", product: cardProd })
      })
  }
}

export const removeFromCard = (id) => ({ type: "REMOVE_FROM_CARD", id })
