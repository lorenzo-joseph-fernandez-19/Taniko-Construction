import React from 'react'
import { Link } from 'gatsby'
import Logo from "../images/logo-white.svg"


const Header = () => {
    return (
        <header className="navbar has-background-black">
            <div className="navbar-brand">
                <Link to="/"><img src={Logo} height="100" width="100"/></Link>
            </div>
            <div className="navbar-item is-flex-desktop-only">
                <Link to="/blog">Our Blog</Link>
            </div>
        </header>
    )
}

export default Header