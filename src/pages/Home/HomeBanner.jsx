import { motion } from "framer-motion"

const HomeBanner = () => {
  return (
    <section className="w-full pt-20 border-b border-b-neutral-200">
      <div className="flex-container flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-20 flex flex-col items-center lg:items-start">
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="uppercase text-sm font-medium tracking-widest text-neutral-500 mb-[30px]"
          >
            Web Developer
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col text-[70px] lg:text-[85px] font-semibold leading-[1.15] font-display text-center lg:text-start"
          >
            Hello, I&apos;m
            <span className="font-bold text-blue-500">Szymon Kędzior</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-[30px] text-sm text-neutral-500 leading-relaxed w-[75%] lg:w-[90%] text-center lg:text-start"
          >
            I&apos;ve been coding for 5 years, starting with HTML and CSS. Now
            I&apos;m into fullstack development and building projects using
            React, Tailwind, Node.js, Express.js, MongoDB and many more!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col xs:flex-row mt-[50px] gap-4 w-full xs:w-auto"
          >
            <a
              href="/docs/CV-EN.pdf"
              download="Szymon-Kędzior-CV"
              className="button text-center"
            >
              Download CV
            </a>
            <a href="#contact" className="button-outline text-center">
              Hire Me!
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative hidden lg:block"
        >
          <img
            src="/images/avatar.png"
            alt="My picture"
            className="lg:absolute bottom-0 right-0 max-h-[38rem]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HomeBanner
