import { useState } from "react"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const changeName = (e) => setName(e.target.value)
  const changeEmail = (e) => setEmail(e.target.value)
  const changeMessage = (e) => setMessage(e.target.value)

  // TODO: Make it work properly
  const submitHandler = (e) => {
    e.preventDefault()

    console.log(`
    name: ${name}
    email: ${email}
    message: ${message}
    `)

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <form onSubmit={submitHandler} className="w-full lg:w-3/5">
      <h4 className="text-lg uppercase tracking-widest text-neutral-400 mb-4 text-center lg:text-start">
        Contact form
      </h4>
      {/* Name & Email */}
      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input type="text" value={name} name="name" onChange={changeName} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={changeEmail}
          />
        </div>
      </div>
      {/* Message */}
      <div className="form-control mt-6">
        <label htmlFor="message">Your Message</label>
        <textarea
          rows={5}
          value={message}
          name="message"
          onChange={changeMessage}
        ></textarea>
      </div>
      {/* Button */}
      <button className="button w-full mt-3">Send Message</button>
    </form>
  )
}

export default ContactForm
