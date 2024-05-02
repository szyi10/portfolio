import React from "react"
import { motion } from "framer-motion"

import Banner from "../components/Banner/Banner"
import Projects from "../components/Projects/Projects"
import Technologies from "../components/Technologies/Technologies"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      {/* <Technologies />
      <Projects /> */}
    </motion.div>
  )
}

export default Home
