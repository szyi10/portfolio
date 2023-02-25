import React from "react"
import { motion } from "framer-motion"

import Project from "../components/Projects/Project"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <motion.section
      style={{ marginTop: "100px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            data={project}
            description={project.longDescription}
          />
        )
      })}
    </motion.section>
  )
}

export default Projects
