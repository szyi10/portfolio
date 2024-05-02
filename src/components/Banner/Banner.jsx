import React from "react"
import picture from "../../assets/avatar.png"

const Banner = () => {
  return (
    <section className="w-full pt-20 border-b border-b-neutral-200">
      <div className="flex-container">
        <div className="w-1/2 mb-20">
          <h6 className="uppercase text-sm font-medium tracking-widest text-neutral-500 mb-[30px]">
            Web Developer
          </h6>
          <h1 className="flex flex-col text-[85px] font-semibold leading-[1.15] font-display">
            Hello, I'm
            <span className="font-bold text-emerald-500">Szymon Kędzior</span>
          </h1>
          <p className="mt-[30px] text-sm text-neutral-500 leading-relaxed w-[90%]">
            I've been coding for 5 years, starting with HTML and CSS. Now I'm
            into fullstack development and building projects using React,
            Tailwind, Node.js, Express.js, MongoDB and many more!
          </p>
          <div className="flex mt-[50px] gap-4">
            <button className="button">Download CV</button>
            <a href="#contact" className="button-outline">
              Hire Me!
            </a>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            src={picture}
            alt="My picture"
            className="absolute bottom-0 right-0 max-h-[38rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
