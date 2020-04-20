import React from "react"
import logo from "../images/logo-white.png"
import BackgroundImage from "gatsby-background-image"

const SimpleHero = ({ img, children }) => {
  return (
    <BackgroundImage className="header" fluid={img}>
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      {children}
    </BackgroundImage>
  )
}

export default SimpleHero
