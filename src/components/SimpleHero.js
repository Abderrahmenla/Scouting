import React from "react"
import logo from "../images/logo-white.png"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const SimpleHero = ({ children }) => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const backgroundFluidImageStack = [
    image.image.childImageSharp.fluid,
    `linear-gradient(rgba(255, 89, 108, 0.8),rgba(226, 0, 26, 0.8))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag={`header`}
      className="header"
      fluid={backgroundFluidImageStack}
    >
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      {children}
    </BackgroundImage>
  )
}

export default SimpleHero
