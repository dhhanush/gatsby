import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={classes.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

export default Footer
