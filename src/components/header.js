import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={classes.header}>
      <h1>
        <Link className={classes.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={classes.navList}>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
