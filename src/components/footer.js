import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../images/logo-white.svg"


const Footer = () => {
  return (
    <footer className="footer has-background-black">
      <div className="container has-text-centered">
        <div className="content">
          <div className="columns">
            <div className="column">
              <ul>
                <li ><Link activeClassName="active-list" to="/">Home</Link></li>
                <li><Link activeClassName="active-list" to="/about">About Us</Link></li>
                <li><Link activeClassName="active-list" to="/what-we-do">What We Do</Link></li>
                <li><Link activeClassName="active-list" to="/who-we-are">Who We Are</Link></li>
                <li><Link activeClassName="active-list" to="/our-clients">Our Clients</Link></li>
                <li><Link activeClassName="active-list" to="/blog">Blog</Link></li>
                <li><Link activeClassName="active-list" to="/contact">Contact Us</Link></li>
              </ul>
              </div>

              <div className="column">
                <div className="column">
                  <img src={Logo} alt="Taniko Logo" width="250" height="250" />
                </div>
                <OutboundLink href="https://www.facebook.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'facebook-square']} />
                </OutboundLink>
                <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'linkedin']} />
                </OutboundLink>
                <OutboundLink href="https://www.instagram.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'instagram']} />
                </OutboundLink>
                <OutboundLink href="https://www.twitter.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'twitter']} />
                </OutboundLink>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

  export default Footer

  // <p>{`© ${new Date().getFullYear()} Taniko Group Limited`}</p>