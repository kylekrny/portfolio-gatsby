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
    <div><h1 id='landing-text-top' data-sal="slide-left" data-sal-duration="2000"  data-sal-easing="ease">Kyle</h1></div>
    <div><h1 id='landing-text-bottom'data-sal="slide-right" data-sal-duration="2000"  data-sal-easing="ease" >Kearney</h1></div>
    
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
