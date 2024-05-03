import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Home } from "./pages"
// import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar"
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
