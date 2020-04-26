import React from "react"
import Title from "../Title"
import testimonials from "../../constants/testimonials"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../../images/nat-8.jpg"
import logoo from "../../images/nat-9.jpg"
import BackgroundImage from "gatsby-background-image"
import Image from "../Image.js"

const FeaturedTours = () => {
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
    `linear-gradient(to right bottom, #f6cd5f, #e3cf5b, #ced25a, #b8d35d, #a1d463, #7dd577, #54d48d, #00d1a4, #00c9ca, #00beeb, #00aeff, #2998ff)`,
  ].reverse()
  return (
    <section className="section-stories">
      <Title title="We make kids genuinely happy" />
      <BackgroundImage fluid={backgroundFluidImageStack} className="bg-img">
        {testimonials.map((item, index) => {
          return (
            <div className="row" key={index + 1}>
              <div className="story" key={index + 2}>
                <figure className="story__shape">
                  <img
                    src={!index ? logo : logoo}
                    alt={`testimonial ${index + 1}`}
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    {item.name}
                  </figcaption>
                </figure>
                <div className="story__text" key={index + 3}>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </BackgroundImage>
    </section>
  )
}

export default FeaturedTours
