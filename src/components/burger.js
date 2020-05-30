import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'


const burgerMenu = () => {
    return (
        <Menu width="30%" right>
            <Link to="/">Home</Link>
            <Link to="/our-values">Our Values</Link>
            <Link to="/our-mahi">Our Mahi</Link>
            <Link to="/our-clients">Our Clients</Link>
            <Link to="/blog">Our Blog</Link>
            <Link to="/contact">Contact Us</Link>
        </Menu>
    )
}

export default burgerMenu
  