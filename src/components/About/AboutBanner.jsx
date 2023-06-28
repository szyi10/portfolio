import React from "react"

import classes from "./AboutBanner.module.css"

const AboutBanner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes.title}>
        <h1>
          Hi , I'm <b>Szymon Kędzior</b>{" "}
          <span className={classes.wave}>👋</span>
        </h1>
        <p>
          Highly motivated Frontend Developer with a passion for creating
          user-firendly and attractive web applications.
        </p>
        <h5>I am currently looking for a job, so feel free to contact me.</h5>
        <a href="/CVEN.pdf" download="Szymon_Kędzior_CV">
          <button>
            <i className="bx bx-download"></i> Download CV
          </button>
        </a>
      </div>

      <a href="#introduction" className={classes.scroll}>
        <i className="bx bx-mouse"></i>
        <small>Scroll down</small>
      </a>
    </section>
  )
}

export default AboutBanner
