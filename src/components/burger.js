import React from 'react'
import { Link } from 'gatsby'
import { push as Menu } from 'react-burger-menu'


const burgerMenu = () => {
    return (
        <Menu width="100%" right>
            <Link to="/who-we-are">Who We Are</Link>
            <Link to="/our-values">Our Values</Link>
            <Link to="/our-services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
        </Menu>
    )
}

export default burgerMenu
  