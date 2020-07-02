import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Kontaktiere uns" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/veitebbers@hotmail.de"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Florentina Meyer"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="florentina@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Beschreibung</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Hier kommt Deine Anfrage hin."
              ></textarea>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
