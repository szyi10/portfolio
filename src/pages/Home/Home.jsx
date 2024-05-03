import { motion } from "framer-motion"

import HomeBanner from "./HomeBanner"
import TechStack from "./TechStack"
import About from "./About"
import Projects from "./Projects/Projects"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HomeBanner />
      <TechStack />
      <About />
      <Projects />
    </motion.div>
  )
}

export default Home
