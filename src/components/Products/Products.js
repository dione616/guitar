import React, { Component } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import AdminLayout from "../../Hoc/AdminLayout"
import { connect } from "react-redux"

import { reduxForm, Field } from "redux-form"
import { delProd } from "../store/actions/delProdAction"
import { showProd } from "../store/actions/showProd"
import { showHigher } from "../store/actions/showHigher"
import { sortProd } from "../store/actions/sortProd"
import { search } from "../store/actions/searchAction"

import { reset } from "../store/actions/reset"

import ProductCard from "./ProductCard"
import { paginate } from "../store/actions/paginate"
import { showCardAC, addToCardAC } from "../store/actions/CardAction"

class Products extends Component {
  state = {
    isLoading: true,
    products: [],
    paginate: 5,
  }

  componentDidMount() {
    console.log(this.props)

    this.props.showProd()
    this.setState({ isLoading: false, products: this.props.products })
  }

  //delProdFromDB
  submitClick = (e) => {
    console.log(e)
    console.log(this.props.product)

    this.props.delProd(e, this.props.product)
  }

  showHigherThan = (e) => {
    this.props.showHigher(this.props.products)
  }
  paginateProducts = (e) => {
    this.props.paginate(this.state.paginate)
    let count = this.state.paginate
    count += 5
    this.setState({ paginate: count })
  }
  reset = (e) => {
    this.props.reset(this.props.products)
  }
  sortPrice = () => {
    this.props.sortProd(this.props.products, this.state.paginate)
  }
  searchByTitle = (title) => {
    title.preventDefault()
    console.log(title.target)

    this.props.search("Fender")
  }

  addToCard = (id) => {
    this.props.addToCard(id)
  }

  onSubmit = (e) => {
    console.log(e.text)

    this.props.search(e)
  }

  renderInput = ({ input, meta, placeholder, type }) => (
    <div className="input_field">
      <input className="label" {...input} placeholder={placeholder} type={type} />
    </div>
  )

  render() {
    const { products, productHigher, product, sortProd, search } = this.props
    const { error, handleSubmit, pristine, reset, submitting } = this.props

    console.log(this.props.product)

    return (
      <AdminLayout>
        <div className="container">
          <button onClick={this.showHigherThan}>showHigherThan 100</button>
          <button onClick={this.sortPrice}>Sort by price</button>

          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="input_wrapp">
              <Field
                className="form_input"
                name="text"
                component={this.renderInput}
                type="text"
                placeholder="Search by Title"
                label="text"
              />
            </div>
            <button type="submit" /* onSubmit={handleSubmit(this.onSubmit)} */ className="btn" disabled={submitting}>
              Search
            </button>
          </form>
          <button onClick={this.reset}>Reset</button>
          <div className="flex_container">
            {product.prodData ? (
              product.prodData.map((product, i) => (
                <div className="card" key={i}>
                  <ProductCard
                    id={product.prodData.id}
                    click={this.submitClick}
                    addToCard={this.addToCard}
                    price={product.prodData.price}
                    title={product.prodData.title}
                    description={product.prodData.description}
                    image={product.prodData.image}
                  />
                </div>
              ))
            ) : (
              <div>Connection</div>
            )}
          </div>
          <div className="admin_progress">
            {this.state.isLoading ? <CircularProgress thickness={7} style={{ color: "#98c5e9" }} /> : ""}
          </div>
          <button className="load_more" onClick={this.paginateProducts}>
            Load More
          </button>
        </div>
      </AdminLayout>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("State:", state)

  return {
    products: state.firestore.ordered.products,
    productHigher: state.product,
    product: state.product,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delProd: (id) => {
      dispatch(delProd(id))
    },

    showHigher: (product) => {
      dispatch(showHigher(product))
    },
    reset: (product) => {
      dispatch(reset(product))
    },
    showProd: () => {
      dispatch(showProd())
    },
    paginate: (product) => {
      dispatch(paginate(product))
    },
    sortProd: (product, pag) => {
      dispatch(sortProd(product, pag))
    },
    search: (title) => {
      dispatch(search(title))
    },
    addToCard: (id) => {
      dispatch(addToCardAC(id))
    },
    removeFromCard: (e) => {
      console.log(e)
    },
  }
}

/* export default connect(mapStateToProps, mapDispatchToProps)(Products) */
Products = connect(mapStateToProps, mapDispatchToProps)(Products)
export default reduxForm({ form: "products" })(Products)
