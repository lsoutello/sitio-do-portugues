import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo.png"

// import './header.css'

class Header extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render() {
    return (
      <header class={this.state.isTop ? "header-background-top" : "header-background"}>
        <Link to="/">
          <img class="logo" src={logo} alt="logo do sítio"/>
        </Link>
        <div class="header-navbar">
          <ul>
            <li class="header-button"><Link to="/adega">ADEGA</Link></li>
            <li class="header-button"><Link to="/restaurante">RESTAURANTE</Link></li>
            <li class="header-button"><Link to="/passeios">PASSEIOS</Link></li>
            <li class="header-button"><Link to="/contato">CONTATO</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header
