import React from "react"
import Title from "../Title"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { useStaticQuery, graphql } from "gatsby"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "nat-1-large.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className="section-about">
      <Title title="EXCITING TROUPES FOR ADVENTUROUS KIDS" />
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with Scouting
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>

          <AniLink fade to="/tours" className="btn-text">
            Learn more &rarr;
          </AniLink>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <Img
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              fluid={aboutImage.childImageSharp.fluid}
            />

            <Img
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              fluid={aboutImage.childImageSharp.fluid}
            />

            <Img
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              fluid={aboutImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
/*

*/
