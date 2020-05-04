const initState = []
const logoutReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGOUT":
      console.log("Logout success", action.user)
      return state
    case "LOGOUT_ERROR":
      console.log("Error", action.err)
      return state
    default:
      return state
  }
}

export default logoutReducer
