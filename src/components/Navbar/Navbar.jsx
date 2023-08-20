import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import menu from "../../assets/menu.svg"
import logo from "../../assets/full-logo.webp"
import classes from "./Navbar.module.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (e.target.scrollingElement.scrollTop > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  const toggleMenu = () => setIsOpened((prevState) => !prevState)
  const closeMenu = () => setIsOpened(false)

  let headerClasses = isScrolled ? classes.down : ""
  let linksClasses = isOpened ? classes.opened : ""

  return (
    <header className={`${classes.header} ${headerClasses}`}>
      <nav className={classes.nav}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <img
          src={menu}
          alt="Menu"
          className={classes.menu}
          onClick={toggleMenu}
        />
        <div className={`${classes.links} ${linksClasses}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          {/* <Link to={"/projects"} onClick={closeMenu}>
            CV
          </Link> */}
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
