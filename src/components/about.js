import React, { Component } from 'react'
import Image from "../components/image"


class About extends Component {

  render() {
    
    return (
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
       
    )
  }
};

export default About
