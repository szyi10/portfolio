import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <motion.div
      style={{ minHeight: "57.95vh", marginTop: "100px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Page Not Found</h3>
      <Link to="/" style={{ color: "#4caf50" }}>
        Back to Homepage
      </Link>
    </motion.div>
  )
}

export default NotFound
