import React from "react"
import { Link } from "gatsby"

const index = () => {
  return (
    <div>
      <h1>Hello People</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </div>
  )
}

export default index
