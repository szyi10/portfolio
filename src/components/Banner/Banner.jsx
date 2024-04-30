import React from "react"
import { Link } from "react-router-dom"

import picture from "../../assets/avatar.png"
import classes from "./Banner.module.css"

const Banner = () => {
  const changeColor = (color) => {
    localStorage.setItem("color", color)
    document.querySelector("html").classList = color
  }

  return (
    <section className={classes.banner}>
      <div className={classes.img}>
        <img src={picture} alt="Profile picture" />
      </div>
      <div className={classes.content}>
        <h2>Szymon Kędzior</h2>
        <div className={classes.colors}>
          <button
            className={classes.green}
            onClick={() => changeColor("green")}
            aria-label="Green button"
          ></button>
          <button
            className={classes.blue}
            onClick={() => changeColor("blue")}
            aria-label="Blue button"
          ></button>
          <button
            className={classes.orange}
            onClick={() => changeColor("orange")}
            aria-label="Orange button"
          ></button>
          <button
            className={classes.violet}
            onClick={() => changeColor("violet")}
            aria-label="Violet button"
          ></button>
        </div>
        <p>
          Highly motivated Frontend Developer -{" "}
          <b>
            <Link to="/about">more info...</Link>
          </b>
        </p>
        <div className={classes.links}>
          <a href="https://github.com/szyi10/" target="_blank">
            <i className="bx bxl-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/szymon-ked16/" target="_blank">
            <i className="bx bxl-linkedin-square"></i> Linkedin
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner
