import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <motion.div
      style={{ height: "calc(100vh - 165px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-container flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-neutral-600 mb-6">
        The page you are looking for doesn&apos;t exists or has been moved.
      </p>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </motion.div>
  )
}

export default NotFound
