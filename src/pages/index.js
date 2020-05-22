import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';
// import About from "../components/mainPage/about"
// import Brief from "../components/mainPage/brief"
// import Work from "../components/mainPage/work"
// import Contact from '../components/mainPage/contact'
// import Skills from '../components/mainPage/skills'
// import Skills from "../components/skills"


ReactGA.initialize('UA-164183008-1');
const changeColor = (color) => {
  document.body.style.backgroundColor = color
  renderCircles()

  var x = document.getElementsByClassName('text')
}


const renderCircles = () => {
  const colors = ['rgb(239, 233, 244)', 'rgb(165, 195, 247)', '#242325', '#F96167', '#358597', '#F4B5B7', '#132A13']
  const circles = []
  const activeColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color')

  for (let i = 0; i < colors.length; i++) {
        if (colors[i] === activeColor ) {
          circles.push(<span class='color-circle color-circle-active' key={colors[i]} onClick={() => changeColor(colors[i])} style={{backgroundColor: colors[i]}}></span>)
        } else (
          circles.push(<span class='color-circle' key={colors[i]} onClick={() => changeColor(colors[i])} style={{backgroundColor: colors[i]}}></span>)
        )
    }


    return(
      <div className='color-row'>
      {circles}
      </div>
    )
  }




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landing">
      <Fade duration={3000} left opposite>
        <h1 id='landing-text-top' className='color-text'>Kyle</h1>
      </Fade>
      <Fade duration={3000} right opposite>
        <h1 id='landing-text-bottom' className='color-text'>Kearney</h1>
      </Fade>
    {renderCircles()}

    </div>
    <div className="container">
        {/* <Brief/>
        <About/>
        <Work/>
        <Skills/>
        <Contact/> */}
    </div>
  </Layout>
)

export default IndexPage
