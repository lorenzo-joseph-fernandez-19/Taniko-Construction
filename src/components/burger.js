import React from 'react'
import { Link } from 'gatsby'
import { push as Menu } from 'react-burger-menu'


const burgerMenu = () => {
    return (
        <Menu width="100%" right>
            <Link to="/our-mahi">Our Mahi</Link>
            <Link to="/blog">Our Blog</Link>
            <Link to="/contact">Contact Us</Link>
        </Menu>
    )
}

export default burgerMenu
  