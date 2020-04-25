import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Image = props => {
  const image = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const backgroundFluidImageStack = [
    image.allImageSharp.edges.find(element => {
      return element.node.fluid.src.split("/").pop() === props.imgsrc
    }).node.fluid,
    props.lin,
  ].reverse()
  return (
    <BackgroundImage
      Tag={`div`}
      fluid={backgroundFluidImageStack}
      className={props.classi}
    ></BackgroundImage>
  )
}

export default Image
