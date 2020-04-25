import React from "react"
import Title from "../Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function About() {
  return (
    <StaticQuery
      query={graphql`
        {
          aboutImage1: file(relativePath: { eq: "nat-1-large.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          aboutImage2: file(relativePath: { eq: "nat-2-large.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          aboutImage3: file(relativePath: { eq: "nat-3-large.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const img1 = data.aboutImage1.childImageSharp.fluid
        const img2 = data.aboutImage2.childImageSharp.fluid
        const img3 = data.aboutImage3.childImageSharp.fluid
        return (
          <section className="section-about">
            <Title title="EXCITING TROUPES FOR ADVENTUROUS KIDS" />
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  You're going to fall in love with Scouting
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live adventures like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores nulla deserunt voluptatum nam.
                </p>

                <AniLink fade to="/tours" className="btn-text">
                  Learn more &rarr;
                </AniLink>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <Img
                    alt="Nat 1"
                    className="composition__photo composition__photo--p1"
                    fluid={img1}
                  />

                  <Img
                    alt="Nat 2"
                    className="composition__photo composition__photo--p2"
                    fluid={img2}
                  />

                  <Img
                    alt="Nat 3"
                    className="composition__photo composition__photo--p3"
                    fluid={img3}
                  />
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
