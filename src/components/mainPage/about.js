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
            <p className="about-paragraph" id='about1'>I am a front end web developer, from Denver, Colorado with a certificate from the University of Denver for full stack development. While, I enjoy working with front end technologies React, Javascript, CSS, etc. I have the capability to get myself out of trouble in the back end. Or into trouble depending how you look at it.</p>
            <p className="about-paragraph">Since 2017, I have been helping agencies, and direct clients to develop unique and interactive web experiences for their businesses.</p>
            <p className="about-paragraph">When I am not developing I am out cycling, and traveling around. I enjoy experiencing what the world has to offer.</p>
            </Fade>
          </div>
        </div>
    </div>
       
    )
  }
};

export default About
