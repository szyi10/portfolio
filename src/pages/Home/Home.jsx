import { motion } from "framer-motion"

import HomeBanner from "./HomeBanner"
import TechStack from "./TechStack"
import About from "./About"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"

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
      <div className="container">
        <div className="w-full h-[1px] bg-neutral-200" />
      </div>
      <Contact />
    </motion.div>
  )
}

export default Home
