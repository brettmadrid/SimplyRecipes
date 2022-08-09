import React from "react"
import { graphql } from "gatsby"

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const Testing = ({ data }) => {
  const title = data.site.info.title
  return <h2>{title}</h2>
}

export default Testing
