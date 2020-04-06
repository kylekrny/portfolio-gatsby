import React from "react"
import { Link } from "gatsby"

import About from "../components/about"
import Brief from "../components/brief"
import Experience from "../components/experience"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landing">
    <h1 id='landing-text'>Kyle <br/> Kearney</h1>
    </div>
    <div className="container">
        <Brief/>
        <About/>
        <Experience/>
    </div>
  </Layout>
)

export default IndexPage
