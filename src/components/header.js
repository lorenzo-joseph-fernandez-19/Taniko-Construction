import React from 'react'
import { Link } from 'gatsby'
import Logo from "../images/logo-white.svg"

const Header = () => {
    return (
        <header className="header-spacing">
            <div className="level">
                <div className="level-item">
                    <Link to="/"><img src={Logo} height="100" width="100" alt="Taniko Logo"/></Link>
                </div>
                <div className="level-item">
                    <Link className="header-font line" to="/who-we-are">Who We Are</Link>
                    <Link className="header-font line" to="/our-values">Our Values</Link>
                    <Link className="header-font line" to="/our-services">Our Services</Link>
                    <Link className="header-font line" to="/contact">Contact Us</Link>
                </div>
            </div>
        </header>
    )
}

export default Header