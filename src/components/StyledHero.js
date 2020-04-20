import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
const StyledHero = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  background: none;
  min-height: 50vh;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
