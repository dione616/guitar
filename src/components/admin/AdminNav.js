import React from "react"
import { Link, NavLink } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import firebase from "../../config/fbConfig"
import { connect } from "react-redux"

import { logoutAction } from "../store/actions/logoutAction"

class AdminNav extends React.Component {
  links = [
    {
      title: "Products",
      linkTo: "/products",
    },
    {
      title: "Add Product",
      linkTo: "/addproduct",
    },
    {
      title: "Card",
      linkTo: "/card",
    },
  ]

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logoutAction()
  }
  render() {
    return (
      <div className="admin_wrapper">
        <NavLink to="/card">Card</NavLink>

        <a className="admin_btn" href="/addproduct">
          Add Product
        </a>
        <button onClick={this.handleSubmit} className="admin_btn_logout">
          Logout
        </button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => {
      dispatch(logoutAction())
    },
  }
}

export default connect(null, mapDispatchToProps)(AdminNav)
