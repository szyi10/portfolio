import { motion } from "framer-motion"

import HomeBanner from "./HomeBanner"
import TechStack from "./TechStack"
import About from "./About"
// import Projects from "../../components/Projects/Projects"
// import Technologies from "../../components/Technologies/Technologies"

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
    </motion.div>
  )
}

export default Home
