import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Menu = () => (
  <div id='menu'>
    <div id='menu-header'>
      <p className='header-text'><a href="">Close</a></p>
    </div>
    <div id='button-container'>
      <button id='mode-button'>Dark Mode</button>
    </div>
    <nav id='menu-nav'>
      <h6 className='menu-item'><a href="">Home</a></h6>
      <h6 className='menu-item'><a href="">About</a></h6>
      <h6 className='menu-item'><a href="">Experience</a></h6>
      <h6 className='menu-item'><a href="">Work</a></h6>
      <h6 className='menu-item'><a href="">Skills</a></h6>
    <div className='social-row'>
    <a href=""><FontAwesomeIcon icon={["fab", "instagram"]} className='social-icon' style={{color:"#000000"}} /></a>
    <a href=""><FontAwesomeIcon icon={["fab", "github"]} className='social-icon' style={{color:"#000000"}} /></a>
    <a href=""><FontAwesomeIcon icon={["fab", "behance"]} className='social-icon' style={{color:"#000000"}} /></a>
    </div>
    </nav>
  </div>
);

export default Menu
