import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import Spinner from "./Spinner"

const LoadingScreen = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-screen bg-white z-50"
    >
      <div className="flex-container items-center justify-center h-full transition-opacity">
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <Spinner />
            <h3 className="mt-4 font-medium">Loading...</h3>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default LoadingScreen
