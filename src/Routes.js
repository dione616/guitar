import React from "react"
import Layout from "./Hoc/Layout"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import AddProducts from "./components/Products/AddProducts"
import Login from "./components/Login/Login"
import Dashboard from "./components/admin/Dashboard"
import EditProducts from "./components/Products/EditProducts"
import PrivateRoute from "./components/authRoutes/PrivateRoute"
import PublicRoute from "./components/authRoutes/PublicRoute"

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
        <PrivateRoute {...props} path="/products" exact component={Products} />
        <PrivateRoute {...props} path="/addproduct" exact component={AddProducts} />
        <PrivateRoute {...props} restricted={true} path="/addproduct/:id" exact component={EditProducts} />
        <PublicRoute {...props} restricted={true} path="/login" exact component={Login} />
      </Switch>
    </Layout>
  )
}

export default Routes
