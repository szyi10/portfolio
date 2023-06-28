import React from "react"

import AboutBanner from "./AboutBanner"
import classes from "./About.module.css"
import AboutMore from "./AboutMore"

const About = () => {
  return (
    <div className={classes.about}>
      <AboutBanner />
      <AboutMore />
    </div>
  )
}

export default About
