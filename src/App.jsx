import { Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const Home = lazy(() => import("./pages/Home/Home"))

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"

const App = () => {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
