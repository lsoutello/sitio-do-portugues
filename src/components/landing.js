import React from 'react'
import { Link } from 'gatsby'
import landing from "../images/landing.png"

// import './header.css'

class Landing extends React.Component {
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
      <img class="landing" src={landing} alt="landing photo"/>
    );
  }
}

export default Landing
