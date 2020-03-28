import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Us</h1>
      <p>
        We at Daari Innovative software solutions always look forward for
        delivering products with latest technologies to fulfill the customer
        needs and Bring joy to their business
      </p>
      <p>
        <Link to="/contact">Want to work with us? Reach out</Link>
      </p>
    </Layout>
  )
}

export default About
