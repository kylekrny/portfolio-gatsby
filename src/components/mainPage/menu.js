import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { Link, animateScroll as scroll } from "react-scroll";
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
        <p className='header-text'><button className='button-reset menu-button' onClick={this.handleClick}>Close</button></p>
        </div>

        <nav id='menu-nav'>
          {/* <Link to="landing" className='menu-item' spy={true} smooth={true} offset={-200} duration= {800} onClick={this.handleClick}>Home</Link>
          <Link to="about" className='menu-item' spy={true} smooth={true} offset={-70} duration= {800} onClick={this.handleClick}>About</Link>
          <Link to="experience" className='menu-item' spy={true} smooth={true} offset={-70} duration= {800} onClick={this.handleClick}>Experience</Link>
          <Link to="work" className='menu-item' spy={true} smooth={true} offset={-90} duration= {800} onClick={this.handleClick}>Work</Link> */}
          
          <div id='mode-button-container'>
          <button id='mode-button'>Dark Mode</button>
          </div>
        <div className='social-row'>
        <a href=""><FontAwesomeIcon icon={["far", "envelope"]} className='social-icon' style={{color:"#000000"}} /></a>
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
        <>
        <p className='header-text' id='nav-link'><button className='button-reset menu-button' onClick={this.handleClick}>Menu</button></p>
        </>
    )
    return (
      <div id='head-main-container'>
        <div id='header-container'>
        <p className='header-text desktop' id='header-brand'>Minimalist Web Developer</p>
        {this.state.showHeader ? header : ''}
        </div>
        {this.state.showMenu ? menu : ''}
      </div>

       
    
    )
  }
};

export default Menu
