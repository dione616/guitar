import React, { Component, useState } from "react"
import { connect } from "react-redux"

import { createProduct } from "../store/actions/productAction"

import CircularProgress from "@material-ui/core/CircularProgress"
import firebase from "../../config/fbConfig"
import { storage } from "../../config/fbConfig"
import AdminLayout from "../../Hoc/AdminLayout"

const AddProducts = (props) => {
  const [state, setState] = useState(0)

  const allInputs = { imgUrl: "" }
  const [imageAsFile, setImageAsFile] = useState("")
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  const handleChange = (e) => {
    /* if (e.target.files[0] != null) {
      const image = e.target.files[0]
      console.log(image)
    } */

    let newFormData = { ...state }
    console.log(e.target)

    let newElement = { ...newFormData[e.id] }

    newElement = e.target.value
    console.log(imageAsFile)

    newFormData[e.target.id] = newElement
    setState(newFormData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    props.createProduct(state)
    props.history.push("/products")
  }

  console.log(state)

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile((imageAsFile) => image)
    setState((state) => (state = { ...state, image }))
    console.log(image)
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
        console.log(snapShot)
      },
      (err) => {
        //catches the errors
        console.log(err)
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
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
  }

  return (
    <AdminLayout>
      <div className="container">
        <div className="addproduct_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" placeholder="Title" id="title" onChange={handleChange} />
            </div>
            <div className="form_input">
              <input type="number" placeholder="Price" id="price" onChange={handleChange} />
            </div>
            <div className="form_input">
              <input type="text" placeholder="Description" id="description" onChange={handleChange} />
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
            <div className="form_input">
              <input type="file" onChange={handleImageAsFile} />
            </div>
            <div className="form_input">
              <button onClick={handleFireBaseUpload} className="btn_add">
                Upload Image
              </button>
            </div>
            <div className="form_input">
              <button onClick={handleSubmit} className="btn_add">
                Create Product
              </button>
            </div>

            {/* {this.state.formError ? <div className="error_label">Somthing is wrong!</div> : null} */}
          </form>
        </div>
        {state.isUploading ? (
          <div className="progress" style={{ textAlign: "center", margin: "30px 0" }}>
            <CircularProgress style={{ color: "#98c6e9" }} thickness={8} />{" "}
          </div>
        ) : null}
      </div>
    </AdminLayout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => {
      dispatch(createProduct(product))
    },
  }
}

export default connect(null, mapDispatchToProps)(AddProducts)
