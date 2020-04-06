import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
      <div className='about-container'>
        <h5 id='about-head'>About Me</h5>
        <div className="about-body">
          <div id="about-image-container">
            <Image/>
          </div>
          <div id="about-text-container">
            <p className="about-paragraph">Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients. I am a full stack Web Developer. Focused on developing engaging interactive for my clients.</p>
            <p className="about-paragraph">Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients. I am a full stack Web Developer. Focused on developing engaging interactive for my clients.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
