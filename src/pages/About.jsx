import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.section
      style={{ minHeight: "68.73vh", marginTop: "50px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2>Introduction</h2>
        <p>
          I am a self-taught Junior Frontend Developer with a passion for
          creating user-friendly and attractive web applications. I started my
          adventure with programming in 2019, since then I have learned a solid
          foundation in HTML, CSS, JavaScript and React. My portfolio includes
          projects that showcase my skills in creating applications such as task
          list apps, weather forecasts, and forum websites. I am motivated to
          continue developing my skills and putting in effort into each project
          to achieve the best results.
        </p>
      </div>
      <div>
        <h3>Skills</h3>
        <p>HTML, CSS, JavaScript, React, TailwindCSS, Sass</p>
        <p>In the near future I'm planning to learn TypeScript.</p>
      </div>
      <div>
        <h3>Experience</h3>
        <p>
          I recently graduated from school, so my commercial experience is
          limited. However, I was on school internships where I was building
          applications in JavaScript, e.g. dashboard. I also did many projects
          myself in JavaScript and React that you can see{" "}
          <Link to="/projects" style={{ color: "#4caf50" }}>
            here.
          </Link>
        </p>
      </div>
      <div>
        <h3>Passion</h3>
        <p>
          I have always been fascinated by how websites work and how they are
          built. That's why I started my adventure with programming.
        </p>
        <p>
          From the beginning, I was thrilled when the project I was working on
          worked as I planned - at first, it was simple HTML and CSS pages, and
          now it's advanced React pages. The joy of learning and progress that
          accompanied the first day has remained until today - which further
          motivates me to take action and continue learning.
        </p>
      </div>
      <div>
        <h3>Personal Qualities</h3>
        <p>
          My greatest asset is calmness, which helps a lot in working under
          pressure and dealing with stress. I like to think about a lot of
          problems or questions I've asked myself and solve them, which is why I
          have pretty decent problem solving skills. I'm also a perfectionist,
          so I pay attention to details.
        </p>
      </div>
      <div>
        <h3>Contact Information</h3>
        <p>
          All possible contact methods are listed in the{" "}
          <a href="#contact" style={{ color: "#4caf50" }}>
            contact section
          </a>{" "}
          in the footer. However, if you want to call me - you must first
          contact me using one of the methods listed in order to get along.
        </p>
      </div>
    </motion.section>
  )
}

export default About
