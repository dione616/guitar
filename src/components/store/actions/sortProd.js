export const sortProd = (product, pag) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let products = []
    const firestore = getFirestore()
    firestore
      .collection("products")
      .limit(pag)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          let prodData = doc.data()
          let prodId = doc.id
          products.push({ prodData, prodId })
        })
        products.sort((a, b) => {
          if (a.prodData.price > b.prodData.price) return 1
        })
        console.log("SORTED?:", products)

        dispatch({ type: "SORT", products })
      })
      .catch((err) => {
        dispatch({ type: "SHOW_ERROR", err })
      })
  }
}
