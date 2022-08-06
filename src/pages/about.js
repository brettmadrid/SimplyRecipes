import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>The tastiest recipes site on the internet!</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fuga
              architecto praesentium iusto rerum veritatis molestias unde itaque
              repellendus, aliquam accusantium laudantium quaerat fugit nulla,
              tempora harum dolor quos nobis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nostrum dicta nobis ea, distinctio hic doloribus.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in a bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
