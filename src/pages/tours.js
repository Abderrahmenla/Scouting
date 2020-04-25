import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"

export default class tours extends Component {
  render() {
    const backgroundFluidImageStack = [
      this.props.data.defaultBcg.childImageSharp.fluid,
      `linear-gradient(rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8))`,
    ].reverse()
    return (
      <Layout>
        <SEO title="Tours" />
        <main>
          <StyledHero img={backgroundFluidImageStack} />
          <Tours />
        </main>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
