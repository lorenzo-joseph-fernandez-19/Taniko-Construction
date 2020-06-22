import React from 'react'
import { Link } from 'gatsby'
import Logo from "../images/logo-white.svg"


const Header = () => {
    return (
        <header className="level left header-spacing">
           <div className="level-item">
                <Link to="/"><img src={Logo} height="100" width="100" alt="Taniko Logo"/></Link>
            </div>
            <div className="level-item">
                <Link className="header-font "to="/our-mahi">Our Mahi</Link>
            </div>
            <div className="level-item">
                <Link className="header-font "to="/blog">Our Blog</Link>
            </div>
            <div className="level-item">
                <Link className="header-font "to="/contact"><button className="header-button">Get in Touch</button></Link>
            </div>
        </header>
    )
}

export default Header