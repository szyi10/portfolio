import React from "react"
import { useSelector } from "react-redux"
import "./App.css"

const App = () => {
  const counter = useSelector((state) => state.counter.value)

  return <>Counter: {counter}</>
}

export default App
