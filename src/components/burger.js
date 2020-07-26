import React from 'react'
import { Link } from 'gatsby'
import { push as Menu } from 'react-burger-menu'


const burgerMenu = () => {
    return (
        <Menu width="100%" right>
            <Link className="list-line" to="/who-we-are">Who We Are</Link>
            <Link className="list-line" to="/our-values">Our Values</Link>
            <Link className="list-line" to="/our-services">Our Services</Link>
            <Link className="list-line" to="/contact">Contact Us</Link>
        </Menu>
    )
}

export default burgerMenu
  