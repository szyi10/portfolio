import React from "react"

import classes from "./ProjectDetail.module.css"

const ProjectDetail = ({ data }) => {
  return (
    <section className={classes.project}>
      <div className={classes.wrapper}>
        <aside className={classes.aside}>
          <img src={data.image} alt={data.name} />

          <div className={classes.buttons}>
            <a href={data.liveLink} target="_blank" className={classes.demo}>
              <button>
                <i className="bx bx-play"></i> Demo
              </button>
            </a>
            <a href={data.codeLink} target="_blank" className={classes.source}>
              <i className="bx bx-code-alt"></i> Source Link
            </a>
          </div>
        </aside>
        <article className={classes.description}>
          <h2>{data.name}</h2>
          <div className={classes.technologies}>
            <small>
              <b>TECHNOLOGIES:</b>
            </small>
            <div className={classes.tags}>
              {data.tags.map((tag, idx) => {
                return (
                  <p key={idx} className={classes[`${tag}`]}>
                    {tag}
                  </p>
                )
              })}
            </div>
          </div>
          <small>
            <b>DESCRIPTION:</b>
          </small>
          <p className={classes.text}>{data.longDescription}</p>
        </article>
      </div>
    </section>
  )
}

export default ProjectDetail
