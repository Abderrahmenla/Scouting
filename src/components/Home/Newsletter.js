import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Newsletter = () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nat-10.jpg" }) {
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
    `linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    )`,
  ].reverse()
  return (
    <section className="section-book">
      <div className="row">
        <BackgroundImage fluid={backgroundFluidImageStack} className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">
                  Subscribe to our newsletter
                </h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small troupe group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large troupe group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </BackgroundImage>
      </div>
    </section>
  )
}

export default Newsletter
