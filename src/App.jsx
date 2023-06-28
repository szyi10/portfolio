import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Home, AboutPage, DetailPage } from "./pages"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import NotFound from "./pages/NotFound"

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const colorScheme = document.querySelector("html").classList[0]
    let savedScheme = localStorage.getItem("color")

    if (!savedScheme) {
      // Create localStoarge key
      localStorage.setItem("color", colorScheme)
    } else {
      document.querySelector("html").classList = savedScheme
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:projectName" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
