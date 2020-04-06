import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landing">
    <h1 id='landing-text'>Kyle <br/> Kearney</h1>
    </div>
    <div className="container">
      <div id='brief-container'>
        <p id="brief">
        Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients.
        </p>
      </div>
        <About/>
    </div>
  </Layout>
)

export default IndexPage
