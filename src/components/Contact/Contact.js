import React from "react"
import Title from "../Title"
const Contact = () => {
  return (
    <section className="section-contact">
      <div className="row">
        <Title title="contact us" />
        <form
          className="form"
          action="https://formspree.io/abderrahmen.lahmedigl@gmail.com"
          method="POST"
        >
          <div className="form__group">
            <input
              type="text"
              className="form__input inp"
              placeholder="Full name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Full name
            </label>
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input inp"
              placeholder="Email address"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email address
            </label>
          </div>
          <div className="form__group ">
            <textarea
              name="message"
              id="message"
              rows="10"
              className="form__input inp"
              placeholder="tell us something..."
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green submit ">submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
