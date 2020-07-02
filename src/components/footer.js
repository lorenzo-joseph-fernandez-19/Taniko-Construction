import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../images/logo-white.svg"



const Footer = () => {
  return (
    <footer className="footer background-is-black">
      <div className="container has-text-centered">
        <div className="content">
          <div className="columns">
            <div className="column column-style">
              <ul>
                <li className="footer-title"><p>About Us</p></li>
                <li className="list-style"><Link to="/our-mahi">Our Mahi</Link></li>
                </ul>
              </div>
              <div className="column column-style">
              <ul>
                <li className="footer-title"><p>News</p></li>
                <li className="list-style"><Link to="/blog">Our Blog</Link></li>
              </ul>
              </div>
              <div className="column column-style">
              <ul>
                <li className="footer-title"><p>Get in Touch</p></li>
                <li className="list-style"><Link to="/contact">Contact Us</Link></li>
              </ul>
              </div>
              <div className="column">
                <Link to="/"><img src={Logo} alt="Taniko Logo" width="250" height="250" /></Link>
              </div>
            </div>
            <hr className="hr"></hr>
            <div className="level footer-margin">
              <div className="level-item">
                <p className="footer-font">{`© ${new Date().getFullYear()} Taniko Group Limited`}</p>
              </div>
              <div className="level-item">
                <Link className="footer-font" to="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="level-item">
                <Link className="footer-font" to="/terms-and-conditions">Terms & Conditions</Link>
              </div>
              <div className="level-item">
                {/* <OutboundLink href="https://www.facebook.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'facebook-square']} />
                </OutboundLink>
                <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'linkedin']} />
                </OutboundLink> */}
                <OutboundLink href="https://www.instagram.com/taniko_nz/" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'instagram']} />
                </OutboundLink>
                {/* <OutboundLink href="https://www.twitter.com" rel="noreferrer noopener" target="_blank">
                  <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'twitter']} />
                </OutboundLink> */}
                </div>
              </div>
          </div>
        </div>
    </footer>
  )
}

  export default Footer
