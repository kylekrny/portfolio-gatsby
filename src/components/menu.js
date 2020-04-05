import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showHeader: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
      showHeader: !prevState.showHeader
    }));
  }

  render() {
    const menu = (
      <div id='menu'>
        <div id='menu-header'>
        <p className='header-text'><button className='button-reset' onClick={this.handleClick}>Close</button></p>
        </div>
        <div id='mode-button-container'>
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
        <div id='menu-footer'>
          <p id="menu-footer-brand">Kyle Kearney</p>
      </div>
    </div>
    )

    const header = (
      <div id='header-container'>
        <p className='header-text desktop' id='header-brand'>Minimalist Web Developer</p>
        <p className='header-text' id='nav-link'><button className='button-reset' onClick={this.handleClick}>Menu</button></p>
      </div>
    )
    return (
      <div>
        {this.state.showHeader ? header : ''}
        {this.state.showMenu ? menu : ''}
      </div>

       
    
    )
  }
};

export default Menu
