import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const contact = ({
  data: {
    allContentfulRecipe: { nodes: recipesArray },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby yuccie retro semiotics shoreditch gluten-free, bitters
              glossier. Semiotics fit church-key coloring book, kombucha
              kickstarter migas +1 trust fund actually kale chips vegan tacos.
            </p>
            <p>
              Yes plz lo-fi kickstarter art party knausgaard mukbang neutra 3
              wolf moon readymade squid food truck single-origin coffee
              affogato.
            </p>
            <p>
              PBR&B yr iPhone, kickstarter waistcoat narwhal direct trade vape
              activated charcoal health goth irony hoodie. XOXO affogato cronut,
              hell of mumblecore vexillologist venmo gentrify paleo helvetica
              90's.
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipesArray} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default contact
