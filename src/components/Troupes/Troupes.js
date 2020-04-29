import React from "react"
import TroupeList from "./TroupeList"
import { useStaticQuery, graphql } from "gatsby"

const getTroupes = graphql`
  query {
    troupes: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Troupes = () => {
  const { troupes } = useStaticQuery(getTroupes)

  return <TroupeList troupes={troupes} />
}

export default Troupes
