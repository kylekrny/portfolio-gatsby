import React from "react"
// import { Link } from "gatsby"

import About from "../components/mainPage/about"
import Brief from "../components/mainPage/brief"
import Experience from "../components/mainPage/experience"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/mainPage/work"
import { Parallax } from 'react-scroll-parallax';
// import Skills from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landing">
    <Parallax x={[35, -30]} tagOuter="figure">
    <h1 id='landing-text-top'>Kyle</h1>
    </Parallax>
    <Parallax x={[-30, 30]} tagOuter="figure">
    <h1 id='landing-text-bottom'>Kearney</h1>
    </Parallax>
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
