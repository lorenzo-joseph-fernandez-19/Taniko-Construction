import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo-white.svg'

const Footer = class extends React.Component {
    render() {
      return (
        <footer className="footer has-background-black has-text-white">
          <div className="content has-background-black has-text-centered has-text-white">
            <div className="container has-background-black has-text-white">
              <div className="columns">
                <div className="column is-4">
                  <section>
                    <Link to="/"><img src={Logo} alt="Taniko Logo" style={{ width: '14em', height: '10em' }}/></Link>
                  </section>
                </div>
                <div className="column is-4">
                <section>
                    <ul>
                      <li><Link className="line" activeClassName="active-list" to="/about">About</Link></li>
                      <li><Link className="line" activeClassName="active-list" to="/what-we-do">What We Do</Link></li>
                      <li><Link className="line" activeClassName="active-list" to="/who-we-are">Who We Are</Link></li>
                      <li><Link className="line" activeClassName="active-list" to="/taniko-principles">Taniko Principles</Link></li>
                      <li><Link className="line" activeClassName="active-list" to="/our-clients">Our Clients</Link></li>
                      <li><Link className="line" activeClassName="active-list" to="/contact">Contact Us</Link></li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                <section>
                    <ul>
                      <li>(Social Icons}</li>
                    </ul>
                </section>  
                </div>
              </div>
            </div>
          </div>
        </footer>
      )
    }
  }
  
  export default Footer