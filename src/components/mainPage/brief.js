import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

class Brief extends Component {

  render() {
    
    return (
      <div id='brief-container'>
        <Fade  duration={3000} delay={3000}>
          <p id="brief">
          Hi! My name is Kyle Kearney, I am a full stack Web Developer. Focused on developing engaging interactive for my clients.  I am a full stack Web Developer. Focused on developing engaging interactive for my clients.
          </p>
        </Fade>
      </div>
    )
  }
};

export default Brief
