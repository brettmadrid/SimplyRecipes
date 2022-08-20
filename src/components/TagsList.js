import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return <div>TagsList</div>
}

export default TagsList
