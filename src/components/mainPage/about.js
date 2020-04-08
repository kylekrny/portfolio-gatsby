import React, { Component } from 'react'
import Image from "../image"
import Fade from 'react-reveal/Fade';

class About extends Component {

  render() {
    
    return (
      <div id='about'>
        <div className="about-head">
            <h5 id='about-head'>
              <Fade delay={200} left duration={2000}>
              About Me
              </Fade>
              </h5>
        </div>
        <div className="about-body">
          <Fade delay={400}>
          <div id="about-image-container">
            <Image filename='IMG_6871.jpeg'/>
          </div>
          </Fade>
          <div id="about-text-container">
            <Fade right>
            <p className="about-paragraph" id='about1'>Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients. I am a full stack Web Developer. Focused on developing engaging interactive for my clients.</p>
            <p className="about-paragraph">Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients. I am a full stack Web Developer. Focused on developing engaging interactive for my clients.</p>
            </Fade>
          </div>
        </div>
    </div>
       
    )
  }
};

export default About
