import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'


const burgerMenu = () => {
    return (
        <Menu width="30%" right>
            <Link activeClassName="active-list" to="/">Home</Link>
            <Link activeClassName="active-list" to="/our-values">Our Values</Link>
            <Link activeClassName="active-list" to="/what-we-do">What We Do</Link>
            <Link activeClassName="active-list" to="/who-we-are">Who We Are</Link>
            <Link activeClassName="active-list" to="/our-clients">Our Clients</Link>
            <Link activeClassName="active-list" to="/blog">Our Blog</Link>
            <Link activeClassName="active-list" to="/contact">Contact Us</Link>
        </Menu>
    )
}

export default burgerMenu
  