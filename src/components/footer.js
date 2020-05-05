import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo-white.svg'

const Footer = class extends React.Component {
    render() {
      return (
        <footer className="level">
          <div className="level-item">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          </div>
       
        </footer>
      )
    }
  }
  
  export default Footer