import React from "react"
import { Link } from "react-router-dom"
import { projects } from "../../data/projects"
import Project from "./Project"

import classes from "./Projects.module.css"

const Projects = () => {
  return (
    <section className={classes.projects} id="projects">
      <h1>Projects</h1>
      <p className={classes.info}>
        I have only shared a few of my projects here. You can find all of my
        projects on my{" "}
        <a href="https://github.com/szyi10/" target="_blank">
          <i className="bx bxl-github"></i> github profile
        </a>
        .
      </p>
      <div className={classes["projects-list"]}>
        {projects.map((project, idx) => {
          if (idx >= 3) return

          return <Project key={project.id} data={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
