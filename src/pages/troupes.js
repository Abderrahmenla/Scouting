import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Troupes from "../components/Troupes/Troupes"
import SEO from "../components/SEO"

export default class troupes extends Component {
  render() {
    const backgroundFluidImageStack = [
      this.props.data.defaultBcg.childImageSharp.fluid,
      `linear-gradient(rgba(255, 89, 108, 0.8),rgba(226, 0, 26, 0.8))`,
    ].reverse()
    return (
      <Layout>
        <SEO
          title="Troupes"
          description="a troupes pages were you can find our troupes"
        />
        <main>
          <StyledHero img={backgroundFluidImageStack} />
          <Troupes />
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
