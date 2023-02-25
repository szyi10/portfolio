import React from "react"

import classes from "./Project.module.css"

const Project = ({ data, description }) => {
  return (
    <div className={classes.project}>
      <img src={data.image} />
      <div className={classes.content}>
        <h3 className={classes.title}>{data.title}</h3>
        <div className={classes.tags}>
          {data.tags.map((tag, idx) => {
            return (
              <p key={idx} className={classes[`${tag}`]}>
                {tag}
              </p>
            )
          })}
        </div>
        <p>{description}</p>
        <div className={classes.controls}>
          <a href={data.codeLink} target="_blank">
            Source
          </a>
          <a href={data.liveLink} target="_blank">
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
