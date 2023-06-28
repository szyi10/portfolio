import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { projects } from "../data/projects"

import ProjectDetail from "../components/Projects/ProjectDetail"

const DetailPage = () => {
  const params = useParams()

  const filteredProject = projects.filter(
    (project) => project.id === params.projectName
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProjectDetail data={filteredProject[0]} />
    </motion.div>
  )
}

export default DetailPage
