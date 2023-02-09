import React from 'react'

import PropTypes from 'prop-types'
import { useAuth ,logout} from '../auth'
import './navigation-links.css'
import { Link } from 'react-router-dom'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link className="navigation-links-text"  to="/">{props.text}</Link>
      <Link className="navigation-links-text1" to="/profile">{props.text1}</Link>
      <a className="navigation-links-text2" href="/" onClick={()=>{logout()}}>{props.text2}</a>
      <Link className="navigation-links-text3" to="/contact">{props.text3}</Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Logout',
  text3: 'Contact',
  text1: 'Profile',
  text: 'Home',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
