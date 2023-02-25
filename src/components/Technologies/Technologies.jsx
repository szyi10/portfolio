import React from "react"

import html from "../../assets/logos/html.png"
import css from "../../assets/logos/css.png"
import js from "../../assets/logos/js.png"
import react from "../../assets/logos/react.png"
import classes from "./Technologies.module.css"

const Technologies = () => {
  return (
    <section className={classes.technologies}>
      <div>
        <img src={html} />
        <p>HTML</p>
      </div>
      <div>
        <img src={css} />
        <p>CSS</p>
      </div>
      <div>
        <img src={js} />
        <p>JS</p>
      </div>
      <div>
        <img src={react} />
        <p>React</p>
      </div>
    </section>
  )
}

export default Technologies
