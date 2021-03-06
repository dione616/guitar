let initState = {
  prodData: [{ prodData: { title: "title", description: "desc", image: "", price: 155, id: "293ujSHmZSeP5nbJv1JG" } }],
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      console.log("created product", action.product)
      return { ...state }
    case "CREATE_PRODUCT_ERROR":
      console.log("Error", action.err)
      return state
    case "UPDATE_PRODUCT":
      console.log("UPDATE_PRODUCT", action.newProd)
      let stateCopy = { ...state, prodData: [...state.prodData] }
      console.log("UPdate pro copy:", stateCopy)

      let st = stateCopy.prodData.filter((el) => {
        console.log(el)

        return el.prodData.id !== action.newProd.prodData.id
      })
      /* st.push(action.newProd) */
      console.log("stBefore:", st)
      st.push(action.newProd)
      console.log("stAfter:", st)

      /* let neeS = (stateCopy.prodData:)
      console.log("ST:", neeS) */
      let nnn = {}
      nnn.prodData = st

      console.log("ASDASD--------------:", nnn)

      return nnn /* (stateCopy.prodData = st) */
    case "UPDATE_PRODUCT_ERROR":
      console.log("Error", action.err, action.product)
      return state
    case "SHOW_HIGHER":
      return { ...state, prodData: action.product }
    case "RESET":
      return { ...state, prodData: action.products }

    case "MORE":
      console.log("MORE", action.products)
      return { ...state, prodData: action.products }

    /*-----------SHOW PRODUCTS-----------*/
    /*-----------SHOW PRODUCTS-----------*/
    /*-----------SHOW PRODUCTS-----------*/

    case "SHOW":
      console.log("Show reducer", action.products)
      return { ...state, prodData: action.products }

    case "SORT":
      console.log("SORT reducer", action.products)
      return { ...state, prodData: action.products }
    case "SEARCH":
      console.log("SEARCH reducer", action.newProd)
      return { ...state, prodData: action.newProd }
    case "DELETE":
      console.log("DELETE reducer", action.prod)
      return action.prod

    default:
      return state
  }
}

export default productReducer
