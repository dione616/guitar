const initState = []

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTH":
      console.log("Auth success", action.user)
      return state
    case "AUTH_ERROR":
      console.log("Error", action.err, action.user)
      return state
    default:
      return state
  }
}
export default authReducer
