import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo-white.svg'

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

  // const burger = document.getElementsByClassName('burger')[0]
  // const nav = document.getElementsByClassName('nav-links')[0]

  // burger.addEventListener('click', () => {
  //   nav.classList.toggle('nav-active')
  // })
  // // const navLinks = document.getElementsByClassName('nav-links li')[0]

  // // // Set nav active status with boolean
  // // let isActive = false;
  // // console.log("nav-active : " + isActive)
  

  // // burger.addEventListener("click", ()=>{

  // //     //Toggle nav
  // //     nav.classList.toggle("nav-active");

  // //     // Toggle nav active status to true/false
  // //     isActive = !isActive;
  // //     console.log("nav-active : " + isActive)
      
  // //     //Animate link
  // //     navLinks.forEach((link, index)=>{
  // //         if(isActive) {
  // //             link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
  // //             console.log("nav li: "+ index + " in");
  // //         } else {
  // //             // link.style.animation = "";
  // //             link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
  // //             // link.style.animation = "";
  // //             console.log("nav li: "+ index + " out");
  // //         }
  // //         console.log(link.style.animation);
  // //     });
      
  // //     //Burger animation
  // //     burger.classList.toggle('toggle');
  // // });


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Link to="/"><img src={Logo} alt="Taniko Logo" width="250" height="250" /></Link>
      </div>
      <ul className="nav-links">
        <li><Link className="line" activeClassName="active-list" to="/what-we-do">What We Do</Link></li>
        <li><Link className="line" activeClassName="active-list" to="/who-we-are">Who We Are</Link></li>
        <li><Link className="line" activeClassName="active-list" to="/taniko-principles">Taniko Principles</Link></li>
        <li><Link className="line" activeClassName="active-list" to="/about">About Us</Link></li> 
        <li><Link className="line" activeClassName="active-list" to="/our-clients">Our Clients</Link></li> 
        <li><Link className="line" activeClassName="active-list" to="/contact">Contact Us</Link></li> 
      </ul>
      <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    // <nav className="navbar">
    //     <img src={Logo} className="brand-title" width="250" height="250"/>
    //     <a href="#" className="toggle-button">
    //       <span className="bar"></span>
    //       <span className="bar"></span>
    //       <span className="bar"></span>
    //     </a>
    //     <div className="navbar-links">
    //       <ul>
    //         <li><a href="#">Home</a></li>
    //         <li><a href="#">About</a></li>
    //         <li><a href="#">Contact</a></li>
    //       </ul>
    //     </div>
    //   </nav>
  )
}

export default Navbar
