import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo-white.svg'
import {slide as Menu} from 'react-burger-menu'

function navSlide () {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector ('.nav-links')
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener('click', () => {
     nav.classList.toggle("nav-active")
  })
}


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Link to="/"><img src={Logo} alt="Taniko Logo" width="250" height="250" /></Link>
      </div>
      <ul className="nav-links">
        <li><Link className="line" to="/what-we-do">What We Do</Link></li>
        <li><Link className="line" to="/who-we-are">Who We Are</Link></li>
        <li><Link className="line" to="/taniko-principles">Taniko Principles</Link></li>
        <li><Link className="line" to="/about">About Us</Link></li> 
        <li><Link className="line" to="/contact">Contact Us</Link></li> 
        <li><Link className="line" to="/our-clients">Our Clients</Link></li> 
      </ul>
   
    </nav>
  )
}

export default Navbar
