import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id='header-container'>
      <p className='header-text desktop' id='header-brand'>Web Developer</p>
      <p className='header-text' id='nav-link'>Menu</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
