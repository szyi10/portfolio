const ContactMethod = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="flex flex-col">
        <h4 className="text-lg uppercase tracking-widest text-neutral-400 mb-2 text-center lg:text-start">
          Methods & Socials
        </h4>
        <div>
          <div className="group/contact-link flex justify-between cursor-pointer">
            <span className="text-sm uppercase font-medium">email:</span>
            <a
              href="mailto:szymon.ked16@gmail.com"
              className="transition-colors group-hover/contact-link:text-emerald-500"
            >
              szymon.ked16@gmail.com
            </a>
          </div>
          <div className="group/contact-link flex justify-between cursor-pointer">
            <span className="text-sm uppercase font-medium">address:</span>
            <p className="transition-colors group-hover/contact-link:text-emerald-500">
              Dąbrowa Górnicza, PL
            </p>
          </div>
          <div className="group/contact-link flex justify-between cursor-pointer">
            <span className="text-sm uppercase font-medium">twitter:</span>
            <a
              href="https://twitter.com/szyked"
              className="transition-colors group-hover/contact-link:text-emerald-500"
            >
              @szyked
            </a>
          </div>
          <div className="group/contact-link flex justify-between cursor-pointer">
            <span className="text-sm uppercase font-medium">discord:</span>
            <a
              href="https://discord.com/"
              className="transition-colors group-hover/contact-link:text-emerald-500"
            >
              @szyi
            </a>
          </div>
          <div className="group/contact-link flex justify-between cursor-pointer">
            <span className="text-sm uppercase font-medium">github:</span>
            <a
              href="https://github.com/szyi10/"
              className="transition-colors group-hover/contact-link:text-emerald-500"
            >
              szyi10
            </a>
          </div>
          <div className="group/contact-link flex justify-between cursor-pointer">
            <span className="text-sm uppercase font-medium">linkedin:</span>
            <a
              href="https://www.linkedin.com/in/szymon-ked16/"
              className="transition-colors group-hover/contact-link:text-emerald-500"
            >
              Szymon Kędzior
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMethod
