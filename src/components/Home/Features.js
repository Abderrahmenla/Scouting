import React from "react"
import "../../css/icon-font.css"
import featurescontent from "../../constants/featurescontent"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Features = () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nat-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const backgroundFluidImageStack = [
    image.image.childImageSharp.fluid,
    `linear-gradient(rgba(126, 213, 111, 0.8),rgba(40, 180, 133, 0.8))`,
  ].reverse()
  return (
    <BackgroundImage
      Tag={`section`}
      fluid={backgroundFluidImageStack}
      className="section-features"
    >
      <div className="row">
        {featurescontent.map((item, index) => {
          return (
            <div className="col-1-of-4" key={index}>
              <div className="feature-box" key={index + 1}>
                <i className={`feature-box__icon ${item.classi}`}></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {item.title}
                </h3>
                <p className="feature-box__text">{item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </BackgroundImage>
  )
}

export default Features
