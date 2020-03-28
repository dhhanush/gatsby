import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via
        <a
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          @twitter
        </a>
      </p>
      <Link to="/">Back</Link>
    </Layout>
  )
}

export default Contact
