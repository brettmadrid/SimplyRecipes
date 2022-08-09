/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Simple recipes site",
    author: "Brett Madrid",
    person: { name: "brett", age: 58 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "brett", age: 58 },
      { name: "amy", age: 44 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
