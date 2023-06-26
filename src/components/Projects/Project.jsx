import React from "react"
import { Link } from "react-router-dom"

import classes from "./Project.module.css"

const Project = ({ data }) => {
  return (
    <Link to={`/project/${data.id}`} className={classes.project}>
      <img src={data.image} alt={data.name} loading="lazy" />
      <div className={classes.content}>
        <h3>{data.name}</h3>
        <div className={classes.tags}>
          {data.tags.map((tag, idx) => {
            return (
              <p key={idx} className={classes[`${tag}`]}>
                {tag}
              </p>
            )
          })}
        </div>
        <p className={classes.details}>
          Click for more details <i className="bx bx-pointer"></i>
        </p>
      </div>
    </Link>
  )
}

export default Project
