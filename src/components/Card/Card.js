import React, { Component } from "react"
import { connect } from "react-redux"
import { showCardAC, removeFromCard } from "../store/actions/CardAction.js"
import ProductCard from "../Products/ProductCard"

class Card extends Component {
  componentDidMount() {}
  removeFromCard = (id) => {
    this.props.removeFromCard(id)
  }
  render() {
    return (
      <div className="user_dashboard">
        <div className="container">
          <div className="h1">
            <h1>This is your card</h1>
          </div>
          {/*fix ids*/}
          <div className="flex_container">
            {this.props.card ? (
              this.props.card.card.map((el, i) => (
                <div key={i} className="wrapp">
                  <ProductCard
                    id={el.id}
                    price={el.price}
                    title={el.title}
                    description={el.description}
                    image={el.image}
                    removeFromCard={this.removeFromCard}
                    keyId={i}
                  />
                </div>
              ))
            ) : (
              <div>No items</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log(state)

  return {
    card: state.card,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeFromCard: (id) => {
      dispatch(removeFromCard(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
