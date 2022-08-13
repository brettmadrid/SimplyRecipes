import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // const data = useStaticQuery(query)
  // const recipeArray = data.allContentfulRecipe.nodes
  const {
    allContentfulRecipe: { nodes: recipeArray },
  } = useStaticQuery(query)
  return (
    <div>
      <h4>all recipes</h4>
      <TagsList recipes={recipeArray} />
      <RecipesList recipes={recipeArray} />
    </div>
  )
}

export default AllRecipes
