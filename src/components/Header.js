import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <div className="top">
          <h1>SDG Astro Lounge</h1>
          <span>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </span>
        </div>
      </>
    )
  }
}

export default Header
