import React from "react"
import { Link } from "react-router-dom"

import picture from "../../assets/picture.png"
import classes from "./Banner.module.css"

const Banner = () => {
  const changeColor = (color) => {
    localStorage.setItem("color", color)
    document.querySelector("html").classList = color
  }

  return (
    <section className={classes.banner}>
      <div className={classes.img}>
        <img src={picture} />
      </div>
      <div className={classes.content}>
        <h2>Szymon Kędzior</h2>
        <div className={classes.colors}>
          <button
            className={classes.green}
            onClick={() => changeColor("green")}
          ></button>
          <button
            className={classes.blue}
            onClick={() => changeColor("blue")}
          ></button>
          <button
            className={classes.orange}
            onClick={() => changeColor("orange")}
          ></button>
          <button
            className={classes.violet}
            onClick={() => changeColor("violet")}
          ></button>
        </div>
        <p>
          Highly motivated Frontend Developer -{" "}
          <b>
            <Link to="/about">more info...</Link>
          </b>
        </p>
      </div>
    </section>
  )
}

export default Banner
