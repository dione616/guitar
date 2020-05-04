import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">
              {" "}
              <a href="/"> WAVES</a>
            </div>
          </div>
          <div className="right">
            <Link to="/login" className="btn-login">
              <Button className="header_button">Login</Button>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
