import React, { useState } from "react"

const ErrorContext = React.createContext({
  error: Boolean,
  msg: "",
  openError: () => {},
  closeError: () => {},
})

export const ErrorContextProvider = (props) => {
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState("")

  const openError = (text) => {
    setError(true)
    setMsg(text)

    // Hide error after 10 seconds
    setTimeout(() => setError(false), 10000)
  }

  const closeError = () => {
    setError(false)
  }

  return (
    <ErrorContext.Provider
      value={{
        msg,
        error,
        openError,
        closeError,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  )
}

export default ErrorContext
