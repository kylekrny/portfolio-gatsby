import React from "react"
// import { Link } from "gatsby"

import About from "../components/mainPage/about"
import Brief from "../components/mainPage/brief"
import Experience from "../components/mainPage/experience"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/mainPage/work"
// import Skills from "../components/skills"

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
        <Work/>
    </div>
  </Layout>
)

export default IndexPage
