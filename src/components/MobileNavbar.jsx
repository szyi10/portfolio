import { twMerge } from "tailwind-merge"
import { navLinks } from "../lib/constants"
import { HashLink } from "react-router-hash-link"

const MobileNavbar = ({ menuOpened, toggle, close }) => {
  return (
    <>
      <div
        onClick={close}
        className={twMerge(
          "fixed inset-0 z-40 bg-gray-950 transition-opacity",
          menuOpened
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />
      <div
        className={twMerge(
          "fixed top-0 bottom-0 flex flex-col z-50 w-[323px] bg-white transition-all",
          menuOpened ? "left-0" : "-left-[323px]"
        )}
      >
        <div className="h-20 flex items-center px-4">
          <div className="font-display font-black text-3xl flex items-center justify-between w-full">
            <a href="#">szyi</a>
            <span onClick={toggle} className="text-base font-normal font-sans">
              ✖️
            </span>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-4 px-4 py-4">
          {navLinks.map((link) => (
            <HashLink
              onClick={close}
              to={link.href}
              key={link.href}
              className="hover:text-emerald-500 transition-colors text-lg"
            >
              {link.label}
            </HashLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileNavbar
