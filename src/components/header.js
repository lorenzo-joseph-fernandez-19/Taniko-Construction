import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import MauriAtua from '../images/mauri-atua.svg'
import MauriTangata from '../images/mauri-tangata.svg'
import MauriWhenua from '../images/mauri-whenua.svg'
import Logo from '../images/logo-white.svg'
import About from '../images/about.svg'


const NavbarItem = props => (
    <Link className="link line" activeClassName="active-list" to={props.page}>
      {props.pagename}
    </Link>
  )
  
  const NavbarBurger = props => (
    <div onClick={props.toggleMenu} className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}>
      <span className="span-style" />
      <span className="span-style"/>
      <span className="span-style"/>
    </div>
  )
  
  export default class Header extends React.Component {
    state = {
      activeMenu: false,
    }
    toggleMenu = () => {
      this.setState({
        activeMenu: !this.state.activeMenu,
      })
    }
    render() {
      return (
        <section className="hero section">
          <nav className="level-left">
              <Link className to="/">
                <img className="level-item" src={Logo} width="250" height="250" alt="Taniko Logo"/>
              </Link>
              <NavbarBurger active={this.state.activeMenu} toggleMenu={this.toggleMenu}/>
  
            <div className="">
              <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
                <div className="level-item navbar-item">
                  <NavbarItem page="/" pagename="Home" />
                  <NavbarItem page="/mauri-atua" pagename="Mauri Atua" />
                  <NavbarItem page="/mauri-tangata" pagename="Mauri Tangata" />
                  <NavbarItem page="/mauri-whenua" pagename="Mauri Whenua"/>
                </div>
              </div>
            </div>
          </nav>
        </section>
      )
    } 
  }

// const Header = () => {
//     return (
//         <header>
//             <Menu right>
//             <Link className="menu-item" to="/mauri-atua"><img className="icon is-large" src={MauriAtua} />Mauri Atua</Link>
//             <Link className="menu-item" to="/mauri-tangata"><img src={MauriTangata} width="50" height="50" />Mauri Tangata</Link>
//             <Link className="menu-item" to="/mauri-whenua"><img src={MauriWhenua} width="50" height="50" />Mauri Whenua</Link>
//             <Link className="menu-item" to="/about"><img src={About} width="50" height="50" />About</Link>
//             </Menu>
//         </header>
//     )
// }

// export default Header