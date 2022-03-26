import React from "react"

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <p>
          &copy;{new Date().getFullYear()} <span>SimplyRecipes</span> Built with{" "}
          <a href="https://www.gatsby.com">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Footer
