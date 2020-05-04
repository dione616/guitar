import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"

const App = (props) => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
    </div>
  )
}

export default App
