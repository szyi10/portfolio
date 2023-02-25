import React from "react"
import { Link } from "react-router-dom"
import { projects } from "../../data/projects"
import Project from "./Project"

import classes from "./Projects.module.css"

const Projects = () => {
  return (
    <section className={classes.projects} id="projects">
      <h1>Projects</h1>
      {projects.map((project, idx) => {
        if (idx >= 3) return

        return (
          <Project
            key={project.id}
            data={project}
            description={project.shortDescription}
          />
        )
      })}
      <div className={classes.more}>
        <Link to="/projects">See More</Link>
      </div>
    </section>
  )
}

export default Projects
