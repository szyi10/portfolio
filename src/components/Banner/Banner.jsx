import React from "react"
import { Link } from "react-router-dom"

import picture from "../../assets/picture.png"
import classes from "./Banner.module.css"

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes.img}>
        <img src={picture} />
      </div>
      <div className={classes.content}>
        <h2>Szymon Kędzior</h2>
        <p>
          Hi, I'm <span>Szymon Kędzior</span> - self-taught highly motivated{" "}
          <span>Front End Developer</span> with passion for creating
          user-friendly and attractive web applications.
        </p>
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </div>
    </section>
  )
}

export default Banner
