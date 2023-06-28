import React from "react"

import classes from "./AboutMore.module.css"

const AboutMore = () => {
  return (
    <section className={classes.about}>
      <article className={classes.block} id="introduction">
        <div className={`${classes.bg} ${classes.introduction}`}></div>
        <h2>About me</h2>
        <p>
          I am a self-taught <b>Frontend Developer</b> passionate about creating
          user-friendly web applications. Since 2019, I've gained a solid
          foundation in <b>HTML, CSS, JavaScript, and React</b>. My portfolio
          showcases projects like task list apps, weather forecasts, and forum
          websites. I'm dedicated to continuous skill development and delivering
          exceptional results in every project.
        </p>
      </article>
      <article className={classes.block} id="experience">
        <div className={`${classes.bg} ${classes.experience}`}></div>
        <h2>Experience</h2>
        <p>
          I have recently completed school and I am currently seeking employment
          to gain my first professional experience. Through years of
          self-learning, I have acquired a strong knowledge base and skills. I
          am fully committed to fulfilling my responsibilities and I am highly
          available.
        </p>
      </article>
      <article className={classes.block} id="certificates">
        <div className={`${classes.bg} ${classes.certificates}`}></div>
        <h2>Certificates</h2>
        <p>
          Throughout the years of my journey, I have dedicated myself to
          continuous learning and personal growth, which has led me to achieve a
          notable list of certificates. These certifications serve as a
          testament to my commitment to expanding my knowledge and expertise in
          various areas of interest.
        </p>
        <ul className={classes.certificates}>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/szyi/responsive-web-design"
              target="_blank"
            >
              Responsive Web Design
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/certificate/UC-b852ee20-d0e9-4909-aa33-ab3a0286aa0a/"
              target="_blank"
            >
              50 Projects In 50 Days - HTML, CSS & JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/certificate/UC-78f8b576-c4cb-42d3-a198-e1e9b031e3f6/"
              target="_blank"
            >
              React - The Complete Guide 2023 (incl. React Router & Redux)
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default AboutMore
