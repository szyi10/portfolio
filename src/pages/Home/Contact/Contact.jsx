import ContactForm from "./ContactForm"
import ContactMethods from "./ContactMethods"

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center mb-5">
          <h6 className="uppercase text-sm font-medium tracking-widest text-neutral-500 mb-5">
            Contact
          </h6>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Get in touch
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <ContactMethods />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
