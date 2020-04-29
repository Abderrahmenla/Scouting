import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Popup = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          popup1: file(relativePath: { eq: "nat-8.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          popup2: file(relativePath: { eq: "nat-9.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const img1 = data.popup1.childImageSharp.fluid
        const img2 = data.popup2.childImageSharp.fluid
        return (
          <div className="popup" id="popup">
            <div className="popup__content">
              <div className="popup__left">
                <Img fluid={img1} alt="popup img1" className="popup__img" />
                <Img fluid={img2} alt="popup img2" className="popup__img" />
              </div>
              <div className="popup__right">
                <a href="#section-tours" className="popup__close">
                  &times;
                </a>
                <h2 className="heading-secondary u-margin-bottom-small">
                  Join us now
                </h2>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Important &ndash; Please read these terms before joining
                </h3>
                <p className="popup__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed sed risus pretium quam. Aliquam sem et tortor consequat
                  id. Volutpat odio facilisis mauris sit amet massa vitae. Mi
                  bibendum neque egestas congue. Placerat orci nulla
                  pellentesque dignissim enim sit. Vitae semper quis lectus
                  nulla at volutpat diam ut venenatis. Malesuada pellentesque
                  elit eget gravida cum sociis natoque penatibus et. Proin
                  fermentum leo vel orci porta non pulvinar neque laoreet.
                  Gravida neque convallis a cras semper. Molestie at elementum
                  eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec
                  ullamcorper sit amet risus nullam eget. Nam libero justo
                  laoreet sit. Amet massa vitae tortor condimentum lacinia quis
                  vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                  euismod nisi porta.
                </p>
                <AniLink fade to="/troupes" className="btn btn--green">
                  Join now
                </AniLink>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Popup
