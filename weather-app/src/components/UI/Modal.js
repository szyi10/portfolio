import React, { useContext } from "react"

import "./Modal.css"
import ErrorContext from "../../context/error-context"

const Modal = (props) => {
  const errorCtx = useContext(ErrorContext)

  let colorClass = ""
  let title = "Alert"

  if (props.type === "error") {
    colorClass = "modal--error"
    title = "Error"
  }

  return (
    <div className={`modal ${colorClass}`}>
      <div className="modal__header">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__btn--close" onClick={errorCtx.closeError}>
          X
        </button>
      </div>
      <div className="modal__divider" />
      <div className="modal__message">{errorCtx.msg}</div>
    </div>
  )
}

export default Modal
