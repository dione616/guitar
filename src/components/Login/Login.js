import React, { Component } from "react"
import { connect } from "react-redux"
import { auth } from "../store/actions/authAction"
import { reduxForm, Field } from "redux-form"

let Login = (props) => {
  /* state = {
    email: "",
    password: "",
    errorMessage: false,
  } */

  const onSubmit = (e) => {
    console.log(e.email)

    props.auth(e)
  }

  const renderInput = ({ input, meta, placeholder, label, type }) => (
    <div className="input_field">
      <label className="label">{label}</label>
      <input className="label" {...input} placeholder={placeholder} type={type} />
      {meta.error && meta.visited && <span>{meta.error}</span>}
    </div>
  )

  const { error, handleSubmit, pristine, reset, submitting } = props
  const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined

  return (
    <div className="container">
      <div className="signin_wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrapp">
            <Field
              className="form_input"
              name="email"
              component={renderInput}
              type="text"
              placeholder="Email"
              label="Email"
              validate={email}
            />
            <Field
              className="form_input"
              name="password"
              placeholder="Pass"
              type="password"
              component={renderInput}
              label="Passs"
            />
          </div>
          <button type="submit" /* onSubmit={handleSubmit(this.onSubmit)} */ className="btn" disabled={submitting}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (user) => {
      dispatch(auth(user))
    },
  }
}

const validate = (values) => {
  const errors = {}
  const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined

  if (!values.password) {
    errors.password = "Required"
  }
  return errors
}

Login = connect(null, mapDispatchToProps)(Login)
export default reduxForm({ form: "login", validate })(Login)
/* export default connect(null, mapDispatchToProps)(Login) */
