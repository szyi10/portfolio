import React from "react"
import { Link } from "react-router-dom"

import discord from "../../assets/discord.svg"
import mail from "../../assets/mail.svg"
import linkedin from "../../assets/linkedin.svg"
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.section}>
          <h4>Links</h4>
          <div className={classes.links}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </div>
        <div className={classes.section} id="contact">
          <h4>Contact</h4>
          <div className={classes.methods}>
            <div className={classes.method}>
              <i className="bx bxs-envelope"></i>
              <a href="mailto:szymon.ked16@gmail.com">
                <p>szymon.ked16@gmail.com</p>
              </a>
            </div>
            <div className={classes.method}>
              <i className="bx bxl-twitter"></i>
              <a href="https://twitter.com/szyked" target="_blank">
                <p>szyked</p>
              </a>
            </div>
            <div className={classes.method}>
              <i className="bx bxl-linkedin-square"></i>
              <a
                href="https://www.linkedin.com/in/szymon-ked16/"
                target="_blank"
              >
                <p>Szymon Kędzior</p>
              </a>
            </div>
            <div className={classes.method}>
              <i className="bx bxl-github"></i>
              <a href="https://github.com/szyi10/" target="_blank">
                <p>szyi10</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <small>Szymon Kędzior &copy; 2023</small>
    </footer>
  )
}

export default Footer
