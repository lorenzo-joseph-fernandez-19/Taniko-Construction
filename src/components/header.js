import React from 'react'
import { Link } from 'gatsby'
import Logo from "../images/logo-white.svg"

const Header = () => {
    return (
        <header className="header-spacing">
            <div className="level">
                <div className="level-item">
                    <Link to="/"><img src={Logo} height="150" width="150" alt="Taniko Logo"/></Link>
                </div>
                <div className="level-item">
                    <Link className="header-font line"to="/our-mahi">Our Mahi</Link>
                    <Link className="header-font line "to="/blog">Our Blog</Link>
                    <Link className="header-font"to="/contact"><button className="header-button">Get in Touch</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header