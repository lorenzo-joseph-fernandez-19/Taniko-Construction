import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'


const burgerMenu = () => {
    return (
        <Menu width="100%" right>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/what-we-do">What We Do</Link>
            <Link to="/who-we-are">Who We Are</Link>
            <Link to="/taniko-principles">Taniko Principles</Link>
            <Link to="/our-clients">Our Clients</Link>
            <Link to="/contact">Contact Us</Link>
        </Menu>
    )
}

export default burgerMenu
  