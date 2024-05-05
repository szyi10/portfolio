import { motion } from "framer-motion"
import { aboutList, aboutLanguagesSkills } from "../../lib/constants"

const About = () => {
  return (
    <section id="about" className="bg-neutral-900 text-white py-20">
      <div className="container">
        <div className="flex flex-col items-center lg:items-start">
          <h6 className="uppercase text-sm font-medium tracking-widest text-neutral-500 mb-5">
            About
          </h6>
          <h3 className="text-4xl leading-tight font-bold mb-4">About Me</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="text-sm font-normal text-neutral-400 leading-7 w-full md:w-1/2 lg:w-3/5 flex flex-col items-start justify-between">
            <div>
              <p className="mb-5">
                I have been coding for 5 years, beginning with HTML and CSS, and
                gradually advancing to full-stack development. My current
                toolkit includes React, Tailwind, Node.js, Express.js, MongoDB,
                and other modern technologies. I love building projects that
                solve problems and enjoy learning about the latest trends in web
                development.
              </p>
              <p className="mb-5">
                I&apos;m based in Poland and I&apos;m always looking for
                exciting collaborations. You can see my work on{" "}
                <a
                  href="#portfolio"
                  className="text-emerald-500 underline underline-offset-4"
                >
                  portfolio
                </a>{" "}
                section. If you&apos;d like to get in touch, you can check{" "}
                <a
                  href="#contact"
                  className="text-emerald-500 underline underline-offset-4"
                >
                  contact
                </a>{" "}
                section. I&apos;m currently learning Vue.js and Next.js to
                broaden my skill set, and when I&apos;m not coding, I&apos;m a
                huge racing fan.
              </p>
            </div>
            <a
              href="/docs/CV-EN.pdf"
              download="Szymon-Kędzior-CV"
              className="button bg-white text-neutral-900 hidden md:block"
            >
              Download CV
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-between">
            <ul className="flex flex-col gap-4">
              {aboutList.map((item) => (
                <li key={item.label} className="flex flex-col w-full gap-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-white px-2 py-1 rounded-[6px] text-sm font-medium text-neutral-900">
                      {item.label}:
                    </div>
                    <span className="font-thin">{item.value}</span>
                  </div>
                  <div className="w-full h-[1px] bg-neutral-700" />
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="text-lg uppercase tracking-widest text-neutral-400 mb-2">
                Languages Skills
              </h4>
              <div className="flex flex-col gap-3">
                {aboutLanguagesSkills.map((skill) => (
                  <div key={skill.label}>
                    <span className="text-sm text-neutral-500 mb-1">
                      {skill.label}
                    </span>
                    <div className="w-full bg-neutral-800 rounded-[6px] h-2">
                      <motion.div
                        initial={{ width: "50%" }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        className="bg-emerald-500 h-2 rounded-[6px]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="button bg-white text-neutral-900 md:hidden block">
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
