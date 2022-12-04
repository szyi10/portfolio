import React, { useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ErrorContext from "./context/error-context"

import "./App.css"

import Home from "./pages/Home"
import Forecast from "./pages/Forecast"
import Modal from "./components/UI/Modal"

const App = () => {
  const errorCtx = useContext(ErrorContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
      {errorCtx.error && <Modal type="error" />}
    </Router>
  )
}

export default App
