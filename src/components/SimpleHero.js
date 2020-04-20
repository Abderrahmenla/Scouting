import React from "react"
import logo from "../images/logo-white.png"
import styled from "styled-components"
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

export default styled(SimpleHero)`
  background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.8),
    rgba(40, 180, 133, 0.8)
  );
`
