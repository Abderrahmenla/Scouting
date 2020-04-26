import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
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
  } = data.tour
  const [mainImage, ...tourImages] = images
  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} />
      <section>
        <div>
          <div>
            {tourImages.map((item, index) => {
              return <Img key={index} fluid={item.fluid} alt="single tour" />
            })}
          </div>
          <h2>{name}</h2>
          <div>
            <p>
              <FaMoneyBillWave />
              starting from ${price}
            </p>
            <p>
              <FaMap />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days}</h4>
          <p>{description}</p>
          <h2>daily schedule</h2>
          <div>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <AniLink fade to="/tours">
            back to tour
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
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
