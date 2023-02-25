import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Home, About, Projects } from "./pages"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import NotFound from "./pages/NotFound"

const App = () => {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
