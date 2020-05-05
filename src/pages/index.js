import React from "react"
// import { Link } from "gatsby"

import About from "../components/mainPage/about"
import Brief from "../components/mainPage/brief"
import Experience from "../components/mainPage/experience"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/mainPage/work"
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';
// import Skills from "../components/skills"


ReactGA.initialize('UA-164183008-1');


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landing">
    <Fade duration={3000} left opposite>
    <h1 id='landing-text-top'>Kyle</h1>
    </Fade>
    <Fade duration={3000} right opposite>
    <h1 id='landing-text-bottom'>Kearney</h1>
    </Fade>
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
