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
              <img src={mail} />
              <p>szymon.ked16@gmail.com</p>
            </div>
            <div className={classes.method}>
              <img src={discord} />
              <p>szyi#0093</p>
            </div>
            <div className={classes.method}>
              <img src={linkedin} />
              <a
                href="https://www.linkedin.com/in/szymon-ked16/"
                target="_blank"
              >
                <p>Szymon Kędzior</p>
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
