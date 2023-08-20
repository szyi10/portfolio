import React from "react"

import html from "../../assets/logos/html.webp"
import css from "../../assets/logos/css.webp"
import js from "../../assets/logos/js.webp"
import react from "../../assets/logos/react.webp"
import classes from "./Technologies.module.css"

const Technologies = () => {
  return (
    <section className={classes.technologies}>
      <div>
        <img src={html} alt="HTML logo" />
        <p>HTML</p>
      </div>
      <div>
        <img src={css} alt="CSS logo" />
        <p>CSS</p>
      </div>
      <div>
        <img src={js} alt="JavaScript logo" />
        <p>JS</p>
      </div>
      <div>
        <img src={react} alt="React logo" />
        <p>React</p>
      </div>
    </section>
  )
}

export default Technologies
