const HomeBanner = () => {
  return (
    <section className="w-full pt-20 border-b border-b-neutral-200">
      <div className="flex-container flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-20 flex flex-col items-center lg:items-start">
          <h6 className="uppercase text-sm font-medium tracking-widest text-neutral-500 mb-[30px]">
            Web Developer
          </h6>
          <h1 className="flex flex-col text-[70px] lg:text-[85px] font-semibold leading-[1.15] font-display text-center lg:text-start">
            Hello, I&apos;m
            <span className="font-bold text-emerald-500">Szymon Kędzior</span>
          </h1>
          <p className="mt-[30px] text-sm text-neutral-500 leading-relaxed w-[75%] lg:w-[90%] text-center lg:text-start">
            I&apos;ve been coding for 5 years, starting with HTML and CSS. Now
            I&apos;m into fullstack development and building projects using
            React, Tailwind, Node.js, Express.js, MongoDB and many more!
          </p>
          <div className="flex flex-col xs:flex-row mt-[50px] gap-4 w-full xs:w-auto">
            <a
              href="/docs/CV-EN.pdf"
              download="Szymon-Kędzior-CV"
              className="button"
            >
              Download CV
            </a>
            <a href="#contact" className="button-outline text-center">
              Hire Me!
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative hidden lg:block">
          <img
            src="/images/avatar.png"
            alt="My picture"
            className="lg:absolute bottom-0 right-0 max-h-[38rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
