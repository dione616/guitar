import React from "react"

const FormFields = ({ formdata, id, change }) => {
  const showError = () => {
    let errrorMessage = (
      <div className="error_label">{formdata.validation && !formdata.valid ? formdata.validationMessage : null}</div>
    )
    return errrorMessage
  }

  const renderTemplate = () => {
    let formTemplate = null

    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            {formdata.showlabel ? <div className="label_inputs">{formdata.config.label}</div> : null}
            <input {...formdata.config} value={formdata.value} onChange={(event) => change({ event, id })} />
            {showError()}
          </div>
        )
        break

      case "select":
        formTemplate = (
          <div>
            {formdata.showlabel ? <div className="label_inputs">{formdata.config.label}</div> : null}
            <select value={formdata.value} onChange={(event) => change({ event, id })}>
              <option value="">Select one</option>
              {formdata.config.options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        )
        break

      default:
        formTemplate = null
    }
    return formTemplate
  }
  return <div>{renderTemplate()}</div>
}

export default FormFields
//l45 +l46 4:00
