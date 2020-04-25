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
    `linear-gradient(rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8))`,
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
