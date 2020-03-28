import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import classes from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header />
        {props.children}
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
