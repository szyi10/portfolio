import React from "react"

import "./Button.css"

const Button = (props) => {
  let text = "Click"
  let className = ""

  if (props.type === "button") {
    text = "Go Back"
    className = "button__back"
  }

  if (props.type === "submit") {
    text = "Search"
    className = "button__submit"
  }

  if (props.type === "reset") {
    text = "Reset"
    className = "button__reset"
  }

  return (
    <button type={props.type} className={`button ${className}`}>
      {text}
    </button>
  )
}

export default Button
