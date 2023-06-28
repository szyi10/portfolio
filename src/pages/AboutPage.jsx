import React from "react"
import { motion } from "framer-motion"
import About from "../components/About/About"

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <About />
    </motion.div>
  )
}

export default AboutPage
