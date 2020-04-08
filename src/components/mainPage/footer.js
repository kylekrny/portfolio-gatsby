import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends Component {

  render() {
    
    return (
      <div id="footer">
      <p id='footer-text'>Kyle Kearney | Web Developer</p>
    <p id='footer-center-text'>{'< / >'}</p>
      <div id='footer-social-row'>
            <a href=""><FontAwesomeIcon icon={["far", "envelope"]} className='social-icon' style={{color:"#000000"}} /></a>
            <a href=""><FontAwesomeIcon icon={["fab", "instagram" ]} className='social-icon' style={{color:"#000000"}} /></a>
            <a href=""><FontAwesomeIcon icon={["fab", "github"]} className='social-icon' style={{color:"#000000"}} /></a>
            <a href=""><FontAwesomeIcon icon={["fab", "behance"]} className='social-icon' style={{color:"#000000"}} /></a>
      </div>
      </div>
    )
  }
};

export default Footer
