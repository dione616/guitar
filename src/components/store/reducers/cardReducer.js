let initState = {
  card: [
    /* { id: 0, title: "title", description: "desc", image: "", price: 155 } */
  ],
}

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      let newProd = action.product

      return { ...state, card: [...state.card, newProd] }
    }

    case "SHOW_CARD": {
      return state
    }
    case "REMOVE_FROM_CARD": {
      console.log(action.id)
      let statecopy = { ...state, card: [...state.card] }
      console.log(statecopy)

      let filteredState = statecopy.card.filter((el, i) => {
        return i !== action.id
      })
      console.log(filteredState)

      return { ...state, card: filteredState }
    }

    default:
      return state
  }
}

export default cardReducer
