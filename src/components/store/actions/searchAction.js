export const search = (productName, pag) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let products = []
    const firestore = getFirestore()
    firestore
      .collection("products")
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
        console.log(productName, products)

        let newProd = []
        let found = products.map((product) => {
          if (product.prodData.title == productName.text) {
            console.log(productName)
            newProd.push(product)
          }
        })

        console.log("SEARCHED?:", newProd)

        dispatch({ type: "SEARCH", newProd })
      })
      .catch((err) => {
        dispatch({ type: "SHOW_ERROR", err })
      })
  }
}
