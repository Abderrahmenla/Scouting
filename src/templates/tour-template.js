import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTroupe/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

const Template = ({ data }) => {
  const {
    name,
    country,
    days,
    description: { description },
    images,
    price,
    start,
    journey,
  } = data.troupe
  const [mainImage, ...troupeImages] = images
  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} />
      <section className="template-troupe">
        <div className="template-troupe__center">
          <div className="template-troupe__images">
            {troupeImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single troupe"
                  className="template-troupe__image"
                />
              )
            })}
          </div>
          <div className="center-div">
            <h2>{name}</h2>
            <div className="template-troupe__info">
              <p>
                <FaMoneyBillWave className="template-troupe__icon" />
                starting from ${price}
              </p>
              <p>
                <FaMap className="template-troupe__icon" />
                {country}
              </p>
            </div>
            <h4>starts on : {start}</h4>
            <h4>duration : {days}</h4>
            <p className="template-troupe__desc">{description}</p>
            <h2>daily schedule</h2>
            <div className="template-troupe__journey">
              {journey.map((item, index) => {
                return <Day key={index} day={item.day} info={item.info} />
              })}
              <AniLink fade to="/troupes" className="btn btn--green center-btn">
                back to troupes
              </AniLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    troupe: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Template
