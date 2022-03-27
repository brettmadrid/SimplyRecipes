import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby anim 90's enamel pin gentrify pickled. Forage 8-bit
              austin, master cleanse shaman PBR&B swag pug single-origin coffee
              labore echo park. Coloring book sustainable DIY godard.
            </p>
            <p>
              Mustache edison bulb viral minim pitchfork sartorial ipsum do
              poutine banjo helvetica gastropub food truck.
            </p>
            <p>
              Schlitz pariatur fanny pack, eiusmod palo santo glossier whatever
              woke cold-pressed hell of proident tofu anim ullamco meh. Kinfolk
              intelligentsia ut cillum, celiac gochujang microdosing neutra fam
              portland chia.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
