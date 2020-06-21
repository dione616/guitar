import React from "react"
import { Link } from "react-router-dom"
import EditProducts from "./EditProducts"

const Card = (props) => {
  console.log(props)

  const returnId = () => {
    /* props.click(id) */
    props.click(props.id)
  }

  const addToCard = () => {
    props.addToCard(props.id)
  }

  const removeFromCard = () => {
    props.removeFromCard(props.keyId)
  }

  return (
    <div className="card_wrapper">
      <div className="card_thmb" style={{ background: `#fff url(${props.image})` }} />
      <div className="card_info">
        <div className="title_desc">
          <div className="card_title">{props.title}</div>
          <div className="card_description">{props.description}</div>
          <div className="card_number">{props.price}</div>
        </div>
      </div>

      <EditProducts props={props} />
      {props.addToCard ? (
        <div className="product_buttons">
          <button className="card_btn" onClick={returnId}>
            Delete
          </button>
          <button className="card_btn" onClick={addToCard}>
            Add to Card
          </button>
        </div>
      ) : (
        <button className="card_btn" onClick={removeFromCard}>
          Remove
        </button>
      )}
    </div>
  )
}

export default Card
