import { useEffect, useState } from "react"
import { navLinks } from "../lib/constants"
import { HashLink } from "react-router-hash-link"
import MobileNavbar from "./MobileNavbar"
import menu from "../assets/menu.svg"
import { twMerge } from "tailwind-merge"

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

  return (
    <>
      <div className="h-20" />
      <nav
        className={twMerge(
          "h-20 fixed top-0 left-0 right-0 flex items-center justify-center bg-white transition-all z-10",
          isScrolled && "backdrop-blur-md bg-white/70"
        )}
      >
        <div className="flex-container items-center justify-between">
          <div className="font-display font-black text-3xl uppercase flex items-center">
            <img
              src={menu}
              width={16}
              height={16}
              className="flex md:hidden order mr-3"
              onClick={toggleMenu}
            />
            <a href="#">szyi</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <HashLink
                smooth
                to={link.href}
                key={link.href}
                className="hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </HashLink>
            ))}
          </div>
          <div className="flex items-center gap-4 text-2xl text-neutral-900">
            <a href="https://github.com/szyi10">
              <i className="fa-brands fa-github hover:text-emerald-500 transition-colors"></i>
            </a>
            <a href="https://www.linkedin.com/in/szymon-ked16/">
              <i className="fa-brands fa-linkedin hover:text-emerald-500 transition-colors"></i>
            </a>
          </div>
        </div>
      </nav>{" "}
      <MobileNavbar
        menuOpened={isOpened}
        toggle={toggleMenu}
        close={closeMenu}
      />
    </>
  )
}

export default Navbar
