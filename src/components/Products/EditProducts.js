import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import firebase from "../../config/fbConfig"
import { storage } from "../../config/fbConfig"
import { connect } from "react-redux"
import { editProduct } from "../store/actions/productAction"

import { reduxForm } from "redux-form"

let EditProducts = (props) => {
  const returnId = () => {
    /* props.click(id) */
    props.click(props.id)
  }

  const [state, setState] = useState("")

  const allInputs = { imgUrl: "" }
  const [imageAsFile, setImageAsFile] = useState("")
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  const handleChange = (e) => {
    let newFormData = { ...state }
    console.log(newFormData, props)

    let newElement = { ...newFormData[e.target.id] }
    newElement = e.target.value

    newFormData[e.target.id] = newElement
    newFormData.id = props.props.id

    setState(newFormData)
    console.log(state)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)

    props.editProduct(state)
  }

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile((imageAsFile) => image)
    console.log(image)
    console.log(imageAsFile)

    setState((state) => (state = { ...state, image }))
  }

  const handleFireBaseUpload = (e) => {
    e.preventDefault()
    console.log("start of upload")
    // async magic goes here...

    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
      },
      (err) => {
        //catches the errors
        console.log(err)
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({ ...prevObject, imgUrl: fireBaseUrl }))
            setState((state) => (state = { ...state, fireBaseUrl }))
          })
      }
    )
    console.log("End of upload")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input type="text" id="title" placeholder="title" onChange={handleChange} />
      </div>
      <div className="input-field">
        <input type="number" id="price" placeholder="price" onChange={handleChange} />
      </div>
      <div className="input-field">
        <input type="text" id="description" placeholder="description" onChange={handleChange} />
      </div>

      {/* <Fileuploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref("products")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              filename={(filename) => this.storeFilename(filename)}
            /> */}

      <input type="file" onChange={handleImageAsFile} />
      <div className="card_btn">
        <button onClick={handleFireBaseUpload} className="btn">
          Upload Image
        </button>

        <button onClick={handleSubmit} className="btn">
          Update Product
        </button>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (product) => {
      dispatch(editProduct(product))
    },
  }
}

/* export default connect(null, mapDispatchToProps)(EditProducts) */

EditProducts = connect(null, mapDispatchToProps)(EditProducts)

export default reduxForm({
  form: "example", // a unique name for this form
})(EditProducts)
